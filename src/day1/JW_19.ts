function reverseArray(arr: number[]): void {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while (startIndex < endIndex) {
        const temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
}
const arr2 = [2, 5, 6, 8, 9];
reverseArray(arr2);
console.log("🚀 ~ arr2:", arr2);
