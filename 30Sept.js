// document.write("30/09/2022");
//=================================================================================================

//Object.keys():-

// let obj = {
//   name : "sana",
//   age : 23
// };
// console.log(Object.keys(obj));

// let arr = [10,20,30];
// console.log(Object.keys(arr));

//=============================================================================================
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// ex: uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

// const uniteUnique = (...arr) => {
//   return [...new Set(arr.flat())];
// }
// let r = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// console.log(r);
//=============================================================================================

//Write a JavaScript function to check whether an 'input' is an array or not:
// const checkArr = (arr) => {
//   return Array.isArray(arr);
// }
// // let ar = [1,2,3];
// // let st = "abc";
// console.log(checkArr([1,2]));
//=============================================================================================

//Write a JavaScript function to clone an array:
// const cloneArr = (arr) => {
//   // return arr = [...arr]; or
//   return arr.slice(0);
// }
// let a1=[1,2,[3,4]];
// let a2=cloneArr(a1);
// console.log(a2);
//=============================================================================================

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// const firstEleOfArr = (arr, n) => {
//   if(n == null){
//     return arr[0];
//   }
//   else if( n < 0){
//     return [];
//   }
//   else{
//     return arr.slice(0,n);
//   }
// };
// console.log(firstEleOfArr([1,2,3],0));

//=============================================================================================
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
// const last = (arr,n) => {
//   if(n == null){
//     return arr[arr.length-1];
//   }
//   else{
//     return arr.slice(Math.max(arr.length-n,0));
//   }
// };
// console.log(last([2,3,4],1));
//=============================================================================================
// Write a simple JavaScript program to join all elements of the following array into a string:
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// "Red,Green,White,Black"
// const joinArrEle = (arr) => {
//   // return arr.join(); //red,green
//   // return arr.join("+"); //red+green
//   return arr.toString();  //red,green
// };
// console.log(joinArrEle(["red","green"]));

//=============================================================================================
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

const dashBetEven = (num) => {
  let numStr = num.toString();
  let result = [numStr[0]];
  for ( let i=1; i<numStr.length; i++){
    if(numStr[i-1]%2==0 && numStr[i]%2==0){
      result.push("-"+numStr[i]);
    }
    else{
      result.push(numStr[i]);
    }
  }
  return result.join("");
}
console.log(dashBetEven(025468));




