function maxProfit(arr: number[]): number {
    let buy_price = arr[0];
    let greatest_profit = 0;
    for (let price of arr) {
        let potential_profit = price - buy_price;
        if (price < buy_price) {
            buy_price = price;
        } else if (potential_profit > greatest_profit) {
            greatest_profit = potential_profit;
        }
    }
    return greatest_profit;
}

const t3 = [10, 7, 5, 8, 11, 2, 6];
console.log(maxProfit(t3));
