// write a function that check if item is one of the following:
// Computer, Mouse, Keyboard, Screen, Tv, Iphone (this is the items)

//1. chek if the item you got is 1 of the following.
//2. if its one of the following item print: "I got computer" for computer "I got mouse" for mouse.
//3. if item is not from the following print: "This item is not recognized:" + ithem. 
//4. use switch case for yor answer

var item = "TV";

function myStore(item) {
  if (item == "Computer" || item == "Mouse" || item == "Keyboard" || item == "Screen" || item == "TV" || item == "Iphone") {
    switch (item) {
      case "Computer":
        console.log("I got computer");
        break;
        
      case "Mouse":
        console.log("I got Mouse");
        break;
          
      case "Keyboard":
        console.log("I got Keyboard");
        break;
        
      case "Screen":
        console.log("I got Screen");
        break;
        
      case "TV":
        console.log("I got TV");
        break;
        
      case "Iphone":
        console.log("I got Iphone");
        break;
    }
  } else {
    console.log("Item not recognized: " + item);
  }
}

// קריאה לפונקציה
myStore(item);

