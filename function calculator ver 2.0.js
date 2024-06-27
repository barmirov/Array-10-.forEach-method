// function calculator ver 2.0


// addFunction
function f1(x, y) {
  console.log(x + y);
  alert("addFunction");
  return f1;
}

// subFunction
function f2(x, y) {
  console.log(x - y);
  alert("subFunction");
  return f2;
}

// multipleFunction
function f3(x, y) {
  console.log(x * y);
  alert("multipleFunction");
  return f3;
}

// divisionFunction
function f4(x, y) {
  console.log(x / y);
  alert("divisionFunction");
  return f4;
}

// Calling the functions after they are defined
//f1(2, 4);
//f2(6, 3);
//f3(10, 7);
//f4(8, 2);

var calculator = f1(2, 2);
console.log(calculator);


