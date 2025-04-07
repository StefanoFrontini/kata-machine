type Node = {
    children: Array<Node | undefined>;
    isWord: boolean;
};
function getLetterFromIndex(idx: number): string {
    const zero = "a".charCodeAt(0);
    return String.fromCharCode(zero + idx);
}

function walk(curr: Node | undefined, word: string, words: string[]): string[] {
    if (!curr) {
        return [];
    }
    if (curr.isWord) {
        words.push(word);
    }
    if (curr.children.length === 0) {
        return words;
    }
    for (let i = 0; i < curr.children.length; i++) {
        if (curr.children[i]) {
            walk(curr.children[i], word + getLetterFromIndex(i), words);
        }
    }
    return words;
}
// function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
//     if (!curr) {
//         return path;
//     }
//     // pre
//     path.push(curr.value);

//     // recurse
//     walk(curr.left, path);
//     walk(curr.right, path);

//     // post
//     return path;
// }
export default function pre_order_search_general(
    head: Node | undefined,
): string[] {
    return walk(head, "", []);
}
