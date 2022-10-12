// Write a JavaScript function to check whether an `input` is a string or not.
// const checkStr = (input) => {
// if(typeof input === [1,2,3]){
//   return "it is a string";
// }
// else{
//   return "not a string";
// }
//----------------
//   if(Object.prototype.toString.call(input) === "[object String]"){
//     return true;
//   }
//   else{
//     return false;
//   }
// };
// console.log(checkStr("jkl"));
//============================================================

// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank('')); true
// console.log(is_Blank('abc'));false
// const is_Blank = (str) => {
//   if(str.length === 0)
//   return true;
//   else
//   return false;
// };
// console.log(is_Blank(''));
//============================================================

// Write a JavaScript function to split a string and convert it into an array of words.
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
// const string_to_array = (str) => {
//   return str.trim().split(" ");
// };
// console.log(string_to_array("Robin Singh"));
//============================================================

// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
// const truncate_string = (str, noOfChars) => {
//   return str.substr(0,noOfChars);
// };
// console.log(truncate_string("Robin Singh",4));
//============================================================

// Write a JavaScript function to convert a string in abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
// const abbrev_name = (str) => {
//   let newStr = str.trim().split(" ");
//   if(newStr.length > 1){
//     return (newStr[0] + " " + newStr[1].charAt(0) + ".");
//   }
//   else{
//     return newStr[0];
//   }
// };
// console.log(abbrev_name("Shameem Khan"));
//============================================================

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
// const protect_email = (email) => {
//   let splitEmail = email.split("@");
//   let part1 = splitEmail[0];
//   let avg = part1.length/2;
//   part1 = part1.substring(0,avg);
//   let part2 = splitEmail[1];
//   return part1 + "...@" +part2;
// };
// console.log(protect_email("shameemkhanam@gmail.com"));
//============================================================

// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
// const string_parameterize = (str) => {
//   let newStr = str.toLowerCase().split(" ").join("-");
//   return newStr;
// };
// console.log(string_parameterize("Robin Singh from USA."));
//============================================================

// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"
// const capitalize_Words = (str) => {
//   let strArr = str.split(" ");
//   let r = strArr.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
//   let res = r.join(" ");
//   return res;
// };
// console.log(capitalize_Words('js string exercises'));
//============================================================

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"
// const swapcase = (str) => {
//   let upper = /[A-Z]/;
//   let lower = /[a-z]/;

//   let strArr = str.split("");

//   let r = strArr.map((arritem) => {
//     if(arritem.match(upper)){
//       return arritem.toLowerCase();
//     }
//     else if(arritem.match(lower)){
//       return arritem.toUpperCase();
//     }
//   });

//   return r.join("");
// };
// console.log(swapcase('AaBbc'));
//------------------------------------
// swapcase = function swapcase(str) {
//   return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//       return chr ? match.toUpperCase() : match.toLowerCase();
//   });
// };
// console.log(swapcase('AaBbc'));

//============================================================

// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// const camelize = (str) => {
//   let a = str.trim().split(" ");
//   let part1 = a[0];
//   let part2 = a[1].charAt(0).toUpperCase() + a[1].slice(1);
//   let r = part1.concat(part2);
//   return r;
// };
// console.log(camelize("JavaScript Exercises"));
//------------------------
// camelize = function camelize(str) {
//   return str.replace(/\W+(.)/g, function (match, chr) {
//     return chr.toUpperCase();
//   });
// };
// console.log(camelize("JavaScript ExercisesHello"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));

//============================================================
// Write a JavaScript function to uncamelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"
// function uncamelize(str,seperator){
//   if(typeof(seperator) == "undefined"){
//     seperator = " ";
//   }
//   var str = str.replace(/[A-Z]/g, function(letter){
//     return seperator + letter.toLowerCase();
//   });
//   return str;
// }
// console.log(uncamelize('helloWorldOk'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));

//============================================================
// let arr = new Array(2);
// arr[0] = "a";
// arr[1] = "b";
// console.log(arr);

//============================================================
// Write a JavaScript function to concatenates a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
// const repeat = (str, count=1) => {
//   return count<1 ? "" : new Array(count+1).join(str);
// };
// console.log(repeat('Ha!',0));

//============================================================
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
// const insert = (main_str, ins_str, pos) => {
//   if(typeof(pos) == "undefined"){
//     pos = 0;
//   }
//   if(typeof(ins_str) == "undefined"){
//     ins_str = "";
//   }
//   return main_str.slice(0,pos) + ins_str + main_str.slice(pos);
// };
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript ',3));
// console.log(insert('We are doing some exercises.','JavaScript ',18));

//============================================================

// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"
// const humanize_format = (num) => {
//   if(typeof(num) == "undefined") return;

//   if(num % 100 >= 11 && num % 100 <=13){
//     return num+"th";
//   }

//   switch(num % 10){
//     case 1 : return num+"st";
//     case 2 : return num+"nd";
//     case 3 : return num+"rd";
//   }
//   return num+"th";

// };
// console.log(humanize_format());
// console.log(humanize_format(22));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));

//============================================================

// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

// const text_truncate = (str,len=100,ending = "...") => {
//   let newstr = "";
//   if(str.length > len){
//     newstr = str.slice(0,len-ending.length) + ending;
//     return newstr;
//   }
//   return str;
// };
// console.log(text_truncate("We are doing JS string exercises."));
// console.log(text_truncate('We are doing JS string exercises.',19));
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'));

//============================================================

// Write a JavaScript function to chop a string into chunks of a given length.
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// const string_chop = (str, len) => {
//   let newArr = [];
//   if(len > 0 ) {
//     for (let i = 0; i < str.length; i = i + len) {
//       newArr.push(str.slice(i, i + len));
//     }
//   }
//   else{
//     newArr.push(str);
//   }
//   return newArr;
// };
// console.log(string_chop("w3resource"));
// console.log(string_chop("w3resource", 2));
// console.log(string_chop("w3resource", 5));

//============================================================

// Write a JavaScript function to count the occurrence of a substring in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1
// const count = (str, word) => {
//   let cnt= 0;
//   let mystr = str.toLowerCase();
//   mystr = mystr.split(" ");
//   for(let i=0; i<mystr.length; i++){
//     if(mystr[i].includes(word)){
//       cnt = cnt + 1;
//     }
//   }
//   return cnt;
// };
// console.log(count("The quick brown fox jumps over the lazy dog the dog", 'dog'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

//============================================================
// Write a JavaScript function to escape a HTML string.
// Test Data :
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Output :
// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
function escape_HTML(html_str) {
  "use strict";

  return html_str.replace(/[&<>"]/g, function (tag) {
    var chars_to_replace = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
    };

    return chars_to_replace[tag] || tag;
  });
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
