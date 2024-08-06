// Function definition
export function add(inputStr: string): number{
  // if input is not string then return 0
  if(!inputStr) return 0;

  // Check if input string has and delimiters or line break characters 
  let strDelimiter = /,\\n/;
  if (inputStr.startsWith("//")) {
    const parts = inputStr.split("\n");
    strDelimiter = new RegExp(parts[0].substring(2));
    inputStr = parts[1];
  }

  // Create array from input string
  const numArray = inputStr.split(strDelimiter);
  const negatives: number[] = [];

  // Adding numbers
  const sum = numArray.reduce((total, num) => {
    const n = parseInt(num);
    if (n < 0) negatives.push(n);
    return total + (isNaN(n) ? 0 : n);
  }, 0);

  // Exception handling if input string has any negative numbers
  if (negatives.length) {
    throw new Error(`negative numbers are not allowed: ${negatives.join(",")}`);
  }

  return sum;
}
