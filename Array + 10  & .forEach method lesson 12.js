// Arrays

console.log("Array + 10  & .forEach method");

console.log();

var stringArray = ["Bar" , "Ben" , "Koral" , "Jeremy"];

console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);
console.log(stringArray[4]); // כאשר אין אלמנט במערך undefined

console.log();



// נניח ואנחנו רוצים להוסיף +10 למערך בכל אלמנט 

var intArray = [10, 20 , 30 , 40 , 50];

intArray[0] = intArray[0] + 10;
intArray[1] = intArray[1] + 10;
intArray[2] = intArray[2] + 10;
intArray[3] = intArray[3] + 10;
intArray[4] = intArray[4] + 10;

console.log(intArray); // מדפיס כל המערך +10 

console.log();

// או מדפיס כל מערך בנפרד +10 

console.log(intArray[0]);
console.log(intArray[1]);
console.log(intArray[2]);
console.log(intArray[3]);
console.log(intArray[4]);

//  * בעיה בשיטה זאת קוד חוזר וארוך *

console.log();

// בforTach יש צורך לכתוב פונקציה

function addPlusTen(elemnt) { // פונקציה שתחבר 10+ לכל אלמנט
  console.log(elemnt + 10);
}

var intArray = [0 , 1 , 2 , 3 , 4]; // המערך והאלמנטים

intArray.forEach(addPlusTen); // קורא למערך ומשתמש במטודה forEach וקורא בסוגריים לפונקציה

// forEach מפעיל את הפונקציה עבור כל אלמנט 

console.log();





//javascript פתרון שנעשה בשיעור 12 ב


function increasEeachElementBy10(element, index) {
  addPlus10[index] = element + 10;
}

function printArray(element) {
  console.log(element);
}

var addPlus10 = [55, 67, 74, 83, 92];

addPlus10.forEach(increasEeachElementBy10); // לעדכן את הערכים במערך
addPlus10.forEach(printArray); // להדפיס את הערכים המועדכנים


console.log();





// החלת forEach עבור String


function printArrayElement(elemnt , index){
  console.log("I got elemnt " + elemnt + " with index number " + index);
}

var namesArray = ["Bar" , "Ben" , "Koral" , "Jeremy" , "Haim"];

namesArray.forEach(printArrayElement);




