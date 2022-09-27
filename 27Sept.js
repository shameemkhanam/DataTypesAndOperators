// document.write("Date : 27/09/2022");
//=====================================================================================

//1. Write a method that creates a new array with given values:
// Expected Result: (3, 'a') => ['a', 'a', 'a']

// const fillArr = (arraySize, value) => {
//   return new Array(arraySize).fill(value);
// }
// console.log(fillArr(4,"b"));

//=====================================================================================

//2. Write a method that reverts input array
//   * Expected Result: [1, 2, 3] => [3, 2, 1]

// const reverseArr = (array) => {
//   let rArr = [];
//   for( let i=array.length-1; i>=0; i--){
//     rArr.push(array[i]);
//   }
//   return rArr;
// }
// console.log(reverseArr([1,2,4]));

//=====================================================================================

// 3.  Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
// * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// const compact = (array) => {
//   return array.filter((e) => e);
// }
// const data = [0,null,undefined,1,2,3];
// console.log(data);
// console.log(compact(data));

//=====================================================================================

// 4. Write a method that returns an object composed of key-value pairs.
//   * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
// const fromPairs = (array) => array.reduce((acc, value) => {
//   if (Array.isArray(value)) {
//     acc[value[0]] = value[1];
//   }
//   return acc;
// }, {});

// or

// let arr = [['a', 1], ['b', 2]];
// console.log(Object.fromEntries(arr));

//converting obj into array:
// let obj = {
//   name : "sahhana",
//   age :34
// };
// console.log(Object.entries(obj));

//=====================================================================================

//5. Write a method that returns an array without listed values
// * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

// const without = (array, ...args) => {
//   let filteredArr = [...array];
//   for (let i = 0; i < args.length; i++) {
//     filteredArr = filteredArr.filter((el) => el != args[i]);
//   }
//   return filteredArr;
// };
// console.log(without([1,2,3,4,5,6],1,2));

//=====================================================================================

//6. Write a method that returns a duplicate-free array
// * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]

// const unique = (array) => {
//   let newArr = [];
//   for ( let i of array){
//     if( newArr.indexOf(i) == -1){
//       newArr.push(i);
//     }
//   }
//   return newArr;
// };
// const data = [1, 2, 3, 1, 2,4,6,4,1,2,];
// console.log(unique(data));

//or
// const unique1 = (array) => {
//   let newArr = [...new Set(array)];
//   return newArr;
// }
// console.log(unique1(data));
//or

// const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);
// console.log(unique2(data));

//=====================================================================================

//7. Write a method that makes a shallow compare of two arrays and returns true if they are identical.
// * Expected Result: ([1, 2, 3], [1, 2, 3]) => true

// const isEqual = (firstArray,secArray) => {
//   let res = firstArray.length === secArray.length && firstArray.every((e) => secArray.includes(e));
//   return res;
// };
// let a1=[1,2,3];
// let a2=[1,2,3,5];
// console.log(isEqual(a1,a2));

//=====================================================================================

//8. Write a function that turns a deep array into a plain array. Please, do not use array.flat(); to make this task more enjoyable.
// let arr = [1, 2, [3, 4, [5]]];
// console.log(arr.flat(3));
//or
// console.log(arr.flat(Infinity));

//or
// const flatten = (array) => {
//   let flattenedArr = array.reduce((acc,item) => {
//     if(Array.isArray(item)){
//       acc = acc.concat(flatten(item));
//     }
//     else{
//       acc.push(item);
//     }
//     return acc;
//   },[]);
//   return flattenedArr;
// };
// console.log(flatten(arr));

//=====================================================================================
// 9. finding avg of array elements:
// let arr = [1,2,3,4];
// let avg = arr.reduce((acc, curitem, index, array) => {
//   let total = acc + curitem;
//   if(index === array.length-1){
//     total = total/array.length;
//   }
//   return total;
// });
// console.log(avg);

//=====================================================================================


