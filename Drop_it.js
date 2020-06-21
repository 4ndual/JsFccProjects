/*Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElementsW(arr, func) {

  //i think this is easy way

  //we declare new arr
  //this is for to avoid overwirite external vars
  //and follow functional programing principles
  //is necessary to spread it to avoid modify original arr
  let newArr=[...arr];

  //while result of func(newArr[0]) is false
  //delete first element then newArr[0] is now next element
  //follow this proccess until func is true or length of arr is 0
  while(!func(newArr[0])){

    if(newArr.length<1){
      break
    }

    newArr.splice(0,1)
  }

  //element beofore func is true were dropped from newArr
  //then newArrr the result

  return newArr
}

function dropElementsR(arr, func) {

  //funny way

  //works exactly like while
  //while result of func(newArr[0]) is false
  //call func again but pass like first parameter a copy of array less index 1
  //when length of arr is 0 or func is true return a copy o array from that point

  return arr.length<1 ||func(arr[0])?arr:dropElementsR(arr.slice(1), func);
}

function dropElements(arr, func) {

  //prety cool way

  //find the index where func is true
  //make a copy from index until final
  //if finindex don't find index(func never is true)
  // then find index return -1
  //This is very bad because then make copy -1 that is last index
  //we don't want last index we want a empty arr if func is never true
  //we just add a conditional if index== return legth of arr for a empty arr
  //else retur index of func true
  // then just elice from index a that is the result
  return arr.slice(arr.findIndex(func)==-1?arr.length:arr.findIndex(func),);

}

console.log(dropElementsW([0, 1, 0, 1], function(n) {return n === 1; }))
console.log(dropElementsR([1, 2, 3, 4], function(n) {return n > 5; }))
