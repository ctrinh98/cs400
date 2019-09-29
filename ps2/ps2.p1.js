//
// ps2.p1.js - Problem Set 2, Problem 1
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

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

const evenFibGen = function* (count) {
    const fibGenCall = fibGen();
    // let res = new Array();
    for (var num = 0; num < count; num++) {
        let numNow = fibGenCall.next().value;
        if (numNow % 2 === 0) {
            yield numNow;
        }
    }

}


let testCount = 6;
res = evenFibGen(testCount);
while (testCount --> 0) {
    console.log(res.next().value)
}