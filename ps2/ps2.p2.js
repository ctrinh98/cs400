//
// ps2.p2.js - Problem Set 2, Problem 2
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

//  Generator initialized with a sentence that emits each word of the sentence in turn
const sentenceGen = function* (sentence) {
    const senList = sentence.split(" ");

    for (const word of senList) {
        yield word;
    }
}

for (const res of sentenceGen("All I know is something like a bird within her sang")) {
    console.log(res);
}
