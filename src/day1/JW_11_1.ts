function totalChars(arr: string[]): number {
    if (arr.length <= 0) {
        return 0;
    }

    return arr[0].length + totalChars(arr.slice(1));
}

console.log(totalChars(["ab", "c", "def", "ghijk"]));
