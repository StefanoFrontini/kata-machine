function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let num of nums) {
        if (map.has(num)) {
            let value = map.get(num)!;
            value++;
            map.set(num, value);
        } else {
            map.set(num, 1);
        }
    }
    console.log("map", map);
    let result: number[][] = [];
    for (let [key, value] of map) {
        if (result[value]) {
            const newVal = [...result[value], key];
            result[value] = newVal;
        } else {
            result[value] = [key];
        }
    }
    console.log("result", result);
    const final: number[] = result.filter((el) => el === el).flat();
    return final.slice(-k);
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));
