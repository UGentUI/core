import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { UgInput } from '../input';
import {
  maskitoDateTimeOptionsGenerator,
  maskitoWithPlaceholder
} from '@maskito/kit';
import { Maskito, type MaskitoOptions } from '@maskito/core';
import { format, formatISO, parse, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import {
  DateComponents,
  DateMode,
  DatePart,
  isValidDate,
  TimeComponents,
  TimeMode,
  TimePart
} from './datatimeinput.types.ts';

/**
 * This component can edit datetime. The internal date representation is always local time.
 * (We do however create an UTCDate internally before apply the date-fns function to format to the desired outputted value. See https://stackoverflow.com/questions/58561169/date-fns-how-do-i-format-to-utc)
 * So, when entering or picking a datetime, it is always local time which is being entered/picked.
 * The property format in combination with timezone can however can specify to serialize / parse taking timezone into account.
 */
@customElement('ug-datetimeinput')
export class UgDatetimeinput extends LitElement {
  static dependencies = {
    'ug-input': UgInput
  };

  /**
   * @attr
   * Tells whether this component should show a clear icon or not
   */
  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  /**
   * Tells whether this component is disabled or not
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Tells whether this component is required or not
   */
  @property({ type: Boolean, reflect: true }) required: boolean = false;

  /**
   * Tells whether this component is disabled or not
   */
  @property({
    attribute: 'placeholderwhiletyping',
    type: Boolean,
    reflect: true
  })
  placeholderWhileTyping: boolean = true;

  /**
   * Tells whether this component should behave as if the data is still loading
   */
  @property({ reflect: true, type: String }) size:
    | 'small'
    | 'medium'
    | 'large' = 'medium';

  @property({ reflect: true, type: String }) dateSeparator: string = '/';

  @property({ reflect: true, type: String }) timeSeparator: string = ':';

  @property({ reflect: true, type: String }) datetimeSeparator: string = ', ';

  /**
   * This is a subset of Maskito's DateMode. This Dateinput component only supports
   * fully defined dates. This with a specific dayOfMonth, month and year.
   * Following options are possible:
   * <ul>
   *   <li>dd/mm/yyyy</li>
   *   <li>mm/dd/yyyy</li>
   *   <li>yyyy/mm/dd</li>
   *   </ul>
   *
   * Note that the '/' in those options do NOT have any meaning. It is used to differentiate
   * the different parts in the input mask.
   *
   * The separator that will be used in the input mask is defined by 'dateSeparator'
   *
   */
  @property({ reflect: true, type: String })
  dateMode: DateMode = 'dd/mm/yyyy';

  @property({ attribute: 'timemode', reflect: true, type: String })
  timeMode: TimeMode = 'HH:MM';

  @property({ reflect: true, type: String }) format: string | undefined = undefined;// = "yyyy-MM-dd'T'HH:mm";

  /**
   * When timezone is specified, the local date, entered by the user, will be transformed to the given timezone before
   * it is formatted as a 'value'
   */
  @property({ reflect: true, type: String }) timezone!: string | null;

  @property({ type: String, reflect: true }) label!: string | null;
  /**
   * The value as it will be outputted to clients (both in ug-change events and when users do a '.value' on this component)
   * As of the standard in form elements, this is always a string
   * when no timezone is specified, this is a local datetime. When a time is specified, the local datetime will be transformed
   * to datetime in the given timezone.
   */
  @property({ type: String, reflect: true }) value: string = '';

  /**
   * Tells whether this component should render a 'picker' or not. (defaults to true)
   */
  @property({ type: Boolean, reflect: false }) showPicker: boolean = true;

  @query('ug-input') private inputComponent!: UgInput;

  @query('input[type="datetime-local"]')
  private dateTimeInput!: HTMLInputElement;

  @state()
  private localDatetimeValue: string | null = null;

  //One of these formats is used for creating datestrings to be used by the native datetime-local input.
  //depending on the timeMode one with of without seconds will be used. This way, the picker will
  //only show seconds when it is effectively used.
  private localDatetimeFormatWithoutSeconds: string = "yyyy-MM-dd'T'HH:mm";
  private localDatetimeFormatWithSeconds: string = "yyyy-MM-dd'T'HH:mm:ss";

  // @state()
  private internalValue: string = '';

  private maskitoInstance?: Maskito;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    console.info("Updated called on datetimeinput. Changed properties:", changedProperties)
    let updateInput = false;

    if (changedProperties.has('value')) {
      if (this.internalValue !== this.value) {
        // The property has been changed from 'outside' (so the user isn't typing etc. We must update the inputfield accordingly.
        updateInput = true;
        //update the internal value. By comparing value and internalValue, we know who did update the value property
        this.internalValue = this.value;
      } else {
        // The change came from the user, entering in the input. We must not update (and possibly clear) that input because of that.
        // In other words: The value of this component WILL become null in case of an invalid date, but the entered text should not be cleared
        updateInput = false;
      }
    }

    if (
      changedProperties.has('dateMode') ||
      changedProperties.has('dateSeparator') ||
      changedProperties.has('timeMode') ||
      changedProperties.has('timeSeparator') ||
      changedProperties.has('datetimeSeparator') ||
      changedProperties.has('placeholderWhileTyping')
    ) {
      void this.initializeMask();
      updateInput = true;
    }

    if (this.value == null || this.value == '') {
      this.localDatetimeValue = '';
      if (updateInput) {
        this.inputComponent.value = '';
      }
    } else {
      let incomingValueAsLocalDate;
      if (this.format) {
        incomingValueAsLocalDate = parse(this.value.replace('Z','+00:00'), this.format, new Date());
      } else {
        incomingValueAsLocalDate = parseISO(this.value.replace('Z','+00:00'))
      }

      console.info("Incoming value as local date:", incomingValueAsLocalDate)
      if (!isNaN(incomingValueAsLocalDate.getTime())) {
        //update valueAsIso8601

        this.localDatetimeValue = format(
          incomingValueAsLocalDate,
          this.useSeconds
            ? this.localDatetimeFormatWithSeconds
            : this.localDatetimeFormatWithoutSeconds
        );

        if (updateInput) {
          //update maskedString (display value)
          this.inputComponent.value = formatDateToMask(
            incomingValueAsLocalDate,
            this.dateSeparator,
            this.dateMode,
            this.timeSeparator,
            this.timeMode,
            this.datetimeSeparator
          );
        }
      } else {
        //update valueAsIso8601
        this.localDatetimeValue = '';

        //update maskedString (displayValue)
        if (updateInput) {
          this.inputComponent.value = '';
        }
      }
    }

    super.updated(changedProperties);
  }

  get shouldShowPrefixSlot(): boolean {
    return this.hasNamedSlot('prefix');
  }

  get useSeconds(): boolean {
    return this.timeMode == 'HH:MM:SS';
  }

  get shouldShowSuffixSlot(): boolean {
    return this.hasNamedSlot('suffix');
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  private transformMaskedInputToDate = (maskedValue: string): Date | null => {
    let returnedDate = null;
    // Remove any non-digit characters
    const cleanValue = maskedValue.replace(/\D/g, '');

    if (cleanValue.length < 8) return null;

    const day = cleanValue.slice(0, 2);
    const month = cleanValue.slice(2, 4);
    const year = cleanValue.slice(4, 8);

    // Check if the value matches the
    if (this.timeMode == 'HH:MM') {
      if (cleanValue.length !== 12) return null;

      const hh = cleanValue.slice(8, 10);
      const mm = cleanValue.slice(10, 12);

      returnedDate = new Date(
        parseInt(year),
        parseInt(month) - 1, // JavaScript months are 0-indexed
        parseInt(day),
        parseInt(hh),
        parseInt(mm)
      );
    } else if (this.timeMode == 'HH:MM:SS') {
      if (cleanValue.length !== 14) return null;
      const hh = cleanValue.slice(8, 10);
      const mm = cleanValue.slice(10, 12);
      const ss = cleanValue.slice(12, 14);

      returnedDate = new Date(
        parseInt(year),
        parseInt(month) - 1, // JavaScript months are 0-indexed
        parseInt(day),
        parseInt(hh),
        parseInt(mm),
        parseInt(ss)
      );
    } else {
      throw Error('TimeMode not supported ' + (this.timeMode as string));
    }

    if (!isValidDate(returnedDate)) return null;
    return returnedDate;
  };

  private async initializeMask() {
    // Find the native input element
    console.info('Initializing mask');
    //wait until the input is fully rendered and initialized
    await this.inputComponent.updateComplete;

    let shadowRoot = this.inputComponent.shadowRoot!;
    let nativeInput = shadowRoot.querySelector('input');

    if (nativeInput) {
      // Create mask options
      let dateMaskOptions = maskitoDateTimeOptionsGenerator({
        dateMode: this.dateMode,
        timeMode: this.timeMode,
        dateSeparator: this.dateSeparator,
        dateTimeSeparator: this.datetimeSeparator
      });

      let maskToUse: MaskitoOptions;
      if (this.placeholderWhileTyping) {
        maskToUse = {
          ...dateMaskOptions,
          ...maskitoWithPlaceholder(this.placeholder)
        };
      } else {
        maskToUse = {
          ...dateMaskOptions
        };
      }

      // Create and apply the mask
      if (this.maskitoInstance) {
        this.maskitoInstance.destroy();
      }
      this.maskitoInstance = new Maskito(nativeInput, maskToUse);
    }
  }

  private handleInputChange = (event: Event) => {
    event.stopPropagation();
    //the change event will only be fired when the result becomes a valid date or becomes null.
    //this is handled in the
  };

  private handleInputBlur = (event: Event) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent(event.type));
  };

  private handleInputFocus = (event: Event) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent(event.type));
  };

  private handleInputInput = () => {
    // event.stopPropagation();
    this.tryToUpdateValue();
    // this.dispatchEvent(new CustomEvent(event.type));
  };

  private handleCalendarClick = () => {
    if (this.disabled) return;
    (this.dateTimeInput as unknown as HTMLInputElement).showPicker();
  };

  private handleCalendarDatePicked = () => {
    let isoDate = (this.dateTimeInput as unknown as HTMLInputElement).value;
    let date = parseISO(isoDate);

    let currentValue = this.value;

    this.updateValueAccordingLocalDate(date);

    if (currentValue != this.value) {
      this.dispatchEvent(
        new CustomEvent('ug-change', {
          detail: this.value,
          bubbles: true,
          composed: true
        })
      );
    }
  };

  private handleInputClear = (event: Event) => {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent(event.type));
  };

  get placeholder(): string {
    //we know a dateMode always uses a '/' to separate the different parts
    //each part can only be [dd,mm,yyyy]
    const datePart = this.dateMode
      .split('/')
      .map((part) => {
        switch (part) {
          case 'dd':
            return 'dd';
          case 'mm':
            return 'mm';
          case 'yyyy':
            return 'yyyy';
          default:
            return part;
        }
      })
      .join(this.dateSeparator);

    const timePart = this.timeMode.split(':').join(this.timeSeparator);

    return `${datePart}${this.datetimeSeparator}${timePart}`;
  }

  render() {
    return html`
      <ug-input
        spellcheck="false"
        label="${this.label}"
        size="${this.size}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?clearable="${this.clearable}"
        ?placeholderwhiletyping="${this.placeholderWhileTyping}"
        placeholder="${this.placeholder}"
        @ug-change="${this.handleInputChange}"
        @ug-clear="${this.handleInputClear}"
        @ug-focus="${this.handleInputFocus}"
        @ug-blur="${this.handleInputBlur}"
        @ug-input="${this.handleInputInput}"
      >
        ${this.shouldShowPrefixSlot
          ? html` <div class="prefix">
              <slot name="prefix"></slot>
            </div>`
          : ''}

        <div slot="suffix">
          ${this.shouldShowSuffixSlot
            ? html` <slot name="suffix"></slot> `
            : ''}
          ${this.showPicker
            ? html`
            <input style="visibility: hidden; width: 0; height: 0;" /
            .value="${this.localDatetimeValue}"
            type="datetime-local"
            @change="${this.handleCalendarDatePicked}"
            />
            <ug-icon
              name="calendar"
              @click="${this.handleCalendarClick}"
            ></ug-icon>
          `
            : ''}
        </div>
      </ug-input>
    `;
  }

  /**
   * This method checks if the entered date is a valid Date.
   * If so, the value will be updated accordingly. If not, the value becomes null.
   * if the value did change, a ug-change event will be fired
   * @private
   */
  private tryToUpdateValue() {
    const maskedValue = this.inputComponent.value;
    const localDate = this.transformMaskedInputToDate(maskedValue);

    // Update form control or dispatch custom event
    let currentDate = this.value;

    this.updateValueAccordingLocalDate(localDate);

    this.internalValue = this.value;

    if (currentDate != this.value) {
      this.dispatchEvent(
        new CustomEvent('ug-change', {
          detail: this.value,
          bubbles: true,
          composed: true
        })
      );
    }
  }

  private updateValueAccordingLocalDate(localDate: Date | null) {
    // console.info('Updating value according to local date', localDate);
    if (localDate == null) {
      this.value = '';
    } else {
      if (this.timezone) {
        if (this.format) {
          // console.info("Formatting with timezone and format " + this.format)
          this.value = formatInTimeZone(localDate, this.timezone, this.format);
        } else {
          // console.info("Formatting with timezone and default format")
          this.value = formatInTimeZone(localDate, this.timezone, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        }
      } else {
        if (this.format) {
          // console.info("Formatting without timezone and format " + this.format)
          this.value = format(localDate, this.format);
        } else {
          // console.info("Formatting without timezone and default format")
          this.value = localDate.toISOString();
        }
      }
    }
  }
}

/**
 * Creates a string value which matches the used dateMode and dateSeparator.
 * It is used to create the display value of a given dateValue
 * @param date
 * @param dateMode
 * @param dateSeparator
 * @param timeMode
 * @param timeMode
 * @param dateTimeSeparator
 */
function formatDateToMask(
  date: Date,
  dateSeparator: string,
  dateMode: DateMode,
  timeSeparator: string,
  timeMode: TimeMode,
  dateTimeSeparator: string
): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Split the dateMode to determine the order of components
  const dateModeParts = dateMode.toLowerCase().split('/') as Array<DatePart>;
  const timeModeParts = timeMode.split(':') as Array<TimePart>;

  // Create an object to map mode parts to their values
  const dateComponents: DateComponents = {
    dd: day,
    mm: month,
    yyyy: year
  };

  const timeComponents: TimeComponents = {
    HH: hour,
    MM: minutes,
    SS: seconds
  };

  // Construct the date string based on the specified mode
  const formattedDate = dateModeParts
    .map((part: DatePart) => dateComponents[part])
    .join(dateSeparator);

  const formattedTime = timeModeParts
    .map((part: TimePart) => timeComponents[part])
    .join(timeSeparator);

  return formattedDate + dateTimeSeparator + formattedTime;
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-datetimeinput': UgDatetimeinput;
  }
}
