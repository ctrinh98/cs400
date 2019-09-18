//
// ps1.p3.js - Problem Set 1, Problem 3
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

// Primary Function
const execute = (str, func) => func(str);

// Expression #1
console.log(execute('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g)));

// Expression #2
console.log(execute('supercalifragilisticexpialidocious', str => {
    let origStr = str;
    let numChanges = 0;
    let strLength = 0;
    let modiStr = str.replace(/a/g, rep => {
        numChanges++;
        strLength = str.length;
        return 'A';
    });
    return {
        "originalString": origStr,
        "modifiedString": modiStr,
        "numberReplaced": numChanges,
        "length": strLength
    };
}));
