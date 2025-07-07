function containsDuplicate(nums: string[]): boolean {
    const map = new Map<string, boolean>();
    for (let i = 0; i < nums.length; i++) {
        const value = map.get(nums[i]);
        if (value && nums[i] !== ".") {
            return true;
        } else {
            map.set(nums[i], true);
        }
    }
    return false;
}
function isValidRows(rows: string[][]): boolean {
    for (let row of rows) {
        if (containsDuplicate(row)) {
            return false;
        }
    }
    return true;
}
function invertBoard(board: string[][]) {
    const result: string[][] = Array.from({ length: board.length }, () =>
        Array.from({ length: board.length }, () => ""),
    );
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            result[j][i] = board[i][j];
        }
    }
    return result;
}
function createBox(board: string[][]) {
    const result: string[][] = Array.from({ length: board.length }, () => []);
    let k = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const index = k[Math.floor(i / 3)][Math.floor(j / 3)];
            result[index].push(board[i][j]);
        }
    }
    return result;
}
function isValidSudoku(board: string[][]): boolean {
    return (
        isValidRows(board) &&
        isValidRows(invertBoard(board)) &&
        isValidRows(createBox(board))
    );
}

const board = [
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
console.log(isValidSudoku(board));
