function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
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
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

// export default function quick_sort(arr: number[]): number[] {
//     if (arr.length < 2) {
//         return arr;
//     } else {
//         const pivot = arr[0];
//         const less = arr.slice(1).filter((el) => el <= pivot);
//         const greater = arr.slice(1).filter((el) => el > pivot);
//         return [...quick_sort(less), pivot, ...quick_sort(greater)];
//     }
// }

// console.log(quick_sort([9, 3, 7, 4, 69, 420, 42]));

// quick_sort([9, 3, 7, 4, 69, 420, 42]);
