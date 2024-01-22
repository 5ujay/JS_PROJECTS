// let currentDisplay = " ";

// document.getElementById("input").value = currentDisplay;

// function one() {
//   currentDisplay = currentDisplay + 1;
//   document.getElementById("input").value = currentDisplay;
// }

// function two() {
//   currentDisplay = currentDisplay + 2;
//   document.getElementById("input").value = currentDisplay;
// }

// function three() {
//   currentDisplay = currentDisplay + 3;
//   document.getElementById("input").value = currentDisplay;
// }

// function four() {
//   currentDisplay = currentDisplay + 4;
//   document.getElementById("input").value = currentDisplay;
// }

// function five() {
//   currentDisplay = currentDisplay + 5;
//   document.getElementById("input").value = currentDisplay;
// }

// function six() {
//   currentDisplay = currentDisplay + 6;
//   document.getElementById("input").value = currentDisplay;
// }

// function seven() {
//   currentDisplay = currentDisplay + 7;
//   document.getElementById("input").value = currentDisplay;
// }

// function eight() {
//   currentDisplay = currentDisplay + 8;
//   document.getElementById("input").value = currentDisplay;
// }

// function nine() {
//   currentDisplay = currentDisplay + 9;
//   document.getElementById("input").value = currentDisplay;
// }

// function zero() {
//   currentDisplay = currentDisplay + 0;
//   document.getElementById("input").value = currentDisplay;
// }

// function mul() {
//   currentDisplay = currentDisplay + "*";
//   document.getElementById("input").value = currentDisplay;
// }

// function div() {
//   currentDisplay = currentDisplay + "/";
//   document.getElementById("input").value = currentDisplay;
// }

// function sub() {
//   currentDisplay = currentDisplay + "-";
//   document.getElementById("input").value = currentDisplay;
// }

// function add() {
//   currentDisplay = currentDisplay + "+";
//   document.getElementById("input").value = currentDisplay;
// }

// function dot() {
//   currentDisplay = currentDisplay + ".";
//   document.getElementById("input").value = currentDisplay;
// }

// function clear() {
//   currentDisplay = "";
//   document.getElementById("input").value = currentDisplay;
// }
// clear();

let currentDisplay = "";

function clearDisplay() {
  currentDisplay = "";
  document.getElementById("input").value = currentDisplay;
}

function appendToDisplay(value) {
  // Check for consecutive operators or decimal points
  const lastChar = currentDisplay.slice(-1);
  if (
    (value === "." && lastChar === ".") ||
    (isNaN(value) && isNaN(lastChar))
  ) {
    return;
  }

  currentDisplay += value;
  document.getElementById("input").value = currentDisplay;
}

function calculateResult() {
  try {
    let answer = eval(currentDisplay);
    currentDisplay = answer;
    document.getElementById("input").value = currentDisplay;
  } catch (error) {
    document.getElementById("input").value = "Error";
  }
}
