console.log("Ex1:");

console.log();

console.log("A)");

console.log();

//What is the value of the variable c ? 

var a = 10; 
var b = 5; 
var c = a + b;



function addFunction() {
  console.log(a + b); 
  return c;
}

var result = addFunction();
console.log("The result of the variable c is: " + result);

console.log();



console.log("B)");

console.log();

//var num1 = 10; var num2 = 50; num1 *= 9; num2 /= num1;
//num1 = 5+10 *3-1;
//num2 = 9 * num1 ; num2 = num1 / 8 +2;

//What is the value of the variable num1 and num2 

var num1 = 10;
var num2 = 50;

function Ex1B(){
  console.log(num1 * 9);
  console.log(num2 / num1);
  console.log(num1 = 5 + 10 * 3-1);
  console.log(num2 = 9 * num1);
  console.log(num2 =  num1 / num2);
}

var result = Ex1B();

console.log();



console.log("Ex2:");

console.log();

//var number = 10; number ++ ; number ++; number += 5; number - - ; number *=2;
//What is the value of the variable number ?

var number = 10;

function counter(){
  console.log(number);
  number++;
  number++;
  console.log(number + 5);
  number--;
  console.log(number * 2);
  return number;
}

var number = counter(number);
console.log(number);
console.log("Value of variable is: " + number);

console.log();



console.log("Ex3:");

console.log();

//on every expression write true or false ? 1<=8 +1
//(2-3+4)*(9+7) && false 10 + 18 >= 3 || 4<= 10
//10==10 || 10 === 10
//10 == 10 && 20 == 30 || 5%2 == 1
//10 == 10 || 20 == 30 && 5%2 == 1
//20 == 30 || 10 == 10 || 5%2 == 0
//(33 > 20) || (2 < 12) && 10 || 2<= 3 && !true true && true || false || true
//true && false || 8< 10 && !false true || false && 5<= 9 || 10 != 38
//!false || !true && !false &&| !true
//(!10) && (10) || (!10) && (10) && 2<9 || true
//(!false) || (!10)

function trueOrFalse() {
  console.log(1 <= 8 + 1);
  console.log((2 - 3 + 4) * (9 + 7) && (false || 10 + 18 >= 3 || 4 <= 10));
  console.log(10 == 10 || 10 === 10);
  console.log(10 == 10 && 20 == 30 || 5 % 2 == 1);
  console.log(10 == 10 || (20 == 30 && 5 % 2 == 1));
  console.log(20 == 30 || 10 == 10 || 5 % 2 == 0);
  console.log((33 > 20 || 2 < 12) && (10 || 2 <= 3) && (!true && true || false || true));
  console.log(true && false || (8 < 10 && !false) || true && (5 <= 9 || 10 != 38));
  console.log(!false || !true && !false && !true);
  console.log((!10 && 10) || (!10 && 10 && 2 < 9) || true);
  console.log((!false) || (!10));
}

console.log("the answer is: ");
trueOrFalse();

console.log();


console.log("Ex 4:");

console.log();

//Write on every expression what will be printed, below you can see the values of all the variables.

//var A = 5; var B = 3; var C = 19; var D = -2; var X = 4; var Y = 1;

//(1)	(5*X)+2*((3+B)+4)	
//(2)	(5*(X*2)*3)*(B+4)	
//(3)	A == (B=5*5+Y)	
//(4)	A += (X+5+A-Y)	
//(5)	A != (C *= (-D+A))	
//(6)	A *= A+(7-X-D+3)	
//(7)	A %= D++	
//(8)	A %= ++D	
//(9)	(X++)*(A+C)+ (A++)	
//(10)	A = A—- + X*(B<A)+Y*!(B<C)+5%2	
//(11)	!(X-D+C)||D+B+A && D++	
//(12)	A&&C||!0&&A&&!D	
//(13)	((A&&B)||(!0&&C))&&!D || A || B	&& Y
//(14)	((A&&C)||!0)&&(C&&(!D)) && !A || !B

var A = 5;
var B = 3;
var C = 19;
var D = -2;
var X = 4; 
var Y = 1;

function Ex5() {
  console.log((5 * X) + 2 * ((3 + B) + 4));
  console.log((5 * (X * 2) * 3) * (B + 4));
  console.log(A == (B = 5 * 5 + Y));
  console.log(A += (X + 5 + A - Y));
  console.log(A != (C *= (-D + A)));
  console.log(A *= A + (7 - X - D + 3));
  console.log(A %= D++);
  console.log(A %= ++D);
  console.log((X++) * (A + C) + (A++));
  console.log(A = A-- + X * (B < A) + Y * !(B < C) + 5 % 2); 
  console.log(!(X - D + C) || (D + B + A) && D++);
  console.log(A && C || ! 0 && A && !D);
  console.log(((A && B) || (!0 && C)) && !D || A || (B && Y));
  console.log(((A && C) || !0) && (C && (!D)) && !A || !B);
}

Ex5();

console.log();

console.log("Exercice 5:");

console.log();

//Exercice 5:
//Give value to the variable a, b, c, d in order that the if() will be TRUE? Give value to the variable a, b, c, d in order that the if() will be FALSE?

//if( a || b || c || d || false ) if( a == b || c <= d)
//if ( a <= c && c <= d || !b) if ( a != b || a<c && !c )
//if ( a != b ||a<= c || a<= b || true) if ( a != b ||a<= c || a< b || c==c ) if ( a%b == 0 && c%d == 1 )

function Exercice5() {
  var a = 1;
  var b = 2;
  var c = 3;
  var d = 4;

  // Condition 1
  if (a || b || c || d || false) {
    console.log("Condition 1 is true");
  } else {
    console.log("Condition 1 is false");
  }

  // Condition 2
  if (a == b || c <= d) {
    console.log("Condition 2 is true");
  } else {
    console.log("Condition 2 is false");
  }

  // Condition 3
  if (a <= c && c <= d || !b) {
    console.log("Condition 3 is true");
  } else {
    console.log("Condition 3 is false");
  }

  // Condition 4
  if (a != b || a < c && !c) {
    console.log("Condition 4 is true");
  } else {
    console.log("Condition 4 is false");
  }

  // Condition 5
  if (a != b || a <= c || a <= b || true) {
    console.log("Condition 5 is true");
  } else {
    console.log("Condition 5 is false");
  }

  // Condition 6
  if (a != b || a <= c || a < b || c == c) {
    console.log("Condition 6 is true");
  } else {
    console.log("Condition 6 is false");
  }

  // Condition 7
  if (a % b == 0 && c % d == 1) {
    console.log("Condition 7 is true");
  } else {
    console.log("Condition 7 is false");
  }
}

Exercice5();
