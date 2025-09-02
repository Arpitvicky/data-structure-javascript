// Time Complexity: O(n)
// (all operations are linear, and they add up to a constant multiple of n).

// Space Complexity: O(n)
// (because of the extra array + reversed string).
export const isSimplePallindrome = (inputStr: string): boolean => {
  return inputStr.split("").reverse().join("") === inputStr;
};

export const isSimplePallindromeNonAlphaNumeric = (
  inputStr: string
): boolean => {
  let cleanString = inputStr.replace(/[^a-z0-9]/gi, "").toLowerCase(); //[^a-z0-9] - any character which is not a digit or alphabet, replace it with ""
  return cleanString.split("").reverse().join("") === cleanString;
};

// Time complexity - Object(n) and Space complexity - Object(1)
// Time Complexity
// Each iteration compares two characters, and moves pointers inward.
// At most n/2 comparisons for a string of length n.
// So: O(n).

// Space Complexity
// No extra arrays or strings created.
// Just a few variables (left, right, isPallindrome).
// So: O(1).
export const isPallindrome2Pointer = (inputStr: string): boolean => {
  let left = 0;
  let right = inputStr.length - 1;
  while (left < right) {
    if (inputStr[left] === inputStr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

("A man, a plan, a canal: Panama");

export const isPallindrome2PointerNonAlphanumeric = (
  inputStr: string
): boolean => {
  let left = 0;
  let right = inputStr.length - 1;
  const isAlphaNum = (c: string) => /[a-z0-9]/i.test(c);
  // Nested while because
  // if skips at most one.
  // while skips all of them until you reach a real character.
  while (left < right) {
    while (left < right && !isAlphaNum(inputStr[left]!)) left++; // while coz it will keep looking for non-alhanumeric characters until it's there
    while (left < right && !isAlphaNum(inputStr[right]!)) right--;

    if (inputStr[left]?.toLowerCase() === inputStr[right]?.toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
