/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function binaryAgent(str) {
  //use split to become string in array and be able to use map
  //use parseint to become binary to decimal
  //use fromcharcode to become decimal to text
  // just join :)
  return str.split(" ").map(x=>String.fromCharCode(parseInt(x,2))).join("");

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

