function diffArray(arr1, arr2) {
  //i think this if the hard way is eassier merge arrays
  //create a arr 
  // filter arr1 against arr2
  //filter arr2 against arr1
  //if arr1 or arr 2 don't includes some value
  // keep it, the rest drop it

  return [...arr1.filter(x=>!arr2.includes(x)),...arr2.filter(x=>!arr1.includes(x))];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
