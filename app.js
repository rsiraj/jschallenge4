// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2
numAverage = numArray => {
    let output = 0;
    for (let i = 0; i < numArray.length; i++){
        output += numArray[i];
    }
    return `Output: ${(output / numArray.length)}`;
}

console.log(numAverage([1,4,7])); // Output: 4
console.log(numAverage([10,5])); // Output: 7.5
console.log(numAverage([1.5,3,2.5,1])); // Output: 2


// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.
function checkNumber (numArray, target) {
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(checkNumber([4,5,6,7,0,1,2],0));
console.log(checkNumber([4,5,6,7,0,1,2],3));


// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className
// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 
window.updateTheBackground = function(className) {
    if (className === "bg-red"){
        document.body.className = "bg-red";
    }
    else if (className === "bg-white"){
        document.body.className = "bg-white";
    }
}


// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// function coinCalculator (coins, change) {
//     coins.sort(function(a, b){return b - a}); // sorts the array in descending order
//     if (coins[coins.length-1] > change || change === 0){ // if the smallest coin is bigger than the change, or if change is 0, return -1
//         return -1;
//     }
//     else {
//         let remainder = change;
//         while (remainder){
//             let numCoins = 0
//             for (i = 0; i < coins.length; i++){
//                 if (coins[i] === remainder){
//                     return remainder;
//                 }
//                 else {
//                     remainder -= coins[i];
//                     numCoins++;
//                 }
//             }
//             return numCoins;
//         }
//     }
// }

// console.log(coinCalculator([3,12,2],15)) // gave up on this solution after tinkering for hours
function coinCalculator(coins, change){
    coins.sort(function(a,b){
        return b-a
    });
    
    let minCoins = 0;
    let remainder = change;
    let i = 0;

    while(change){
        if(remainder / coins[i] < 1){
            i++;
        }
        else{
            minCoins = minCoins + Math.floor(remainder / coins[i]);
            remainder = remainder % coins[i];
            i++;
        }
        if(remainder == 0){
            return minCoins;
        }
        if(i == coins.length){
            return -1;
        }
    }
}
console.log(coinCalculator([11, 1, 2, 5], 19)); // 4