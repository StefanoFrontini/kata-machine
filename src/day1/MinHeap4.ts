// left child of any node: (index * 2) + 1
// right child of any node: (index * 2) + 2
// node's parent: (index - 1) / 2
class MinHeap4 {
    public data: Array<number>;

    constructor() {
        this.data = [];
    }

    root_node() {
        return this.data[0];
    }

    last_node() {
        return this.data[this.data.length - 1];
    }

    left_child_index(index: number) {
        return index * 2 + 1;
    }

    right_child_index(index: number) {
        return index * 2 + 2;
    }

    parent_index(index: number) {
        return Math.floor((index - 1) / 2);
    }

    insert(value: number) {
        this.data.push(value);
        let new_node_index = this.data.length - 1;
        while (
            new_node_index > 0 &&
            this.data[new_node_index] <
                this.data[this.parent_index(new_node_index)]
        ) {
            const tmp = this.data[new_node_index];
            this.data[new_node_index] =
                this.data[this.parent_index(new_node_index)];
            this.data[this.parent_index(new_node_index)] = tmp;
            new_node_index = this.parent_index(new_node_index);
        }
    }
    delete() {
        if (this.data.length === 0) throw "heap is empty";
        const out = this.data[0];
        this.data[0] = this.data.pop()!;
        let trickle_node_index = 0;

        while (this.has_lower_child(trickle_node_index)) {
            const larger_child_index =
                this.calculate_lower_child_index(trickle_node_index);
            const tmp = this.data[trickle_node_index];
            this.data[trickle_node_index] = this.data[larger_child_index];
            this.data[larger_child_index] = tmp;

            trickle_node_index = larger_child_index;
        }
        return out;
    }
    has_lower_child(index: number): boolean {
        return (
            (this.data[this.left_child_index(index)] !== undefined &&
                this.data[this.left_child_index(index)] < this.data[index]) ||
            (this.data[this.right_child_index(index)] !== undefined &&
                this.data[this.right_child_index(index)] < this.data[index])
        );
    }
    calculate_lower_child_index(index: number) {
        if (this.data[this.right_child_index(index)] === undefined) {
            return this.left_child_index(index);
        }
        if (
            this.data[this.right_child_index(index)] <
            this.data[this.left_child_index(index)]
        ) {
            return this.right_child_index(index);
        } else {
            return this.left_child_index(index);
        }
    }
    print() {
        console.log(this.data);
    }
}
const minHeap4 = new MinHeap4();
minHeap4.insert(2);
minHeap4.insert(5);
minHeap4.insert(7);
minHeap4.insert(1);
minHeap4.insert(12);
minHeap4.insert(20);
minHeap4.print();
console.log(minHeap4.delete());
minHeap4.print();
console.log(minHeap4.delete());
minHeap4.print();
