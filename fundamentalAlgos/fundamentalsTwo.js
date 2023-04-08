// // Countdown

// arr = [];
// function arrayCountdown(num) {
//     for (let i = num; i >= 0; i--) {
//         arr.push(i)
//     }
//     console.log(arr)
//     return(arr.length)
// }
// console.log(arrayCountdown(45))

// // Print and Return

// function printAndReturn([num1, num2]) {
//     console.log(num1);
//     return num2;
// }

// // OR

// function printAndReturn(arr) {
//     console.log(arr[0]);
//     return arr[1];
// }

// // First Plus Length

// function firstPlusLength(arr) {
//     return arr[0] + arr.length;
// }

// console.log(firstPlusLength([true, 4, 9, 10, 11, 12, 13]))

// // Values Greater than Second

// let arr = [1, 3, 5, 7, 9, 13]
// let greaterArr = []
// for (let num of arr) {
//     if (num > arr[1]) {
//         console.log(num);
//         greaterArr.push(num);
//     }
// }
// return greaterArr.length
// console.log(greaterArr.length)

// Values Greater than Second, Generalized

// function valuesGreater(arr) {
//     if (arr.length <=  1) {
//         console.log("Array must have at least two elements.");
//         return "Array must have at least two elements."
//     }
//     let newArray = [];
//     for (let num of arr) {
//         if (num > arr[1]) {
//             newArray.push(num);
//         }
//     }
//     console.log(newArray.length)
// }

// valuesGreater([11])

// This Length, That Value

// function returnArray(num1, num2) {
//     if (num1 === num2) {
//         console.log("Jinx!");
//     }
//     return Array(num1).fill(num2);
// }

// console.log(returnArray(11, 11));

// Fit the First Value

// function goldilocksArray(arr) {
//     if (arr[0] > arr.length) {
//         console.log("Too big!")
//     }
//     else if (arr[0] < arr.length) {
//         console.log("Too small!")
//     }
//     else {console.log("Just right!")}
// }

// goldilocksArray([4, 3, 4, 5])

// Fahrenheit to Celsius

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = (fDegrees - 32) * (5/9);
    return cDegrees;
  }

  console.log(fahrenheitToCelsius(32));

// Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees) {
    var fDegrees = (cDegrees * (9/5)) + 32;
    return fDegrees;
  }

  console.log(celsiusToFahrenheit(100));