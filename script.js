1.
for (let i = 0; i <= 100; i++) {
    console.log(i);
  }

2.
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

3.
let namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log("Initial Array:", namesArray);

let poppedName = namesArray.pop();
console.log("Array after pop:", namesArray);
console.log("Popped element:", poppedName);

let shiftedName = namesArray.shift();
console.log("Array after shift:", namesArray);
console.log("Shifted element:", shiftedName);

namesArray.unshift('Frank');
console.log("Array after unshift:", namesArray);

namesArray.push('Grace');
console.log("Array after push:", namesArray);

4.
let emptyArray = [];
for (let i = 1; i <= 10000; i++) {
  emptyArray.push(i * i);
}
console.log(emptyArray); 

5.
let numbersArray = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("The sum of the numbers:", sum);

6.
function isOdd(number) {
  return number % 2 !== 0;
}
console.log(isOdd(5));
console.log(isOdd(8));

7.
function convertToLowerCase(upperCaseString) {
  return upperCaseString.toLowerCase();
}
let upperCase = "MY NAME IS JOHN";
let lowerCase = convertToLowerCase(upperCase);
console.log(lowerCase);

8.
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);



