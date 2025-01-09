export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const el of haystack) {
        if (el === needle) return true;
    }
    return false;
}
