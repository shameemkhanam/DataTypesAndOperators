// Write a JavaScript function that can pad (left, right) a string to get to a determined length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

// const formatted_string = (pad, str, pos) => {
//   if (str == "undefined") return pad;

//   if (pos == "l") {
//     return (pad + str).slice(-pad.length);
//   } else {
//     return (str + pad).slice(0, pad.length);
//   }
// };
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
//===================================================================================

// Write a JavaScript function to repeat a string a specified times.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

// const repeat_string = (str, count=1) => {
//   if((str == null) || (count<0) || (count==null) || (count==Infinity)){
//     return "Error in str or count..";
//   }
//   count = Math.floor(count);
//   return new Array(count+1).join(str);
// };
// console.log(repeat_string('a',3.8));
//===================================================================================

// Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

// const subStrAfterChars = (str, char, pos) => {
//   if(pos == "fromLeft"){
//     return str.substring(0, str.indexOf(char));
//   }
//   else if(pos == "fromRight"){
//     // return str.substring(str.indexOf(char)+1, str.length); //or
//     return str.substring(str.indexOf(char) + 1);
//   }
//   else{
//     return str;
//   }
// };
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','fromLeft'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'J','fromRight'));
//===================================================================================

// Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// Output :
// "w3resource"
// "w3resource"
// "w3resource"

// const strip = (str) => {
//   // return str.trim();   //or

//   return str.replace(/^\s+|\s+$/g, '');

// };
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
//===================================================================================

// Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

// const truncate = (str, noOfWords) => {
//   return str.split(" ").splice(0,noOfWords).join(" ");
// };
// console.log(truncate('The quick brown fox jumps over the lazy dog', 6));
//===================================================================================

// Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

// const alphabetize_string = (str) => {
//   return str.split("").sort().join("").trim();
// };
// console.log(alphabetize_string('shameem'));
//===================================================================================

// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"

// const remove_first_occurrence = (str, searchStr) => {
//   let index = str.indexOf(searchStr);
//   return str.slice(0, index) + str.slice(index+searchStr.length);
// };
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
//===================================================================================

// Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// Output :
// "3132"
// "313030"

// const ascii_to_hexa = (str) => {
//   let arr = [];
//   for(let i=0; i<str.length; i++){
//     let hex = Number(str.charCodeAt(i)).toString(16);
//     arr.push(hex);
//   }
//   return arr.join("");
// };
// console.log(ascii_to_hexa('A'));
// console.log(ascii_to_hexa('100'));
//===================================================================================

// Write a JavaScript function to convert Hexadecimal to ASCII format.
// Test Data :
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));
// Output :
// "12"
// "100"

// const hex_to_ascii = (str) => {
//   let hex = str.toString();
//   let str1 = "";
//   for(let i=0; i<hex.length; i=i+2){
//     str1 = str1 + String.fromCharCode(parseInt(hex.substr(i,2), 16));
//   }
//   return str1;
// };
// console.log(hex_to_ascii('41'));
// console.log(hex_to_ascii('313030'));
//===================================================================================

// Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

// const search_word = (str, srchStr) => {
//   let mystr = str.toLowerCase().split(" ");
//   // return mystr;
//   return mystr.filter((item) => item === srchStr).length;
// };
// let output = search_word("aa bb aa , aa", "aa");
// console.log(output);
// console.log(search_word("aa bb", " bb"));
//===================================================================================

// Write a JavaScript function check if a string ends with specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

// const string_endsWith = (str, endstr) => {
//   if(endstr == "") {
//     return false;
//   }
//   else{
//   return str.endsWith(endstr);
//   }
// };
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// console.log(string_endsWith('JS PHP PYTHON',""));
//===================================================================================

// Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.
// Test Data :
// console.log(escape_html('PHP & MySQL'));
// "PHP &amp; MySQL"
// console.log(escape_html('3 > 2'));
// "3 &gt; 2"

// const escape_html = (str) => {

//   let chars_to_replace = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     "'": "&apos;",
//     '"': "&quot;",
//   };
//   return str.replace(/[&<>'"]/g, function (tag) {
//     return chars_to_replace[tag];
//   });
// };
// // console.log(escape_html('PHP & MySQL'));
// console.log(escape_html("3 > 2"));
//===================================================================================

// Write a JavaScript function to remove?non-printable ASCII chars.
// Test Data :
// console.log(remove_non_ascii('???????PHP-MySQL??????'));
// "PHP-MySQL"

// function remove_non_ascii(str) {
//   if (str === null || str === "") return false;
//   else str = str.toString();

//   return str.replace(/[^\x20-\x7E]/g, "");
// }
// console.log(remove_non_ascii("äÄçÇéÉêPHP-MySQLöÖÐþúÚ??"));
//===================================================================================

// Write a JavaScript function to remove non-word characters.
// Test Data :
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"

// function remove_non_word(str) {
//   if (str === null || str === "") return false;
//   else str = str.toString();

//   var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

//   return str.replace(PATTERN, "");
// }
// console.log(remove_non_word("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
//===================================================================================

// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."

// const sentenceCase = (str) => {
//   let mystr = str.split(" ");
//   let r = mystr.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
//   return r.join(" ");
// };
// console.log(sentenceCase('PHP exercises. python exercises.'));
//===================================================================================

// Write a JavaScript function to remove HTML/XML tags from string.
// Test Data :
// console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// "PHP Exercises"

// function strip_html_tags(str) {
//   if (str === null || str === "") return false;
//   else str = str.toString();
//   return str.replace(/<[^>]*>/g, "");
// }

// console.log(strip_html_tags("<p><strong><em>PHP Exercises</em></strong></p>"));

//===================================================================================

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. 
// Test Data :
// console.log(compare_strings('abcd', 'AbcD'));
// true
// console.log(compare_strings('ABCD', 'Abce'));
// false

const compare_strings = (str1,str2) => {
  return str1.toUpperCase() === str2.toUpperCase();
};
console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));