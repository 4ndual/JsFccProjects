/*Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/


function sumAll(arr,acc=0,sort=true) {
  
  //is neccesary to sort in firt lap :/
  //sort=true by default in next lap default i false
  // would be a very bab idea sort in each lap
  if (sort){
    arr=arr.sort((a,b)=>a-b)
  }
  
  //for base case arr[0]increase in each call
  //if arr[0] is more than arr[1] then return acc
  //acc if the sum of arr[0] in current lap(call of function) + acumulation of arr[0]
  //in previous laps, in resume acc is the result
  return arr[0]>arr[1]?acc:sumAll([arr[0]+1,arr[1]],acc+=arr[0],false)

}

console.log(sumAll([4,1]));
