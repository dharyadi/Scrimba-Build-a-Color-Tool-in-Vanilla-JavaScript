const hexInput = document.querySelector("#hexInput");
const inputColor = document.querySelector("#inputColor");

const slider = document.querySelector("#slider");
const sliderText = document.querySelector("#sliderText");

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

//create the function converRGBToHex
//take in 3 parameters - r,g, and b
//for each (r,g,b) - create a hex pair that is two characters long
//return hex value starting with a hashtag
//example - r.toString(16)

const convertRGBToHex = (r, g, b) => {
  const toHex = (val) => {
    const hex = val.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rHex = toHex(r);
  const gHex = toHex(g);
  const bHex = toHex(b);

  return `#${rHex}${gHex}${bHex}`;
};

//get a reference to the slider and sliderText DOM elements
//create an input event listener
//display the value of the slider
slider.addEventListener("input", function () {
  sliderText.innerHTML = slider.value + "%";
});
