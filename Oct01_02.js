// document.write("01/10/2022");

//================================================================================
//Swap two array elements:
// const swapElements = (arr, index1, index2) => {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   return arr;
// }
// console.log(swapElements([1,2,3],0,1));

// or using destructuring:
// const swapElements = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//   return arr;
// };
// console.log(swapElements([1, 2, 3], 0, 1));

// or using splice() method:
// const swapElements = (arr, index1, index2) => {
//   arr[index1] = arr.splice( index2,1,arr[index1])[0];
//   return arr;
// };
// console.log(swapElements([1, 2, 3], 0, 1));

//================================================================================
//Write a JavaScript program to sort the items of an array:
// const sortArr = (arr) => {
//   return arr.sort((a,b) => a-b);
// };
// console.log(sortArr([2,1,4,-3]));

//================================================================================
//CRUD on array : with only one method:
// let arr = ["mango", "apple", "banana"];
// let resArr = arr.splice(arr.length,0,"zebra");  //push

// let resArr = arr.splice(1,1,"APPLE"); //update

// let resArr = arr.splice(1,1); //delete
// console.log(resArr);
// console.log(arr);

//================================================================================
//Filter out falsy values of age:
// var data = [
//   {name : "daniel",age : 23},
//   {name : "rita",age : 24},
//   {name : "dino",age : null},
//   {name : "rina",age : undefined},
// ];
// console.log(data.filter((item) => item.age));

//================================================================================
// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

//first find count of all elements in the array:
// let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// let count = {};

// for(let i=0; i<arr1.length; i++){
//   let item = arr1[i];

//   count[item] = count[item] ? count[item]+1 : 1;
// }
// console.log(count);

//or

// let count = {};
// arr1.forEach((ele) => {
//   count[ele] = count[ele] ? count[ele]+1 : 1;
// });
// // console.log(count);
// let max = 1;
// let item = arr1[0];
// for(let i in count){
//   if(count[i] > max){
//     max = count[i];
//     item = i;
//   }
// }
// console.log(`${item} :  ${max} times`);

//================================================================================
//Find most frequent letter in a given string:
// let str = "hello world";

// let count = {};
// str.split("").forEach((element) => {
//   count[element] = count[element] ? count[element] + 1 : 1;
// });
// console.log(count);

// let max=1;
// let char = str[0];
// for(let i in count){
//   if(count[i] > max){
//     max = count[i];
//     char = i;
//   }
// }
// console.log(`${char} : ${max} times`);

//================================================================================
//Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const swapChars = (str) => {
//   let upper = /[A-Z]/;
//   let lower = /[a-z]/;
//   let resArr = [];
  
//   let splitStr = str.split("");
  
//   for(let val of splitStr){
//     if(val.match(upper)){
//       resArr.push(val.toLowerCase());
//     }
//     else if(val.match(lower)){
//       resArr.push(val.toUpperCase());
//     }
//   }
//   return resArr.join("");
// };
// let res = swapChars("ShAmeem");
// console.log(res);

//================================================================================
//Write a JavaScript program which prints the elements of the following array. 
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"...
// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// for(let i in a){
//   console.log(`" row ${i} "`);
//   for(let j in a[i]){
//     console.log(`"${a[i][j]}"`);
//   }
// }

//================================================================================
//Sum of squares of array elements:

// let givenArr = [0,1,2,3,4,2];

// let squaredArr = givenArr.map((item) => item*item);
// console.log(squaredArr);

// let res = squaredArr.reduce((acc, curitem) => acc+curitem);

// console.log(res);

//================================================================================
//Write a JavaScript program to compute the sum and product of an array of integers:

// let givenArr = [1,2,3,4,2];

// let sum = givenArr.reduce((acc,curitem) => acc+curitem);
// console.log(`Sum = ${sum}`);

// let product = givenArr.reduce((acc,curitem) => acc*curitem);
// console.log(`Product = ${product}`);

//================================================================================
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity):
// for nos:
// const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6,2, 6];

// let result = [];
// str.filter((ele) => {
//   // if(!result.includes(ele)){
//   //   result.push(ele);
//   // }
// //or
//   if(result.indexOf(ele)== -1){
//     result.push(ele);
//   }
// });
// console.log(result);

//for strings:
// let str = ["red","green","blue","red","Red","black","Black"];
// let result=[];
// let str2 = str.map((ele) => ele.toLowerCase());
// let res = str2.filter((ele) => {
//   if(result.indexOf(ele)== -1){
//     result.push(ele);
//   }
// });
// console.log(result);

//================================================================================




