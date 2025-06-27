type HeapNode = {
    value: number;
    occurrences: number;
};
class MinHeap5 {
    public data: Array<HeapNode>;

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

    insert(value: HeapNode) {
        this.data.push(value);
        let new_node_index = this.data.length - 1;
        while (
            new_node_index > 0 &&
            this.data[new_node_index].occurrences <
                this.data[this.parent_index(new_node_index)].occurrences
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
                this.data[this.left_child_index(index)].occurrences <
                    this.data[index].occurrences) ||
            (this.data[this.right_child_index(index)] !== undefined &&
                this.data[this.right_child_index(index)].occurrences <
                    this.data[index].occurrences)
        );
    }
    calculate_lower_child_index(index: number) {
        if (this.data[this.right_child_index(index)] === undefined) {
            return this.left_child_index(index);
        }
        if (
            this.data[this.right_child_index(index)].occurrences <
            this.data[this.left_child_index(index)].occurrences
        ) {
            return this.right_child_index(index);
        } else {
            return this.left_child_index(index);
        }
    }
    print() {
        console.log(this.data);
    }
    size() {
        return this.data.length;
    }
}
function topKFrequent2(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let num of nums) {
        if (map.has(num)) {
            let value = map.get(num)!;
            value++;
            map.set(num, value);
        } else {
            map.set(num, 1);
        }
    }
    console.log("map: ", map);
    const minHeap5 = new MinHeap5();
    for (let [key, value] of map) {
        minHeap5.insert({
            value: key,
            occurrences: value,
        });
        if (minHeap5.size() > k) {
            minHeap5.delete();
        }
    }
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result[i] = minHeap5.delete().value;
    }
    return result;
}
// console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent2([1], 1));
// console.log(topKFrequent2([1, 2], 2));
console.log(
    topKFrequent2(
        [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3],
        3,
    ),
);
