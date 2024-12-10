import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { UgInput } from '../input';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { Maskito } from '@maskito/core';
import { format, formatISO, parse, parseISO } from 'date-fns';

/**
 * Supported Maskito DateModes.
 */
export type DateMode = 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';
/**
 * used parts in ours supported DateModes
 */
export type DatePart = 'dd' | 'mm' | 'yyyy';

/**
 * Represents a set of date components mapped to their respective string values.
 */
export type DateComponents = {
  [key in DatePart]: string;
};

/**
 * Creates a string value which matches the used dateMode and dateSeparator.
 * It is used to create the display value of a given dateValue
 * @param date
 * @param dateMode
 * @param dateSeparator
 */
function formatDateToMask(
  date: Date,
  dateMode: DateMode,
  dateSeparator: string
): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  // Split the dateMode to determine the order of components
  const modeParts = dateMode.toLowerCase().split('/') as Array<DatePart>;

  // Create an object to map mode parts to their values
  const dateComponents: DateComponents = {
    dd: day,
    mm: month,
    yyyy: year
  };

  // Construct the date string based on the specified mode
  return modeParts
    .map((part: DatePart) => dateComponents[part])
    .join(dateSeparator);
}

@customElement('ug-dateinput')
export class UgDateinput extends LitElement {
  static dependencies = {
    'ug-input': UgInput
  };

  /**
   * Tells whether this component should show a clear icon or not
   */
  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  /**
   * Tells whether this component is disabled or not
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Tells whether this component should behave as if the data is still loading
   */
  @property({ reflect: true, type: String }) size:
    | 'small'
    | 'medium'
    | 'large' = 'medium';

  @property({ reflect: true, type: String }) dateSeparator: string = '/';

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
  @property({ reflect: true, type: String }) dateMode: DateMode = 'dd/mm/yyyy';

  @property({ reflect: true, type: String }) format: string = 'yyyy-MM-dd';

  @property({ type: String, reflect: true }) label: string | null = null;

  @property({ type: String, reflect: true }) value: string = '';

  /**
   * Tells whether this component should render a 'picker' or not. (defaults to true)
   */
  @property({ type: Boolean, reflect: true }) showPicker: boolean = true;

  @query('ug-input') private inputComponent!: UgInput;

  @query('input[type="date"]') private dateInput!: HTMLInputElement;

  @state()
  private valueAsIso8601: string | null = null;

  private maskitoInstance?: Maskito;

  @state()
  private internalValue: string = '';

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (
      changedProperties.has('dateMode') ||
      changedProperties.has('dateSeparator')
    ) {
      void this.initializeMask();
    }

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

    if (this.value == '' || this.value == null) {
      //no value at all --> clear everything
      //update valueAsIso8601
      this.valueAsIso8601 = '';

      //update maskedString (displayValue), only if the user isn't typing in it
      if (updateInput) {
        this.inputComponent.value = '';
      }
    } else {
      //there is a value available. Check if it is parsable to a date or not.
      let date: Date = parse(this.value, this.format, new Date());
      if (!isNaN(date.getTime())) {
        //update valueAsIso8601
        this.valueAsIso8601 = formatISO(date, { representation: 'date' });

        //update maskedString (display value)
        if (updateInput) {
          this.inputComponent.value = formatDateToMask(
            date,
            this.dateMode,
            this.dateSeparator
          );
        }
      } else {
        //update valueAsIso8601
        this.valueAsIso8601 = '';

        //update maskedString (displayValue)
        if (updateInput) {
          this.inputComponent.value = '';
        }
      }
    }

    super.updated(changedProperties);
  }

  private transformMaskedInputToDate = (maskedValue: string): Date | null => {
    // Remove any non-digit characters
    const cleanValue = maskedValue.replace(/\D/g, '');

    // Check if the value is complete (8 digits)
    if (cleanValue.length !== 8) return null;

    // Parse the masked date (assuming mm/dd/yyyy format)
    const day = cleanValue.slice(0, 2);
    const month = cleanValue.slice(2, 4);
    const year = cleanValue.slice(4);

    // Create a Date object in UTC
    return new Date(
      Date.UTC(
        parseInt(year),
        parseInt(month) - 1, // JavaScript months are 0-indexed
        parseInt(day)
      )
    );
  };

  firstUpdated() {
    void this.initializeMask();
  }

  private async initializeMask() {
    // Find the native input element

    //wait until the input is fully rendered and initialized
    await this.inputComponent.updateComplete;

    let shadowRoot = this.inputComponent.shadowRoot!;
    let nativeInput = shadowRoot.querySelector('input');

    if (nativeInput) {
      // Create mask options
      const dateMaskOptions = maskitoDateOptionsGenerator({
        mode: this.dateMode,
        separator: this.dateSeparator
      });

      // Create and apply the mask
      if (this.maskitoInstance) {
        this.maskitoInstance.destroy();
      }
      this.maskitoInstance = new Maskito(nativeInput, dateMaskOptions);
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

  private handleInputInput = (event: Event) => {
    event.stopPropagation();
    this.tryToUpdateValue();
    // this.dispatchEvent(new CustomEvent(event.type));
  };

  private handleCalendarClick = () => {
    if (this.disabled) return;
    (this.dateInput as unknown as HTMLInputElement).showPicker();
  };

  private handleCalendarDatePicked = () => {
    //the native date input (and datepicker) use always the iso8601 format.
    let isoDate = (this.dateInput as unknown as HTMLInputElement).value;

    let currentValue = this.value;
    let newValue;
    if (isoDate) {
      let date = parseISO(isoDate);
      newValue = format(date, this.format);
    } else {
      newValue = '';
    }

    this.value = newValue;

    if (currentValue != newValue) {
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
    return this.dateMode
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
  }

  render() {
    return html`
      <ug-input
        label="${this.label}"
        size="${this.size}"
        ?disabled="${this.disabled}"
        ?clearable="${this.clearable}"
        placeholder="${this.placeholder}"
        @ug-change="${this.handleInputChange}"
        @ug-clear="${this.handleInputClear}"
        @ug-focus="${this.handleInputFocus}"
        @ug-blur="${this.handleInputBlur}"
        @ug-input="${this.handleInputInput}"
      >
        <div slot="suffix">
          <input style="width: 0; height: 0; visibility: hidden;" /
            .value="${this.valueAsIso8601}"
          type="date"
            @change="${this.handleCalendarDatePicked}"
          />
          <ug-icon
            name="calendar"
            @click="${this.handleCalendarClick}"
          ></ug-icon>
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
    const date = this.transformMaskedInputToDate(maskedValue);

    // Update form control or dispatch custom event
    let currentDate = this.value;
    if (date) {
      // Return ISO string (which is in UTC)
      let isoValueString = date.toISOString().split('T')[0];

      this.value = format(date, this.format);
      this.valueAsIso8601 = isoValueString;
    } else {
      this.value = '';
      this.valueAsIso8601 = '';
    }

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
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-dateinput': UgDateinput;
  }
}
