//
// ps2.p1.js - Problem Set 2, Problem 1
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

// Generator returning the series of Fibonacci numbers starting from 0
const fibGen = function* () {
    let first = 1;
    let second = 1;
    let temp = first + second;

    yield 0;
    yield 1;

    while (true) {
        temp = second;
        yield temp;
        second = first + second;
        first = temp;
    }
}

// Generator using fibGen to obtain the next number in the Fibonacci sequence;
// once an even Fibonacci number is obtained, it is emitted
const evenFibGen = function* (count) {
    fibGenCall = fibGen();
    let countTime = 0;
    while (countTime < count) {
        let numNew = fibGenCall.next().value;
        if (numNew % 2 === 0) {
            yield numNew;
            countTime++;
        }
    }
}

// Uses generators to print out the first 6 even Fibonacci numbers
let testCount = 6;
res = evenFibGen(testCount);
while (testCount --> 0) {
    console.log(res.next().value)
}