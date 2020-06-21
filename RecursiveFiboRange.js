function range(start,end,step=1,acc=0,fibo=false) {

  if (step=="fibo" || end=="fibo"){

    end=start,start=1,step=1,fibo=true
  }

  else if (end==undefined){
    
    end=start,start=0
    
  }


  return start>=end-step-acc?[start]:[start,...range((fibo?start+acc:start+step),end,step,acc=start,fibo)];
}



/*this code works like normal range, but you can add "fibo" like second or
third argument then create a range in fibbonaci sequence*/

// i really don't like this code, is ugly, is better to have a function
// for range and a function for fibo
