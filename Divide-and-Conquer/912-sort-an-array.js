// LC 912. Sort an Array (Merge Sort — Divide and Conquer)
// https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(nums, left, right) {
  if (left === right) return [nums[left]];

  const mid = Math.floor((left + right) / 2);
  const leftArr = mergeSort(nums, left, mid);
  const rightArr = mergeSort(nums, mid + 1, right);

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const result = [];
  let i = 0, j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

console.log(sortArray([5,2,3,1])); // [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // [0,0,1,1,2,5]     
