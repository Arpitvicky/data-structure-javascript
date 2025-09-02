// Done by 2 pointer technique, no extra memory allocation for array, using left and right pointer to find the solution.
// Time complexity - O(n) - because you scan the array once with two pointers
// Space Complexity: O(1) (because you only use a fixed number of variables, no matter how big the array is).
// It tells us how much extra memory your program needs beyond the input itself.

//Assume input is sorted array
export const hasSumPair = (inputArr: number[], target: number) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return null;
  let left = 0;
  let right = inputArr.length - 1;

  while (left < right) {
    const sum = inputArr[left]! + inputArr[right]!;
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
};

export const hasSumPairSorted = (inputArr: number[], target: number) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return null;

  const arr = [...inputArr].sort((a, b) => a - b); // O(n log n)

  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left]! + arr[right]!;
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }

  return false;
};
