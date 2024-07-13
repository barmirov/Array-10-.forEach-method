// תרגיל כיתה משיעור 14 "מערך עם בן "

// תרגיל 1 
// לייצר מערך עם 5 אלמנטים שהם סטרינג
// להוסיף לסוף מערך 2 אייטמים 
// להסיר אייטם ראשון 
// למיין לפי ABC
// למיין הפוך CBA


// תרגיל 2 
// לייצר מערך עם 5 אלמנטים שהם מספרים  
// להדפיס כל אלמנט בכל אינדקס עם .forEach()
// לסנן כל אלמנט שמתחלק ב 4 ללא שארית


// תרגיל 3
// ללכת לאתר w3schools.com 
// לייצר מערך מכל סוג שתבחרו int / String
// לבחור מטודה שלא למדנו ולהשתמש בה 


console.log('תרגיל כיתה משיעור 14 "מערכים עם בן  : ')

console.log();

console.log('תרגיל 1 :');

console.log();

var furnitureArray = ['Table','Bed' ,'Bookcase' ,'Desk' ,'Chair'];
    
    furnitureArray.push('T v stand', 'Drawer'); // מוסיף 2 אייטמים לסוף 
    
    console.log(furnitureArray);
    
    furnitureArray.shift(); // הסרת אייטם ראשון 
    
    console.log(furnitureArray);
    
    furnitureArray[0] = 'Table'; // מחזיר אייטם ראשון שמחקתי 
    
    console.log(furnitureArray);
    
    
   furnitureArray.sort(); // מיון לפי ABC
   
   console.log(furnitureArray);
   
   
   furnitureArray.reverse(); // מיון הפוך מאות אחרונה לראשונה 
   
   console.log(furnitureArray);
   
   
   
console.log();

console.log('תרגיל 2 :');

console.log();


let numbersArray = [10, 25, 55, 37, 40];

numbersArray.forEach(function(element, index) {
  console.log(element);
}); // מדפיס כל אלמנט בכל אינדקס


let isDivisibleByFour = numbersArray.some(function(element) {
  return element % 4 === 0;
});

// בדוגמה זו, some() עובר על כל האיברים במערך ומחזיר true
// אם לפחות אחד מהם מתחלק ב־4, אחרת מחזיר false.

console.log(isDivisibleByFour); // ידפיס true אם יש לפחות אחד מהם מתחלק בארבע


console.log();

console.log('תרגיל 3 :');

console.log();

// בחרתי במטודה MAP בתרגיל 3  


let numbers = [1, 2, 3, 4, 5];

// השימוש ב־map כדי להכפיל כל איבר במערך ב־2

let doubledNumbers = numbers.map(function(item) {
  return item * 2;
});

console.log(doubledNumbers); // ידפיס [2, 4, 6, 8, 10]



