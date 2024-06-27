// lesson 9-10 Range on switch case by Ben Meir 


// if userAge < 15 --> give a shocco 
// if userAge < 45 --> give a bear
// if userAge < 65 --> give a vodka 
// if userAge > 65 --> give a tea

var userAge = 64;

switch (true) {
  case userAge < 15:
    console.log ("Get a shocco");
    break;
    
  case userAge < 45:
    console.log ("Get a bear")
    break;
  
  case userAge < 65:
    console.log ("Get a vodka")
    break;
    
  case userAge >= 65:
    console.log ("Get a tea")
    break;
  
}
