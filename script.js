function Factorial() {
  var number = document.getElementById("number").value;
  var output = document.getElementById("output");
  var i, fact;
  fact = 1;
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(fact);
  output.innerHTML = `<p>The Factorial of ${number} is: ${fact}</p>`;
}
