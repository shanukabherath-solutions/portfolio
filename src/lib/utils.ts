import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * A placeholder href (e.g. "YOUR_EMAIL", "YOUR_GITHUB_URL") should never be
 * rendered as a clickable dead link in production. This flags anything that
 * still needs a real value so components can fall back to a disabled state.
 */
export function isPlaceholderValue(value: string) {
  return /^YOUR_[A-Z0-9_]+$/.test(value.trim());
}

export function mailtoHref(email: string) {
  return isPlaceholderValue(email) ? "#" : `mailto:${email}`;
}
