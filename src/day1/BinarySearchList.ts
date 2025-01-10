export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const m = Math.floor(low + (high - low) / 2);
        const v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v < needle) {
            low = m + 1;
        } else {
            high = m;
        }
    } while (low < high);
    return false;
}

function bs_list_rec(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) {
        return false;
    }

    const high = haystack.length;
    const m = Math.floor(high / 2);
    const v = haystack[m];
    if (v === needle) {
        return true;
    } else if (v < needle) {
        return bs_list_rec(haystack.slice(m + 1), needle);
    } else {
        return bs_list_rec(haystack.slice(0, m), needle);
    }
}
