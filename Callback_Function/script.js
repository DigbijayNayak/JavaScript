function multiply(a, b, callback) {
  document.write(`The Multiplication of ${a} and ${b} is ${a * b}.` + "<br>");
  callback();
}

function disp() {
  document.write("This must be printed after Multiplication");
}

// Calling multiply() function
multiply(5, 6, disp);
