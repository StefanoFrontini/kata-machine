function unique_paths(
    rows: number,
    columns: number,
    memo: Map<Array<number>, number> = new Map(),
): number {
    if (rows === 1 || columns === 1) {
        return 1;
    }
    const key = [rows, columns];
    if (!memo.get(key)) {
        memo.set(
            key,
            unique_paths(rows - 1, columns, memo) +
                unique_paths(rows, columns - 1, memo),
        );
    }
    return memo.get(key)!;
}

console.log(unique_paths(3, 4));
