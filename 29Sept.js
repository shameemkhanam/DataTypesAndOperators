// document.write("Date : 29/09/2022");
//=============================================================================================
//adding an element to an array using concat:

// function nonMutatingPush(original, newItem) {
//   // Only change code below this line
// let newArr = original.concat(newItem);
// return newArr;
//   // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4,5,6];
// console.log(nonMutatingPush(first, second));

//=============================================================================================
//filter out the positive integers from given array: 

// let arr = [ -3, 4.8, 5, 3, -3.2 ];
// let r = arr.filter((n) => n>0 && Number.isInteger(n));
// console.log(r);

//=============================================================================================
//sort the array alphabetically:

// let arr = ["s","h","a","m"];
// let r = arr.sort();
// console.log(arr);
// console.log(r);

// //reverseAlphabetically:
// let r2 = arr.sort((a,b) => a===b ? 0 : a<b ? 1 : -1);
// console.log(r2); 

//=============================================================================================
// let str1 = "I-like-Star-Wars";
// let r1 = str1.split(/\W/).join(" ");    //   /\W/ matches all nonwords
// console.log(r1);

// let str2 = "A Mind Needs Books Like A Sword Needs A Whetstone";
// let r2 = str2.toLowerCase().split(" ").join("-");
// console.log(r2);

//=============================================================================================
//Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// let arr = [1,10];
// let max = Math.max(...arr);
// // console.log(max);
// let min = Math.min(...arr);
// // console.log(min);

// let sumOfRangeOfNosBetween = 0;
// for(let i = min; i<=max; i++){
//   sumOfRangeOfNosBetween +=i;
// }

// console.log(sumOfRangeOfNosBetween);

//=============================================================================================

//Find the symmetric difference of the two arrays:
let arr1 = ["diorite","diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
// let arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

// let concatArr = arr1.concat(arr2);
// // console.log(concatArr);

// let diffArr = concatArr.filter((ele) => !arr1.includes(ele) || !arr2.includes(ele));

// console.log(diffArr);


//=============================================================================================






