function productExceptSelf(nums: number[]) {
    let prefix: number[] = Array.from({ length: nums.length }, () => 0);
    // let product = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefix[0] = 1;
        }
        if (i === 1) {
            prefix[1] = nums[0];
        }
        if (i > 1) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        // product *= nums[i];
        // result[i] = product;
    }
    console.log(prefix);
}
productExceptSelf([5, 7, 3, 2]);
