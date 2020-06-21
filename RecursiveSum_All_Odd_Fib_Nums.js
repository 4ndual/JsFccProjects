function sumFibs(e,i=1,acc=0,res=0) {

  return i>e?res:sumFibs(e,i+acc,i,i%2!==0?res+=i:res)

}

//i like recursivity, but is hard to explain :c
//i just update my code of sum all odd fibs and change for loop for recursivity
//with recursivity i don't need a cache var(you can edit next values without lost current values)
//i like short syntax so i change var names
//literal traduction would be:

/*function sumFibs(num,current=1,before=0,res=0) {

  return current>num?res:sumFibs(num,current+before,current,current%2!==0?res+=current:res)

}
*/
