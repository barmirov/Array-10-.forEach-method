// Nested conditions - lesson 9 By Ben Meir


//Nested conditions 

userJob = "QA";

if (userJob == "Fullstack" || userJob == "Backend" || userJob == "Frontend") {
  if (userJob == "Fullstack") {
    console.log("Welcome our new Fullstack developer");
  } else if (userJob == "Backend") {
    console.log("Welcome our new Backend developer");
  } else {
    console.log("Welcome our new Frontend developer");
  }
} else {
  console.log("Sorry, we are looking for developers");
}


// Nested מצב בו כאשר שלא ניתן להשתמש ב