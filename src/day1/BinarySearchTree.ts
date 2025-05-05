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

function search(searchValue: number, node: BinaryNode<number> | null) {
    if (!node || node.value === searchValue) {
        return node;
    } else if (searchValue < node.value) {
        return search(searchValue, node.left);
    } else {
        return search(searchValue, node.right);
    }
}

function insert(value: number, node: BinaryNode<number>) {
    if (value < node.value) {
        if (!node.left) {
            node.left = { value, left: null, right: null };
        } else {
            insert(value, node.left);
        }
    } else if (value > node.value) {
        if (!node.right) {
            node.right = { value, left: null, right: null };
        } else {
            insert(value, node.right);
        }
    }
}

function deleteNode(
    valueToDelete: number,
    node: BinaryNode<number> | null,
): BinaryNode<number> | null {
    if (!node) {
        return null;
    } else if (valueToDelete < node.value) {
        node.left = deleteNode(valueToDelete, node.left);
        return node;
    } else if (valueToDelete > node.value) {
        node.right = deleteNode(valueToDelete, node.right);
        return node;
    } else {
        if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        } else {
            node.right = lift(node.right, node);
            return node;
        }
    }
}
function lift(node: BinaryNode<number>, nodeToDelete: BinaryNode<number>) {
    if (node.left) {
        node.left = lift(node.left, nodeToDelete);
        return node;
    } else {
        nodeToDelete.value = node.value;
        return node.right;
    }
}
function delete_node2(node: BinaryNode<number> | null, value: number) {
    if (!node) {
        return null;
    } else if (value < node.value) {
        node.left = delete_node2(node.left, value);
    } else if (value > node.value) {
        node.right = delete_node2(node.right, value);
    } else {
        // Case 1: No child
        if (node.left === null && node.right === null) {
            node = null;
        }
        // Case 2: One child
        else if (node.left === null) {
            node = node.right;
        } else if (node.right === null) {
            node = node.left;
        } else {
            // Case 3: 2 children
            const temp = findMin(node.right);
            node.value = temp.value;
            node.right = delete_node2(node.right, temp.value);
        }
    }
    return node;
}

function findMin(node: BinaryNode<number>): BinaryNode<number> {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
insert(25, tree);
console.log(JSON.stringify(tree, null, 2));
delete_node2(tree, 20);
console.log("Deleting...");
console.log(JSON.stringify(tree, null, 2));
// const result = search(25, tree);
// console.log("🚀 ~ result:", result?.value);
