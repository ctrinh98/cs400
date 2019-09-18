//
// ps1.p1.js - Problem Set 1, Problem 1
//
// name: Christopher Trinh
// email: ctrinh@bu.edu
//

// EXAMPLE:
// const biggie = items => Math.max(...items);
// console.log(`Biggest int is: ${biggie([4,8,1,4,3,9,2])}`) ;

const alphaStr = str => str.split('').sort().join('');
console.log(`Alphabetized 'supercalifragilisticexpialidocious' is: ${alphaStr('supercalifragilisticexpialidocious')}`);
