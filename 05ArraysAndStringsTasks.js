// Date : 07/09/2022 :- THE TASKS FROM THE WEBSITE javascript.info
//===================================================================================

//   =: STRINGS :=
//=======================================================================================

/* 1] Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";*/

// function ucFirst(str){
//   if(!str){
//     return str;
//   }
//   else{
//     let a = str[0].toUpperCase();
//     let b = str.slice(1);
//     console.log(a+b);
//   }
// }

// ucFirst("reema");

//===============================================================

/* 2] Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive: */

// function checkSpam(str){
//   let lowerStr = str.toLowerCase();
  
//   return (lowerStr.includes('viagra')) ||( lowerStr.includes('xxx'));
// }
// let result = checkSpam('buy  now XXX');
// console.log(result);

//==================================================

/* 3] Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string. */

// function truncate(str, maxlength){
//   let strlen = str.length;
//   if(strlen > maxlength){
//     return str.slice(0,maxlength-1)+"...";
//   }
//   else{
//     return str;
//   }
// }

// let result = truncate("What I'd like to tell on this topic is:", 20);
// console.log(result);

//=================================================================

/* 4] We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */

// function extractCurrencyValue(str){
//   return +str.slice(1);  // + sign changes the string to int
// }
// let result = extractCurrencyValue("$234");
// console.log(result);

//=========================================================================================

      // =: ARRAYS :=
//=========================================================================================

/* 1] Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues","fff"];
// // styles.push("Rock-n-Roll");

// // styles[Math.ceil((styles.length-1)/2)]="Classics";
console.log(styles);
// console.log(styles.shift());

styles.unshift("Rap","Reggae");
console.log(styles);


