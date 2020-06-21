/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {

  var arr = [];

  // Only change code below this line

  var src=Object.keys(source)

  //iterating thorought all elements in collection with filter
  //iterating thorought all keys of source for each element with every
  //x[y]==>check if key exist
  //if exist then check that value is equal to value of source key
  //x[y]==source[y]
  // if condition if true for all keys every return true
  //filter keeps element in collection if return is true
  //else drop elemet
  //so.. i just drop elements that don't like to me (:

  arr=collection.filter(x=>src.every(y=>x[y]==source[y]))

  // Only change code above this line
  
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

