// Write a JavaScript function to create a case-insensitive search.
// Test Data :
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
// "Not Matched"

// const case_insensitive_search = (str, srchstr) => {
//   str = str.toLowerCase();
//   srchstr = srchstr.toLowerCase();
//   if (str.includes(srchstr)) {
//     return "matched";
//   }
//   else{
//     return "Not matched";
//   }
// };
// console.log(case_insensitive_search("JavaScript Exercises", "exercises")); //matched
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); //matched
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));//Not matched
//=======================================================================================

// let srchStr = "<b>hi</b>"
// let r = new RegExp(srchStr);
// console.log(r);
//=======================================================================================

// Write a JavaScript function to Uncapitalize? the first character of a string.
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

// const Uncapitalize = (str) => {
//   // return str[0].toLowerCase() + str.slice(1);
//   //or
//   return str.charAt(0).toLowerCase() + str.slice(1);
// };
// console.log(Uncapitalize('Shameem khanam'));
//=======================================================================================

// Write a JavaScript function to Uncapitalize the first letter of each word of a string.
// Test Data :
// console.log(unCapitalize_Words('Js String Exercises'));
// "js string exercises"

// const unCapitalize_Words = (str) => {
//   let strArr = str.split(" ");

//   let res = strArr.map(
//     (item) => item.charAt(0).toLowerCase() + item.slice(1).toLowerCase()
//   );
//   return res.join(" ");
// };
// console.log(unCapitalize_Words("Js String Exercises"));
//=======================================================================================

// Write a JavaScript function to capitalize each word in the string. 
// Test Data :
// console.log(capitalizeWords('js string exercises'));
// "JS STRING EXERCISES"

// const capitalizeWords = (str) => {
//   return str.toUpperCase();
// };
// console.log(capitalizeWords('js string exercises'));
//=======================================================================================

// Write a JavaScript function to uncapitalize each word in the string.
// Test Data :
// console.log(unCapitalizeWords('JS STRING EXERCISES'));
// "js string exercises"

// const unCapitalizeWords = (str) => {
//   return str.toLowerCase();
// };
// console.log(unCapitalizeWords('JS STRING EXERCISES'));
//=======================================================================================

// Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

// const isUpperCaseAt = (str,index) => {
//   let pattern = /[A-Z]/g;
//   return pattern.test(str.charAt(index));
  
// };
// console.log(isUpperCaseAt('Js STRING EXERCISES', 3));
//=======================================================================================

// Write a JavaScript function to test whether the character at the provided (character) index is lower case. 
// Test Data :
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// true

// const isLowerCaseAt = (str, index) => {
//   let lower = /[a-z]/g;
//   return lower.test(str.charAt(index));
// };
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
//=======================================================================================

// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th. 
// Test Data :
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));
// "1st"
// "20th"
// "302nd"

// const humanize = (num) => {
//   if(num % 100 >=11 && num % 100<=13){
//     return num + "th";
//   }
//   switch(num % 10){
//     case 1 : return num +"st";
//     case 2 : return num + "nd";
//     case 3 : return num + "rd";
//   }
//   return num + "th";
// };
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(102));
//=======================================================================================

// Write a JavaScript function to test whether a string starts with a specified string. 
// Test Data :
// console.log(startsWith('js string exercises', 'js'));
// true

// const startsWith =  (str, srchStr) => {
//   // return str.startsWith(srchStr); // or

//   if(str.indexOf(srchStr) == 0){
//     return "true";
//   }
//   else{
//     return "false";
//   }
// };
// console.log(startsWith('js string exercises', 'js'));
//=======================================================================================

// Write a JavaScript function to test whether a string ends with a specified string. 
// Test Data :
// console.log(endsWith('JS string exercises', 'exercises'));
// true

// const endsWith = (str, srchStr) => {
//   // return str.endsWith(srchStr);  //or

//   let index = str.length - srchStr.length;
//   if(str.indexOf(srchStr) == index){
//     return true;
//   }
//   else{
//     return false;
//   }
// };
// console.log(endsWith('JS exercises', 'JS'));
//=======================================================================================

// JavaScript function to Shift every character in a string with character following it in alphabet!

// const shift_letters = (str) => {
//   let strArr = str.split("");
//   for(let i=0; i<strArr.length; i++){
//     switch(strArr[i]){
//       case " " : break;
//       case "z" : strArr[i] = "a";
//       case "Z" : strArr[i] = "A";
//       default : strArr[i] = String.fromCharCode(strArr[i].charCodeAt(0) + 1);
//     }

//   }
//   return strArr.join("");
// };
// let r = shift_letters("abc");
// console.log(r);
//=======================================================================================

// Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default. 
// Test Data :
// console.log(guid());
// console.log(guid(15));
// "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "b7pwBqrZwqaDrex"

// const guid = (len) => {
//   let res = [];
//   let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let charslength = chars.length;
//   let givenlen = len || 32;

//   for(let i=0; i<givenlen; i++){
//     res[i] = chars.charAt(Math.floor(Math.random() * charslength));
//   }

//   return res.join("");
// };
// console.log(guid());
//========================================================
const guid = (len=32) => {
  let res = [];
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charslength = chars.length;
  
  for(let i=0; i<len; i++){
    res.push(chars.charAt(Math.floor(Math.random() * charslength)));
  }

  return res.join("");
};
console.log(guid());