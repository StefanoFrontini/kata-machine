function uniquePaths(rows: number, columns: number): number {
    if (rows === 1 || columns === 1) {
        return 1;
    }
    return uniquePaths(rows, columns - 1) + uniquePaths(rows - 1, columns);
}

console.log(uniquePaths(3, 7));
