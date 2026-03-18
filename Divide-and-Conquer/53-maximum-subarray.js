// LC 53. Maximum Subarray (divide and conquer Algorithm)
// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  return helper(nums, 0, nums.length - 1);
}

function helper(nums, left, right) {
  if (left === right) return nums[left];
  const mid = Math.floor((left + right) / 2);
  const leftMax = helper(nums, left, mid);
  const rightMax = helper(nums, mid + 1, right);
  let sum = 0;
  let leftSum = -Infinity;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }
  sum = 0;
  let rightSum = -Infinity;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }
  return Math.max(leftMax, rightMax, leftSum + rightSum);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-2, -3, -1, -4, -5])); // -1
