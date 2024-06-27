//Conditional statements syntax (RegisteredStudentsCount++)

var currentRegisteredStudentsCount = 0;
let minimumStudentAge = 16;

function registereStudent(name, age) {
  
  if (age > minimumStudentAge) {
    currentRegisteredStudentsCount++;
    console.log("The student " + name + " successfully registered")
  }
  
 else{
   console.log("Can't register student with name " + name + " because of age validation")
 }
}



console.log("Ammount of students that registered: " + currentRegisteredStudentsCount)
registereStudent("Noa" , 20)
registereStudent("Or" , 15)
console.log("Ammount of students that registered: " + currentRegisteredStudentsCount)