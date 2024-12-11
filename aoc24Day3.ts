const dummyInput: string = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// function that takes a string and removes invalid chars. returns string with only valid chars
const removeInvalidChars = (input: string): string => {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const validCharsOnly = input.match(regex) || [];

  console.log('validCharsOnly', validCharsOnly);
  return validCharsOnly.join('');
}

// removeInvalidChars(dummyInput);

// function that takes string of valid chars, and returns array of numbers
const getValidNumbers = (input: string): number[] => {
  const regex = /\d+/g;
  const validNumbers = (input.match(regex) || []).map(Number);

  console.log('valid numbies', validNumbers);
  return validNumbers;
}

getValidNumbers(removeInvalidChars(dummyInput));

// write mul(x,y) utility function
const multiplyTwoNumbers = (x: number, y: number): number => {
  return x * y;
}


// iterate through the valid nums, then execute mul(i, i+1). i+2 at end of loop. return array of products.
const generateProductsArray = (factors: number[]): number[] => {
  let productArray: number[] = [];

  // need we a products.length - 1?
  for (let i = 0; i < factors.length; i + 2) {
    // pitfall here if factors is oddly numbered
    productArray.push(multiplyTwoNumbers(factors[i], factors[i + 1]))
  }

  console.log('product array', productArray);
  return productArray;
}

// iterate through array of products and add each product.
const addProducts = (products: number[]): number => {
  let sum: number = 0;

  // need we a products.length - 1?
  for (let i = 0; i < products.length; ++i) {
    sum += products[i]
  }

  return sum;
}