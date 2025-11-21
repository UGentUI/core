/**
 * Converts a hex color to RGB values
 * @param hex - Hex color string (e.g., "#ffffff" or "ffffff")
 * @returns RGB values as [r, g, b]
 */
function hexToRgb(hex: string): [number, number, number] {
  // Remove the hash if present
  hex = hex.replace('#', '');

  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
}

/**
 * Calculates the relative luminance of a color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Relative luminance value
 */
function calculateRelativeLuminance(r: number, g: number, b: number): number {
  // Convert RGB values to sRGB
  const sR = r / 255;
  const sG = g / 255;
  const sB = b / 255;

  // Convert to linear RGB
  const rLinear =
    sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4);
  const gLinear =
    sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4);
  const bLinear =
    sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calculates the contrast ratio between two colors
 * @param color1 - First hex color
 * @param color2 - Second hex color
 * @returns Contrast ratio between the two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const l1 = calculateRelativeLuminance(r1, g1, b1);
  const l2 = calculateRelativeLuminance(r2, g2, b2);

  // Calculate contrast ratio
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Checks if two colors meet the WCAG 2.1 contrast ratio requirement
 * @param color1 - First hex color
 * @param color2 - Second hex color
 * @param level - Required contrast level ('AA' or 'AAA')
 * @param isLargeText - Whether the text is considered large (>= 18pt or bold >= 14pt)
 * @returns Whether the colors meet the contrast requirement
 */
export function meetsContrastRequirement(
  color1: string,
  color2: string,
  level: 'AA' | 'AAA' = 'AA',
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(color1, color2);

  // WCAG 2.1 contrast requirements
  const requirements = {
    AA: {
      normal: 4.5,
      large: 3
    },
    AAA: {
      normal: 7,
      large: 4.5
    }
  };

  const requiredRatio = isLargeText
    ? requirements[level].large
    : requirements[level].normal;

  return ratio >= requiredRatio;
}

/**
 * Gets the CSS variable value from the document
 * @param variableName - CSS variable name (e.g., "--ug-color-primary-500")
 * @returns The computed color value
 */
export function getCssVariableColor(variableName: string): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();

  return value.startsWith('#') ? value : `#${value}`;
}
