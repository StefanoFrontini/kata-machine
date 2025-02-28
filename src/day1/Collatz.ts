function collatz(n: number): number {
    if (n === 1) {
        return 0;
    } else if (n % 2 === 0) {
        return 1 + collatz(n / 2);
    } else {
        return 1 + collatz(3 * n + 1);
    }
}

console.log(collatz(2));
