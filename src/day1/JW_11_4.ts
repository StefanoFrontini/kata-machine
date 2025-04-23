function firstIndex(str: string, index = 0): number {
    if (str[0] === "x") {
        return index;
    } else {
        return firstIndex(str.slice(1), index + 1);
    }
}

console.log(firstIndex("abcdsdxdsa"));
