function range(start,end,step=1) {
  
  if (end==undefined){
    end=start
    start=0
  }

  return start>=end-1?[start]:[start,...range(start+step,end)];
}

// PARAMETERS:start* (optional), end, step* (optional)
// if start parameter is not defined default is 0
// if step parameter is not defined default is 1

//RETURN a list of number from start to end

/* Graphic explanation example range(3)

range (start=0,end=3, step=1)==>[0,1,2] FINAL OUTPUT
 start>=end-step?
 NO
 [start=>0,...range(start+step,end,step)==>[1,2]]RECALL 1
    range(3,1,1)
     start>=end-step?
     NO
     [start=>1,...range(start+step,end,step)==>[2]] RECALL 2
       range(3,2,1)
        start>=end-step?
        YES
        [start=>2]   BASE CASE
*/


