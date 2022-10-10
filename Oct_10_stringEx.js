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
const truncate_string = (str, noOfChars) => {
  return str.substr(0,noOfChars);
};
console.log(truncate_string("Robin Singh",4));