const colorPickerCheckbox = document.getElementById("colorPickerCheckbox");
const colorSelected = document.getElementById("colorSelected");
const fontSize = document.getElementById("fontSize");
const spacingSize = document.getElementById("spacingSize");
const paragraph = document.getElementById("paragraph");
const btnFontSize = document.getElementById("btnFontSize");
const btnSpacingSize = document.getElementById("btnSpacingSize");
const fontFamily = document.getElementById("fontFamily");
const body = document.body;

//carrega o localStorage
window.onload = function () {
  colorPickerCheckbox.checked = true;
  setFontSize(localStorage.getItem("font"));
  setSpacingSize(localStorage.getItem("spacing"));
  setParagraphColor(localStorage.getItem("paragraph"));
  setBackgroundColor(localStorage.getItem("bgColor"));
  setFontFamily(localStorage.getItem("fontFamily"));
};

//define a cor do texto
paragraph.addEventListener("click", function () {
  setParagraphColor(colorSelected.value);
});

function setParagraphColor(color) {
  if (colorPickerCheckbox.checked === true) {
    paragraph.style.color = color;
    localStorage.setItem("paragraph", color);
  }
}

//define a cor do body
body.addEventListener("click", function () {
  setBackgroundColor(colorSelected.value);
});

function setBackgroundColor(color, isOnload = false) {
  if (colorPickerCheckbox.checked === true) {
    body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
  }
}

//define o tamanho da fonte
fontSize.addEventListener("keyup", function () {
  setFontSize(fontSize.value);
});

function setFontSize(fontSize) {
  paragraph.style.fontSize = fontSize + "px";
  const stringFontSize = String(fontSize);
  // console.log(stringFontSize);
  localStorage.setItem("font", fontSize);
  console.log(localStorage.getItem("font"));
}

//define o espaçamento da fonte
spacingSize.addEventListener("keyup", function () {
  setSpacingSize(spacingSize.value);
});

function setSpacingSize(spacingSize) {
  paragraph.style.letterSpacing = spacingSize + "px";
  localStorage.setItem("spacing", spacingSize);
}

//define a fonte
fontFamily.addEventListener("keyup", function () {
  setFontFamily(fontFamily.value);
});
function setFontFamily(fontFamily) {
  paragraph.style.fontFamily = fontFamily;
  localStorage.setItem("fontFamily", fontFamily);
}
