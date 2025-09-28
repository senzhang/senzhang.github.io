const texts = [
  "C# Developer",
  ".net Developer",
  "Azure Developer",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingEl = document.getElementById("typing");

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingEl.textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 500);
    }, 1500);
  } else {
    setTimeout(type, 120);
  }
}
type();