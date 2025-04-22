function sum(low: number, high: number): number {
    if (low > high) {
        return 0;
    }
    return low + sum(low + 1, high);
}

console.log(sum(1, 10));
