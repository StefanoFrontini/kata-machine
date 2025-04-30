function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function quick_select(
    arr: number[],
    kth_lowest_value: number,
    lo: number,
    hi: number,
) {
    if (hi - lo <= 0) {
        return arr[lo];
    }

    const pivot_index = partition(arr, lo, hi);

    if (kth_lowest_value < pivot_index) {
        return quick_select(arr, kth_lowest_value, lo, pivot_index - 1);
    } else if (kth_lowest_value > pivot_index) {
        return quick_select(arr, kth_lowest_value, pivot_index + 1, hi);
    } else {
        return arr[pivot_index];
    }
}
const arr = [5, 50, 20, 10, 60, 30];

const median = quick_select(arr, 3, 0, arr.length - 1);
console.log(median);
