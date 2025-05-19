const tree2: BinaryNode<number> = {
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
function greatestValue(node: BinaryNode<number>): number {
    if (!node.right) {
        return node.value;
    }
    return greatestValue(node.right);
    // if (!node) {
    //     return max;
    // }
    // let left: number = max;
    // let right: number = max;
    // if (node.value > max) {
    //     left = greatestValue(node.left, node.value);
    //     right = greatestValue(node.right, node.value);
    // } else {
    //     left = greatestValue(node.left, max);
    //     right = greatestValue(node.right, max);
    // }

    // return Math.max(left, right);
}
console.log(greatestValue(tree2));
