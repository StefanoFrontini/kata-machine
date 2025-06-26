// const strs2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(strs2.join(""));
function getHash(str: string): string {
    const arr = Array.from({ length: 26 }, () => 0);
    for (let char of str) {
        let value = arr[char.charCodeAt(0) - 97];
        value++;
        arr[char.charCodeAt(0) - 97] = value;
    }
    return arr.toString();
}
console.log(getHash("ddddddddddg"));
function groupAnagrams2(arr: string[]): string[][] {
    const map = new Map<string, Array<string>>();
    for (let str of arr) {
        const hash = getHash(str);
        if (map.has(hash)) {
            const value = map.get(hash)!;
            const newValue = [...value, str];
            map.set(hash, newValue);
        } else {
            map.set(hash, [str]);
        }
    }
    const result: string[][] = [];
    console.log(map);
    for (let [_, value] of map) {
        result.push(value);
    }
    return result;
}
// console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams2(["bdddddddddd", "bbbbbbbbbbc"]));
