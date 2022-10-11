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
//============================================================

// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
const camelize = (str) => {
  let a = str.trim().split(" ");
  let part1 = a[0];
  let part2 = a[1].charAt(0).toUpperCase() + a[1].slice(1);
  let r = part1.concat(part2);
  return r;
};
console.log(camelize("JavaScript Exercises"));
//------------------------
// let str = "sana khan";
// let a = str.trim().split(" ");
// let part1 = a[0];
// let part2 = a[1].charAt(0).toUpperCase() + a[1].slice(1);
// console.log(part1.concat(part2));
