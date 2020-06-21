function fibo(num) {
  let before=0
  let cache=0
  let arr=[]

  for (let current=1;current<num-current;){
    /*
    A fibbo number is the the sequence of sum of current number+before number
    current number will become in before number in next iteration
    and upated current(current+before) will become in current in next
    iteration

    keep in mind that vars can be edited without complet his purpose

    we need to save "current" number before update it (we need it
    for value of "before" number in next interartion)
    we need to sum "before" to "current" before edit "before"(we need this
    sum for value of "updated current" that will be "current"in next iteration )

    This look like a good choice:
    current=next before
    before=current

    but...

    current=next before
    before=current====>this is not, this is upadted current
    so in next iteration updated current will be current+current

    ok this seems like the correct choice:

    before=current
    current=next before

    and just kidding this is worst choice, before=current,then current+=current no sense :/

    what we really need is to save current in a var(cache) then update current
    when next iteration start cache becomes in before and repeat the rest of process

*/
    arr.push(current)
    before=cache
    cache=current
    current+=before

  }

  return arr
}

console.log(fibo(20));
