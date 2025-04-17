const map = new Map<string, number>();

function nonDuplicated(str: string): string {
    for (const item of str) {
        const el = map.get(item);
        if (!el) {
            map.set(item, 1);
        } else {
            map.set(item, el + 1);
        }
    }
    for (const el of map) {
        if (el[1] === 1) {
            return el[0];
        }
    }
    return "";
}

console.log(nonDuplicated("minimum"));
