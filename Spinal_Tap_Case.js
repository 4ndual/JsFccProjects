/*
 Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  //step 1
  //when lowercase is followed by uppercase create a space between boths
  //step2
  //replace non alphanumer chars(including space) with "-"

  return str.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\W|_/g,"-").toLowerCase();

}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('ThisIsSpinalTap'));

