const hexInput = document.querySelector("#hexInput");
const inputColor = document.querySelector("#inputColor");
hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value.replace(/^#/, "");
  if (isValidHex(hex)) {
    console.log("asu", hex);
    inputColor.style.backgroundColor = "#" + hex;
  }
});

function isValidHex(input) {
  return /^[0-9A-Fa-f]{3,6}$/i.test(input);
}

//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - useParseInt(16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases

const convertHexToRGB = (hex) => {
  hex = hex.replace("#", "");
  if (!isValidHex(hex)) return null;

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

console.log(convertHexToRGB("123"));
