// Write a script that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("i love dave matthews band"));


// Write a script function that returns a passed string with letters in alphabetical order.

// function alphabet_order(str)
//   {
//     return str.split('').sort().join('');
//   }
// console.log(alphabet_order("melissa"));


// Write a JavaScript function that generates all combinations of a string.

// function combinator (s) {
//    list_of_strings = new Array();
//    for(i=0;i<s.length;i++) {
//        for(j=i+1;j<s.length+1;j++) {
//            list_of_strings.push(s.slice(i, j));
//        }
//    }
//    return list_of_strings;
// }
//
// console.log(combinator("vodka"))



// function sorter(str) {
//     return str.split("").sort().join("")
// }
//
// console.log(sorter("vodka"))



// Write a script that accepts a list of country names as input and returns the longest country name as output.

function Longest_Country_Name(country_name){
country_name.sort(function(a,b){
return (b.length - a.length);
})
return country_name[0]
}

console.log(Longest_Country_Name(["Canada", "Jamaica", "Mexico", "United States of America"]));
