// PSEUDOCODE

// https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript

// Hamming # is (2^i)(3^j)(5^k)
// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051

// CODE
function hamming (n) {
  return 2^1*3^0*5^0
}


// DRIVER | TEST CODE

console.log(hamming(1); // expect 1,
// console.log(hamming(2); // expect 2,
// console.log(hamming(3); // expect 3,
// console.log(hamming(4); // expect 4,
// console.log(hamming(5); // expect 5,
// console.log(hamming(6); // expect 6,
// console.log(hamming(7); // expect 8,
// console.log(hamming(8); // expect 9,
// console.log(hamming(9); // expect 10, 
// console.log(hamming(10); // expect 12,  
// console.log(hamming(11); // expect 15,  
// console.log(hamming(12); // expect 16,  
// console.log(hamming(13); // expect 18,  
// console.log(hamming(14); // expect 20,  
// console.log(hamming(15); // expect 24,  
// console.log(hamming(16); // expect 25,  
// console.log(hamming(17); // expect 27,  
// console.log(hamming(18); // expect 30,  
// console.log(hamming(19); // expect 32,