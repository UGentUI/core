/**
 * Supported DateModes.
 * A DateMode describes in which order the different 'parts' of a Date are used.
 * These DateModes are a subset of Maskito's {@link MaskitoDateMode}, since this component only supports a fully defined Date (day, month and year)
 */
export type DateMode = 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd';

/**
 * Supported TimeModes
 * A timeMode describes in which order the different 'parts' of a Time are used
 * These TimeModes are a subset of Maskito's {@link MaskitoTimeMode}
 */
export type TimeMode = 'HH:MM:SS' | 'HH:MM';

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
 * used parts in ours supported TimeModes
 */
export type TimePart = 'HH' | 'MM' | 'SS';

/**
 * Represents a set of time components mapped to their respective string values.
 */
export type TimeComponents = {
  [key in TimePart]: string;
};

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime());
}
