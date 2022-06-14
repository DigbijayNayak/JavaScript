function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

// function multiply(a, b, callback) {
//   document.write(`The Multiplication of ${a} and ${b} is ${a * b}.` + "<br>");
//   callback();
// }

// function disp() {
//   document.write("This must be printed after Multiplication");
// }

// // Calling multiply() function
// multiply(5, 6, disp);

// Another Example
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }
