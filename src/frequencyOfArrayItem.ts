export const frequencyOfArrayItem = (inputArr: number[] | undefined) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return null;

  const frequency: Record<number, number> = {};

  for (const item of inputArr) {
    if (!frequency[item]) {
      frequency[item] = 1;
    } else {
      frequency[item] += 1;
    }
  }
  return frequency;
};

export const freOfArrayItemHoc = (inputArr: number[] | undefined) => {
  if (!Array.isArray(inputArr) || inputArr.length === 0) return null;

  return inputArr.reduce((acc: Record<number, number>, item: number) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
};
