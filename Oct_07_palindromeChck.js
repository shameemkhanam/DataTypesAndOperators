// document.write("07/10/2022");
//======================================================================================

//PALINDROME CHECKER WITH SPECIAL CHARS:

// function palindrome(str){
//   let polishedStr = str.replace(/\W+|_/g,"").toLowerCase();
//   let reverseStr = polishedStr.split("").reverse().join("");
//   console.log(polishedStr, reverseStr);
//   if(polishedStr !== reverseStr){
//     return false;
//   }
//   return true;
// }
// let r = palindrome("A man, a plan, a canal. Panama");
// console.log(r);
//--------------------------

const palindromeChecker = (str) => {
  let polishedStr = str.replace(/\W+|_/g,"").toLowerCase();
  let reverseStr = polishedStr.split("").reverse().join("");
  return (polishedStr === reverseStr) ? true : false;
};

let r = palindromeChecker("_eye");
console.log(r);