// // Biggie Size

// let randomArray = [-1, 3, 5, -5]

// function makeItBig(array) {
//     for (i in array) {
//         if (array[i] >= 0) {
//             array[i] = "big"
//         }
//     }
//     return array
// }

// modified_Array = makeItBig(randomArray)

// console.log(modified_Array)

// Print Low, Return High

// const printLowReturnHigh = (array) => {
//     let highest = array[0]
//     let lowest = array[0]

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > highest) {
//             highest = array[i];
//         }
//         if (array[i] < lowest) {
//             lowest = array[i];
//         }
//     }

//     console.log(`Lowest value in the array: ${lowest}`);
//     return highest;
// }

// console.log(printLowReturnHigh(randomArray))

// Print One, Return Another

// const printOneReturnAnother = array => {
//     console.log(array[array.length -2]);
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             return array[i];
//         }
//     };

// }

// console.log(printOneReturnAnother(randomArray))

// Double Vision

// const doubleArray = array => {
//     let doubledArray = []
//     for (let i = 0; i<array.length; i++) {
//         doubledArray.push(array[i] * 2);
//     }
//     return doubledArray;
// }

// console.log(doubleArray(randomArray))

// console.log(randomArray)

// Count Positives

// const countPositives = array => {
//     let newArray = array;
//     let positives = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 0) {
//             positives.push(array[i])
//         }
//     }
//     newArray[array.length-1] = (positives.length)
//     return newArray;
// }

// console.log(countPositives(randomArray))

// Evens and Odds

// const threesCompany = array => {
//     let consecutiveOdds = 0;
//     let consecutiveEvens = 0;
      
//         for (let i = 0; i < array.length; i++) {
//           if (array[i] % 2 !== 0) {
//             consecutiveOdds++;
//             consecutiveEvens = 0;
//             if (consecutiveOdds === 3) {
//               console.log("That's odd!");
//               consecutiveOdds = 0;
//             }
//           } else {
//             consecutiveEvens++;
//             consecutiveOdds = 0;
//             if (consecutiveEvens === 3) {
//               console.log("Even more so!");
//               consecutiveEvens = 0;
//             }
//           }
//         }
//       }

// threesCompany(randomArray)

// Increment the Seconds

let randomArray = [41, 75, 99, 1110, 42, 58, 7, -14, 4]
const incrementSeconds = array => {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] += 1;
        }
        console.log(array[i]);
    }
    return array
}

let modified_Array = incrementSeconds(randomArray)

console.log(modified_Array);

// Previous Lengths



// Add Seven to Most



// Reverse Array



// Outlook: Negative



// Always Hungry



// Swap Toward the Center



// Scale the Array



// 