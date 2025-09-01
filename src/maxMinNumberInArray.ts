export const maxMinNumberInArray = (inputArr: number[] | undefined) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return null;

  let min = inputArr[0]!;
  let max = inputArr[0]!;

  for (const item of inputArr) {
    if (item > max) max = item;
    if (item < min) min = item;
  }

  return {
    max,
    min,
  };
};
