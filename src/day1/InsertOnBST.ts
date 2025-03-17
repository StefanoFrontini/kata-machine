const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};
function insert(curr: BinaryNode<number> | null, value: number) {
    if (!curr) {
        return { value, left: null, right: null };
    } else if (curr.value < value) {
        curr.right = insert(curr.right, value);
    } else {
        curr.left = insert(curr.left, value);
    }
    return curr;
}
export default function insertOnBst(
    head: BinaryNode<number>,
    value: number,
): BinaryNode<number> {
    const tree = insert(head, value);
    console.log(JSON.stringify(tree, null, 2));
    return tree;
}

insertOnBst(tree, 16);
