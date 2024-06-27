// Exercise lesson 12 .forEach Boolean invert

console.log("Exercise lesson 12 .forEach Boolean");

console.log();

// create Boolean array with 5 element inside
// you should use the forEach to reverse each element value inside the array 
// print the array in the end of the reverse logic



function invertBoolean(element, index, array) {
  array[index] = !element; 
}

function printArray (element, index) {
  console.log(element);
}

var booleanInvert = [true, false, false, true, true];

booleanInvert.forEach(invertBoolean);


booleanInvert.forEach(printArray);
