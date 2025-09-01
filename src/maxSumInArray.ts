type Output = {
  maxSum: number;
  firstIndex: number;
  lastIndex: number;
};

export const maxSumInArray = (nums: number[] | undefined): Output | null => {
  if (!nums) return null;
  if (!Array.isArray(nums) || nums.length === 0) return null;

  let currentIndex = 0;
  let maxSum = nums[0]!; // telling compiler that this element exists
  let firstIndex = 0;
  let lastIndex = nums.length - 1;

  while (currentIndex < nums.length) {
    let consecutiveSum = 0;
    for (let i = currentIndex; i < nums.length; i++) {
      consecutiveSum += nums[i]!;
      if (consecutiveSum > maxSum) {
        maxSum = consecutiveSum;
        firstIndex = currentIndex;
        lastIndex = i;
      }
    }
    currentIndex++;
  }
  return { maxSum, firstIndex, lastIndex };
};
