/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.*/


function diffArray(arr1, arr2) {

  //merge arrays makes everything eassier
  var newArr = [...arr1, ...arr2];

  //if arr1 or arr 2 don't includes some value
  // keep it, the rest drop it
  return newArr.filter(x=>!arr1.includes(x)||!arr2.includes(x));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
