/**
 * Format a date string to a human-readable format.
 * @example formatDate("2024-01-15") → "January 15, 2024"
 */
export function formatDate(dateString: string): string {
    const { format } = require("date-fns");
    return format(new Date(dateString), "MMMM d, yyyy");
}

/**
 * Truncate a string to a given length, appending "..." if truncated.
 */
export function truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Convert a string to a URL-safe slug.
 */
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Capitalize the first letter of each word.
 */
export function titleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
