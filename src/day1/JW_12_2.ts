function golomb(n: number, memo: Map<number, number> = new Map()): number {
    console.log("rec");
    if (n === 1) {
        return 1;
    }
    if (!memo.get(n)) {
        memo.set(n, 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo));
    }
    return memo.get(n)!;
}

console.log(golomb(7));
