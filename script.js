var aC = document.getElementById("delete-all");
var cE = document.getElementById("back-one");
var division = document.getElementById("/");
var multiplication = document.getElementById("*");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var substraction = document.getElementById("-");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var addition = document.getElementById("+");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var dot = document.getElementById(".");
var zero = document.getElementById("0");
var isequal = document.getElementById("=");
var output = document.getElementsByClassName("output")[0];

var equation = "";

aC.addEventListener("click", function () {
  equation = "";
  output.innerHTML = "0";
});

one.addEventListener("click", function () {
  appendToEquation("1");
  updateOutput();
});

two.addEventListener("click", function () {
  appendToEquation("2");
  updateOutput();
});

three.addEventListener("click", function () {
  appendToEquation("3");
  updateOutput();
});

four.addEventListener("click", function () {
  appendToEquation("4");
  updateOutput();
});

five.addEventListener("click", function () {
  appendToEquation("5");
  updateOutput();
});

six.addEventListener("click", function () {
  appendToEquation("6");
  updateOutput();
});
seven.addEventListener("click", function () {
  appendToEquation("7");
  updateOutput();
});
eight.addEventListener("click", function () {
  appendToEquation("8");
  updateOutput();
});
nine.addEventListener("click", function () {
  appendToEquation("9");
  updateOutput();
});
zero.addEventListener("click", function () {
  appendToEquation("0");
  updateOutput();
});

addition.addEventListener("click", function () {
  appendToEquation("+");
  updateOutput();
});
substraction.addEventListener("click", function () {
  appendToEquation("-");
  updateOutput();
});
multiplication.addEventListener("click", function () {
  appendToEquation("*");
  updateOutput();
});
division.addEventListener("click", function () {
  appendToEquation("/");
  updateOutput();
});
dot.addEventListener("click", function () {
  appendToEquation(".");
  updateOutput();
});

function updateOutput() {
  output.innerHTML = equation;
}

function appendToEquation(input) {
  equation += input;
}
function backOne() {
  if (equation != "") {
    equation = equation.substring(0, equation.length - 1);
  }
}
cE.addEventListener("click", function () {
  backOne();
  updateOutput();
});
isequal.addEventListener("click", function () {
  var numbers = equation.split("+");
  var result = 0;
  numbers.forEach((num) => {
    result += parseFloat(num);
  });
  equation = result.toString();
  updateOutput();
});
