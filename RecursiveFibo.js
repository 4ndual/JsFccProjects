function fibo(end,start=1,acc=0) {

  return start>=end-acc?[start]:[start,...fibo(end,start+acc,acc=start)];

}

/*just simple fibo code no much to explain is very similar to my range func
just change acc for step and make acc=start and a make a  sum of
 current+before insted of current +step*/

//current is start value for each specified call
// before is start value in bedore call(acc)
