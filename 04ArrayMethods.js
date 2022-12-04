/*let arr = [10,20,30,40];
// console.log(arr);
let sum=0;
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
  sum +=arr[i];
}
console.log(`The sum of array elements = ${sum}`); */

// let arr2 = [34,"harry",true,null];
// console.log(arr2);


/*let arr3 = new Array(23,34,55);

// let arr3 = new Array();
// arr3[0]=67;
// arr3[1]="harry";
// arr3[2]="shama";
// arr3[3]=44;
console.table(arr3); */
//----------------------------
// let arr4 = [
//   [10,20,30],
//   [40,50,60]  
// ];
// console.log(arr4);
//console.table(arr4);

//----------------------------------- 
// let arr5 = [10,30,50];
// arr5[1] = 20;
// delete arr5[2];
// // console.table(arr5);
// console.log(arr5);

//=======================================
//ARRAY METHODS
//========================================

var a = ["sallu", "abbu", "neetu", "meetu", "neetu"];
// console.log(a.sort());
//----------------------------------------------
// var a = [20,43,12,34];
// // a.sort((a,b)=> a-b); //asc order
// a.sort((a,b)=> b-a); // desc order
// console.log(a);
//----------------------------------------------
// a.reverse();
// console.log(a);
//---------------------------------------------

// a.pop();
// a.push("zeetu");
// a.shift();
// a.unshift("newValue");
// console.log(a);
//----------------------------------------------

let ar1 = ["a", "b", "c"];
let ar2 = ["d", "e"];
let ar3 = ["f", "g"];
// // console.log(ar1.concat(ar2,ar3));

// // console.log(ar1.join(" "));
// console.log(ar1.join("/"));

// console.log(ar1.slice(1,2));
// console.log(ar1.slice(-2));
// console.log(a.slice(-3,-1));

// ar1.splice(1,0,"n1","n2","n3");
// ar2.splice(1,1,"n3","n4");
// ar3.splice(-1,1,"n5");
// console.log(ar1);
// console.log(ar2);
// ar3.splice(1,1);
// console.log(ar3);

// a=12;
// let b=Array.isArray(a);
// console.log(b);

// let b = a.indexOf("neetu");
// let b = a.indexOf("neetu",3);
// let b = a.indexOf("neetuiu");

// b = a.lastIndexOf("neetu",3);
// console.log(b);

// b = a.includes("meetu");
// b = a.includes("meetu34");
// console.log(b);

// a = [3,12,14,18,19,20];
// b = a.some(checkAdult);
// console.log(b);
// function checkAdult(age){
//   return age >= 18;
// }

// a = [13,18,19,20];
// a = [18,19];
// b = a.every(checkAdult);
// console.log(b);
// function checkAdult(age){
//   return age >= 18;
// }

// let a12 = [12, 14, 20, 12, 18];
// let b12 = a12.find(check);
// console.log(b1);
// function check(age) {
//   return age >= 12;
// }


// let b1 = a12.findIndex(check);
// console.log(b1);
// function check(age){
//   return age >=12;
// }

// let b1 = a1.filter(checkAge);
// console.log(b1);
// function checkAge(age){
//   return age >=18;
// }

let arrr = ["hh", "kk", "ll", "oo"];

// console.log(arrr.valueOf());

// arrr.fill("h");
// arrr.fill("h",1);
arrr.fill("h", 1, 3);
console.log(arrr);






