// Array .forEach() addTen +10 with update
// הקוד הנכון לעדכון ערכים 

var arrayNumber = [1,2,3,4];

function addTen(element, index) {
  arrayNumber[index] = element + 10;
  console.log(arrayNumber[index]);
}

arrayNumber.forEach(addTen);