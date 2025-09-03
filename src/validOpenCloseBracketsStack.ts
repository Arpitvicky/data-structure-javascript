export const validOpenCloseBracketsStack = (inputStr: string): boolean => {
  if (!inputStr) return false;
  let stack = [];
  const possiblePairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const ch of inputStr) {
    if (ch == "(" || ch === "[" || ch === "{") stack.push(ch);
    else {
      if (stack.pop() !== possiblePairs[ch]) return false; // return false immediately and loop ends
    }
  }
  return stack.length === 0; // If stack is empty at end, it means all well.
};

// "{[]}"

// stack  = ['{']
// stack = ['{', '[']
// '[' === '['
// stack = ['{']
// '{' === '{'
// stack =[]

// "{[}]"

// stack = ['{']
// stack = ['{', '[']

// '[' === '{' // false
