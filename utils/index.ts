export function getShortText(text: string) {
    let MAX_SIZE = 170;
    return text.length > MAX_SIZE ? text.slice(0, MAX_SIZE).concat("...") : text.slice(0, MAX_SIZE);
}

export function getSlug(text: string) {
    return text.length > 0 ? text.trim().split(" ").join("-") : "";
}

export function formatDate(currentDate: Date) {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(currentDate);
    return date.toLocaleDateString(undefined, options);
}