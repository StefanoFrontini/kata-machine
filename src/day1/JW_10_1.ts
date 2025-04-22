function printEveryOtherNumbers(low: number, high: number) {
    if (low > high) {
        return;
    }
    console.log(low);
    printEveryOtherNumbers(low + 2, high);
}

printEveryOtherNumbers(0, 10);
