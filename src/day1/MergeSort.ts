function merge(left: number[], right: number[]): number[] {
    const sorted_arr: number[] = [];
    let i = 0,
        j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted_arr.push(left[i]);
            i++;
        } else {
            sorted_arr.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        sorted_arr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        sorted_arr.push(right[j]);
        j++;
    }
    return sorted_arr;

    // while (left.length && right.length) {
    //     if (left[0] < right[0]) {
    //         sorted_arr.push(left.shift()!);
    //     } else {
    //         sorted_arr.push(right.shift()!);
    //     }
    // }
    // return [...sorted_arr, ...left, ...right];
}

export default function merge_sort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    } else {
        const split_index = Math.floor(arr.length / 2);
        const left_half = arr.slice(0, split_index);
        const right_half = arr.slice(split_index);

        return merge(merge_sort(left_half), merge_sort(right_half));
    }
}

console.log(merge_sort([1, 3, 4, 6, 0, 2, 5, 7]));
