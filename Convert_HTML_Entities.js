/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {

  //creating a translator dictionary
  let d={
	"&":"&amp;",
	'<':'&lt;',
	'>':'&gt;',
	'"':'&quot;',
	"'":"&apos;"
 	}

  //split string for use of map
  //map for find character and replace it
  //d[x]||x ===>check if key x exist in d if exist return value of x in d(translation) else just return x
  //join for return a string
  return str.split("").map(x=>d[x]||x).join("");
}


//i like this syntax i prety short and beatiful
// i love how "||" replace ternary operator
console.log(convertHTML("Dolce & Gabbana"));

