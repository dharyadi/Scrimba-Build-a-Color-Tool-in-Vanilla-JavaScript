//CHALLENGE
//Get a reference to hexInput and inputColor DOM elements
//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor

const hexInput = document.querySelector("#hexInput");
const inputColor = document.querySelector("#inputColor");
hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value.replace(/^#/, "");
  if (isValidHex(hex)) {
    inputColor.style.backgroundColor = "#" + hex;
  }
});

function isValidHex(input) {
  return /^[0-9A-Fa-f]{3,6}$/i.test(input);
}
