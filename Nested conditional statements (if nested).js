// Nested conditional statements (if nested)

let x = 10;

if (x < 30) {
  alert("F");
  if (x < 20) {
    alert("Failed");
  }
} else if (x > 35 && x < 50) {
  alert("D");
} else if (x === 50) {
  alert("A");
} else {
  alert("C");
}