// [5, -10, -6, 9, 4] ->  -10 * -6 = 60
// [3, -2, 5, -3, 4] -> 5 * 4 = 20
// [3, -2] -> -6
// [3, -2, -5] -> 10
function highest_product(arr: number[]): number {
    let greatest_number = -Infinity;
    let second_to_greatest_number = -Infinity;

    let lowest_number = Infinity;
    let second_to_lowest_number = Infinity;

    for (let num of arr) {
        if (num >= greatest_number) {
            second_to_greatest_number = greatest_number;
            greatest_number = num;
        } else if (num > second_to_greatest_number) {
            second_to_greatest_number = num;
        }
        if (num <= lowest_number) {
            second_to_lowest_number = lowest_number;
            lowest_number = num;
        } else if (num > lowest_number && num < second_to_lowest_number) {
            second_to_lowest_number = num;
        }
    }
    let greatest_product_from_two_highest =
        greatest_number * second_to_greatest_number;

    let greatest_product_from_two_lowest =
        lowest_number * second_to_lowest_number;

    return greatest_product_from_two_highest > greatest_product_from_two_lowest
        ? greatest_product_from_two_highest
        : greatest_product_from_two_lowest;
}
console.log(highest_product([5, -10, -6, 9, 4]));
console.log(highest_product([3, -2, 5, -3, 4]));
console.log(highest_product([3, -2]));
