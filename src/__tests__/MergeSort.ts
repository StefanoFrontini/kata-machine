import merge_sort from "@code/MergeSort";

test("merge-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const sorted_arr = merge_sort(arr);
    expect(sorted_arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
