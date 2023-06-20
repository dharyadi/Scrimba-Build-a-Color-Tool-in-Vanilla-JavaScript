// javascript

//check to see whether the input from the user is a valid
//hex color

//1. #000000 or 000000

function isValidHex(input) {
  const hexValue = input.replace(/^#/, "");
  return /^[0-9A-Fa-f]{3,6}$/i.test(hexValue);
}
