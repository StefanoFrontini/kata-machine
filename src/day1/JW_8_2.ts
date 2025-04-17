function firstDuplicate(arr: string[]): string {
    const map = new Map<string, boolean>();
    for (const item of arr) {
        const el = map.get(item);
        if (el) {
            return item;
        } else {
            map.set(item, true);
        }
    }
    return "";
}

console.log(firstDuplicate(["a", "b", "c", "d", "c", "e", "f"]));
