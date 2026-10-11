/**
 * Utility Functions
 */

/** Merge CSS class names, filtering out falsy values */
export function cn(
  ...inputs: (string | undefined | null | false)[]
): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Encode an image path for safe use in HTML attributes.
 * Handles filenames with spaces and special characters.
 */
export function encodeImagePath(path: string): string {
  return encodeURI(path);
}
