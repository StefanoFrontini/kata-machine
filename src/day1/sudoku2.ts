function isValidSudoku2(board: string[][]): boolean {
    const N = 9;
    const rows = Array.from({ length: N }, () => new Map<string, boolean>());
    const columns = Array.from({ length: N }, () => new Map<string, boolean>());
    const boxes = Array.from({ length: N }, () => new Map<string, boolean>());
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length; c++) {
            const val = board[r][c];
            if (val === ".") continue;
            if (rows[r].has(val)) {
                return false;
            } else {
                rows[r].set(val, true);
            }
            if (columns[c].has(val)) {
                return false;
            } else {
                columns[c].set(val, true);
            }
            const index = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (boxes[index].has(val)) {
                return false;
            } else {
                boxes[index].set(val, true);
            }
        }
    }
    return true;
}

const board2 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku2(board2));
