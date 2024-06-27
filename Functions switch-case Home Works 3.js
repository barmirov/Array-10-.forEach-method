console.log("Ex 1:")

//Write a function with switch-case.
//The function receives a number and return string saying if the number given is even or odd.

console.log();

console.log("even or odd זוגי או אי זוגי");

console.log();


function isEvenOrOdd(number) {
    switch (number % 2) {
        case 0:
            return 'The number ' + number + ' is even.';
        case 1:
            return 'The number ' + number + ' is odd.';
        default:
            return 'Invalid input.';
    }
}


console.log(isEvenOrOdd(4)); // The number 4 is even.
console.log(isEvenOrOdd(7)); // The number 7 is odd.
console.log(isEvenOrOdd(0)); // The number 0 is even.



console.log();

console.log("Ex 2:")

//Write a function with switch-case.
//The function receives a number and return string saying if the number given is negative or positive.


console.log();

console.log("negative or positive שלילי חיובי");

console.log();


function isNegativeOrPositive(number) {
    switch (true) {
        case number > 0:
            return 'The number ' + number + ' is positive.';
        case number < 0:
            return 'The number ' + number + ' is negative.';
        default:
            return 'The number ' + number + ' is zero.';
    }
}

console.log(isNegativeOrPositive(2)); // The number 2 is positive.
console.log(isNegativeOrPositive(-9)); // The number -9 is negative.
console.log(isNegativeOrPositive(0)); // The number 0 is zero.


console.log();

console.log("Ex 3: A)"); 

console.log();

console.log("switch case powered by condition")

console.log();

//Write a function with switch-case.
//The function receives one number, if the number is between 1 to 7, 
//then the function will return the specific day, otherwise the function will return
//“please enter another number”.

function numbersConvertToDays(number) {
  if (1 <= number && number <= 7) {
    switch (number) {
      case 1:
        console.log('Sunday');
        break;
      case 2:
        console.log('Monday');
        break;
      case 3:
        console.log('Tuesday');
        break;
      case 4:
        console.log('Wednesday');
        break;
      case 5:
        console.log('Thursday');
        break;
      case 6:
        console.log('Friday');
        break;
      case 7:
        console.log('Saturday');
        break;
    }
  } else {
    console.log("please choose another number, the number " + number + " is not in the allowed range (1-7)");
  }
}

numbersConvertToDays(5);
numbersConvertToDays(8);



console.log();

console.log("Ex 3: B)"); 

console.log();

console.log("switch case default")

console.log();

//Write a function with switch-case.
//The function receives one number, if the number is between 1 to 7, 
//then the function will return the specific day, otherwise the function will return
//“please enter another number”.

function numbersConvertToDays(number) {
  
    switch (number) {
      case 1:
        console.log('Sunday');
        break;
      case 2:
        console.log('Monday');
        break;
      case 3:
        console.log('Tuesday');
        break;
      case 4:
        console.log('Wednesday');
        break;
      case 5:
        console.log('Thursday');
        break;
      case 6:
        console.log('Friday');
        break;
      case 7:
        console.log('Saturday');
        break;
      default:
        console.log('please choose another number, the number ' + number +  'is not in the allowed range (1-7)');
        break;
  } 
}

numbersConvertToDays(1);
numbersConvertToDays(7);


console.log();

console.log("Ex 4:"); 

console.log();

console.log("convert number to month תמיר מספר לחודש")

console.log();

//Write a function with switch-case.
//The function receives one number, if the number is between 1 to 12, 
//then the function will return the specific month, 
//otherwise the function will return “please enter another number”.


function numbersConvertToDays(number) {
  
    switch (number) {
      case 1:
        console.log('January');
        break;
      case 2:
        console.log('February');
        break;
      case 3:
        console.log('March');
        break;
      case 4:
        console.log('April');
        break;
      case 5:
        console.log('May');
        break;
      case 6:
        console.log('June');
        break;
      case 7:
        console.log('July');
        break;
      case 8:
        console.log('August');
        break;
      case 9:
        console.log('September');
        break;
      case 10:
        console.log('October');
        break;
      case 11:
        console.log('November');
        break;
      case 12:
        console.log('December');
        break;
      default:
        console.log('please choose another number, the number ' + number +  ' is not in the allowed range (1-12)');
        break;
  } 
}

numbersConvertToDays(1);
numbersConvertToDays(13);


console.log();

console.log("Ex 5:"); 

//Write a function with switch-case.
//The function receives a letter and has to check if the letter is a vowel or a consonant.
//The vowel letters are : a,e,i,o,u,y and the rest of the letters a consonant.


console.log();

console.log("vowel or a consonant: a,e,i,o,u,y ");

console.log();

function checkVowelOrConsonant(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'y':
            return 'The letter ' + letter + ' is a vowel.';
        default:
            return 'The letter ' + letter + ' is a consonant.';
    }
}


console.log(checkVowelOrConsonant('a')); // The letter a is a vowel.
console.log(checkVowelOrConsonant('B')); // The letter B is a consonant.
console.log(checkVowelOrConsonant('y')); // The letter y is a vowel.
console.log(checkVowelOrConsonant('Z')); // The letter Z is a consonant.


console.log();

console.log("Ex 6:"); 

console.log();

console.log("Convert a number to a grade on the test תמיר מספר לציון במבחן")

console.log();

//Write a function with switch-case.
//The function receives a number between 0 to 100.
//If the number is between 0 to 20, the function returns : “D”.
//If the function is between 21 to 55, the function returns : “C ”. If the function is between 56 to 70, the function returns : “B ”. If the function is between 71 to 90, the function returns : “A ”.
//If the function is between 90 to 100, the function returns : “A+ ”.



function getGrade(score) {
    switch (true) {
        case (score >= 0 && score <= 20):
            console.log('D');
            break;
        case (score >= 21 && score <= 55):
            console.log('C');
            break;
        case (score >= 56 && score <= 70):
            console.log('B');
            break;
        case (score >= 71 && score <= 90):
            console.log('A');
            break;
        case (score >= 91 && score <= 100):
            console.log('A+');
            break;
        default:
            console.log('Please choose another number, ' + score + ' is not in the allowed range (0-100)');
            break;
    }
}


getGrade(1);   // Output: D
getGrade(40);  // Output: C
getGrade(60);  // Output: B
getGrade(85);  // Output: A
getGrade(95);  // Output: A+
getGrade(-5);  // Output: Please choose another number, -5 is not in the allowed range (0-100)
getGrade(105); // Output: Please choose another number, 105 is not in the allowed range (0-100)



console.log();

console.log("Ex 7:");

console.log("operations: add, sub, mult, div. by choose num 1-4");


//Write a function with switch-case.
//The function receives 3 parameters(2 integer numbers and number between 1 to 4). number 1 -> addition
// 2 -> subtraction number 3 -> division number 4 -> multiplication

//For example, if the third parameter is 4, the function returns the first parameter * the second parameter.
//If the third parameter is 2, the function returns the first parameter - the second parameter.

console.log();


function performOperation(num1, num2, operation) {
    let result;

    switch (operation) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Division by zero is not allowed';
            }
            break;
        case 4:
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operation number. Please choose a number between 1 and 4.';
    }

    return result;
}


console.log(performOperation(10, 5, 4));  // Output: 50 (10 * 5)
console.log(performOperation(10, 5, 2));  // Output: 5 (10 - 5)
console.log(performOperation(10, 0, 3));  // Output: Division by zero is not allowed
console.log(performOperation(10, 2, 3));  // Output: 5 (10 / 2)
console.log(performOperation(8, 3, 5));   // Output: Invalid operation number. Please choose a number between 1 and 4.


