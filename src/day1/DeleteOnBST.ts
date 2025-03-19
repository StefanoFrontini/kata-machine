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
function findMin(node: BinaryNode<number>): BinaryNode<number> {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
function deleteNode(curr: BinaryNode<number> | null, value: number) {
    if (!curr) {
        return null;
    } else if (curr.value < value) {
        curr.right = deleteNode(curr.right, value);
    } else if (curr.value > value) {
        curr.left = deleteNode(curr.left, value);
    } else {
        // Case 1: No Child
        if (!curr.left && !curr.right) {
            curr = null;
            return curr;
        }
        // Case 2: One Child
        else if (curr.left === null) {
            curr = curr.right;
            return curr;
        } else if (curr.right === null) {
            curr = curr.left;
            return curr;
        }
        // Case 3: Two Children
        else {
            const temp = findMin(curr.right);
            curr.value = temp.value;
            curr.right = deleteNode(curr.right, temp.value);
        }
    }
    return curr;
}
export default function deleteNodeOnBst(
    head: BinaryNode<number>,
    value: number,
): BinaryNode<number> | null {
    const tree = deleteNode(head, value);
    console.log(JSON.stringify(tree, null, 2));
    return tree;
}

deleteNodeOnBst(tree, 50);
