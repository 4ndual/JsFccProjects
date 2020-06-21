/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {

 //replace1

  //match a word wiht one or more vowels only in the begining  
  //add  "way" to the whole match($&)
  //if not match don't change anything

  //replace2

  //match and capture consonants in the begining
  //capture the rest
  //swap boths groups and add "ay"
  // if not match don't change anything

  return str.replace(/^[aeiou].*/,"$&way").replace(/(^[^aeiou]+)(.*)/,"$2$1ay");

}

translatePigLatin("rhythm");

// i like how replace works like conditional C:
