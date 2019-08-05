const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

//integers.sort((a, b) => a - b).filter(integer => integer < 19))
//integers.sort((a, b) => a - b).filter(integer => integer < 19).map(integer => integer * 1.5 - 1))
console.log(integers.sort((a, b) => a - b).filter(integer => integer < 19).map(integer => integer * 1.5 - 1).reduce((acc, current) => acc + current))
