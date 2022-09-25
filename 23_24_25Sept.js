// Array Methods: -->
// 1. Compare two arrays equal or not:----

// let arr1 = [3,2,4,5,9];
// let arr2 = [5,4,3,2,1];

// const is_same = (arr1.length == arr2.length) && ( arr1.every((curelement) => {
//   if( arr2.indexOf(curelement) > -1){
//     return ( curelement = arr2[arr2.indexOf(curelement)]);
//   }
// }));
// console.log(is_same);
//=======================================================================

//2. union and intersection of arrays
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,6,7];
//intersection

// let intersection = [];
// for (let i of arr1) {
//   for (let j of arr2) {
//     if (i == j) {
//       intersection.push(j);
//     }
//   }
// }
// console.log(intersection);
// or
// let interSecArr = arr1.filter((curele) => {
//   return arr2.includes(curele);
// })
// console.log(interSecArr);

//---------------union--------------------------
// let unionArr = new Set([...arr1,...arr2]);
// console.log(unionArr);
// //or
// let unionArr1 = [...new Set([...arr1,...arr2])];
// console.log(unionArr1);
// or

// const diff = arr1.filter((curEle) => {
//   return !arr2.includes(curEle);
// });
// console.log(diff);
// console.log([...diff,...arr2]);

//====================================================================
// 3. two arrays equal or not

let arr1=[1,2,3,4,8];
let arr2=[1,2,3,4,8];
// let r = arr1.length === arr2.length && arr1.every((curEle) => {
//   if(arr2.includes(curEle)){
//     return curEle=arr2[arr2.indexOf(curEle)];
//   }
// });
// console.log(r);

let r2 = arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index]);
console.log(r2);

//========================================================================
//4. reverse integer

// console.time("codeStart");

// let x = -123;
// let z = x.toString().split("").reverse().join("");
// if(z.endsWith("-")){
//   z = "-"+z;
// }
// console.log(parseInt(z));

// console.timeEnd("codeStart");
//===========================================================================
//5. Intersection of two arrays using ES6 approach..

// let arr1 = [4,9,5];
// let arr2 = [9,4,9,8,4];
// arr1 =[...new Set(arr1)];
// console.log(arr1);
// arr2 = [...new Set(arr2)];
// console.log(arr2);
// let newAr=[];
// for(let i of arr1){
//   if(arr2.includes(i)){
//     newAr.push(i);
//   }
// };
// console.log(newAr);

//=====================================================================
//6. Function Currying

// function anyName(a){
//   return function(b){
//     return function(c){
//       console.log(a,b,c);
//     }
//   }
// }
// anyName(1)(2)(3);

// function getSum(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         console.log(a+b+c+d);
//       }
//     }
//   }
// }
// getSum(1)(2)(3)(4);     //this function can be written as:

// const getSum = (a) => (b) => (c) => (d) => a+b+c+d;
// const total = getSum(5)(4)(3)(2);
// console.log(total);

// const mul = (a) => (b) => (c) => (d) => (e) => a*b*c*d*e;
// const res = mul(1)(2)(3)(4)(2);
// console.log(res);

//===========================================================================
//7. Find whether a char is vowel or consonant

// let char = "I";
// char = char.toLocaleLowerCase();
// if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//   console.log("given char is a vowel");
// }
// else{
//   console.log("given char is a consonant");
// }
//======================================================================================

// 8. Fibonacci series for a given No:

// let num = 200;
// let n1 = 0;
// let n2 = 1;
// let fn = n1 + n2;
// console.log(n1);

// while(fn < num){
//   console.log(fn);
//   fn = n1 + n2;
//   n1= n2;
//   n2=fn;
// }
//======================================================
//9. Swap 2 numbers :

// let x = 10;
// let y = 20;
// let z = x;
// x = y;
// y = z;
// console.log("x : " + x, "y : " +y);

//Without using third var: 
// let a = 10;
// let b = 20;
// a = a + b;  //a=30
// b = a - b;  //30-20=10
// a = a - b;  //30-10=20
// console.log(a,b);
