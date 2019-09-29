//
// ps2.p3.js - Problem Set 2, Problem 3
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

// cubeInp prints the cube value of its input
const cubeInp = number => console.log(Math.pow(number, 3));

// calls cubeInp function on each value of the array [1,2,3,4,5,6,7]
[1,2,3,4,5,6,7].map(n => cubeInp(n));
