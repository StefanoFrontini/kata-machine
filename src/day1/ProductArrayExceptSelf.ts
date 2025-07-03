function productExceptSelf2(nums: number[]) {
    let prefix: number[] = [];
    let suffix: number[] = [];
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const j = nums.length - 1 - i;
        if (i === 0) {
            prefix[0] = 1;
        }
        if (i === 1) {
            prefix[1] = nums[0];
        }
        if (i > 1) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        if (j === nums.length - 1) {
            suffix[nums.length - 1] = 1;
        }
        if (j === nums.length - 2) {
            suffix[nums.length - 2] = nums[nums.length - 1];
        }
        if (j < nums.length - 2) {
            suffix[j] = nums[j + 1] * suffix[j + 1];
        }
    }
    for (let k = 0; k < prefix.length; k++) {
        result[k] = prefix[k] * suffix[k];
    }
    return result;
}
// productExceptSelf([5, 7, 3, 2]);
console.log(productExceptSelf2([1, 2, 3, 4]));
