function whatIsInAName(collection, source) {
  
  var arr = [];
  
  // Only change code below this line

  var src=Object.keys(source)

  //iterating thorought all elements in collection with filter
  //iterating thorought all keys of source for each element with map
  //x[y]==>check if key exist
  //if exist then check that value is equal to value of source key
  //x[y]==source[y]
  // map creates a array with boolean elements
  // depending of value and key
  //reduce iterate thorought this array of booleans
  //opearate with booleans
  //only true if true and true
  //reduce return only one boolean 
  //filter keeps element in collection if return is true
  //else drop elemet
  //so.. i just drop elements that don't like to me (:

  arr=collection.filter(x=>src.map(y=>x[y]==source[y]).reduce((a,b)=>a && b))

  // Only change code above this line
  
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
