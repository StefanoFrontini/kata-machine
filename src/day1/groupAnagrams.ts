function strToMap(str: string): Map<string, number> {
    const map = new Map<string, number>();
    for (let char of str) {
        if (map.has(char)) {
            let count = map.get(char) ?? 0;
            count++;
            map.set(char, count);
        } else {
            map.set(char, 1);
        }
    }
    return map;
}
function mapToStr(m: Map<string, number>): string {
    let result = "";
    for (let [key, value] of m) {
        for (let i = 0; i < value; i++) {
            result = result + key;
        }
    }
    return result;
}
function areMapsEqual(a: Map<string, number>, b: Map<string, number>) {
    for (const [key, value] of a) {
        if (!b.has(key) || b.get(key) !== value) {
            return false;
        }
    }
    return true;
}
function groupAnagrams(arr: string[]): string[][] {
    const strs_map = arr.map((el) => strToMap(el));
    return findAnagrams(strs_map).map((el) => el.map((el2) => mapToStr(el2)));
}
function findAnagrams(arr: Map<string, number>[]): Map<string, number>[][] {
    if (arr.length === 0) {
        return [[new Map<string, number>()]];
    }
    if (arr.length === 1) {
        return [[arr[0]]];
    }
    const result: Map<string, number>[][] = [[]];
    result[0].push(arr[0]);
    const remaining: Map<string, number>[] = [];
    for (let i = 1; i < arr.length; i++) {
        if (areMapsEqual(arr[0], arr[i])) {
            result[0].push(arr[i]);
        } else {
            remaining.push(arr[i]);
        }
    }
    return [...result, ...findAnagrams(remaining)];
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
