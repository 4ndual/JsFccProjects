/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

//This is just a update of my fibo code

function sumFibs(num) {
  
  //before is past current
  let before=1
  // cache is for save past current until become in before
  let cache=0
  //res sum of all odd number
  let res=0
  //current is the current value for x lap in  fibbo sequence

  for (let current=1;current<=num;){

    //if current is odd, sum current+res and save in res
    current%2!==0? res+=current:0
    //update before(i need before == to past current)
    before=cache
    //update cache (i don't wanna lost "current" value without save it, i need it for before i next lap)
    cache=current
    //update current :)
    current+=before


  }

  return res
}


