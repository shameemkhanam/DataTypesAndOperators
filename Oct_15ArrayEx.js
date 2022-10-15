//length of Array without length property:

// let a = [1,2,3,4,5];
// count = 0;
// for(let i in a){
//   count++;
// }
// console.log(count);
//=======================================

//sum and average:

// let a = [1,2,3,4,5];
// let sum = a.reduce((acc,curitem) => acc + curitem);

// let avg = a.reduce((acc, curitem) => acc + curitem) / a.length;
// console.log(sum);
// console.log(avg);
//=======================================

//Even and odd position array elements:

// let a = [1,2,3,4,5,6];
// let evenPos = a.filter((ele,index) => {
//   if(index % 2 == 0){
//     return ele;
//   }
// });
// console.log(evenPos);

// let oddPos = a.filter((ele, index) => {
//   if(index % 2 !== 0){
//     return ele;
//   }
// });
// console.log(oddPos);
//=======================================

//Reverse array without using reverse():

// let arr = [1,2,3,4,5,6];
// let revArr =[];
// for( let i=arr.length-1; i>=0; i--){
//   revArr.push(arr[i]);
// }
// console.log(revArr);
//=======================================

//Remove an specific element from an array:

// let a = [1,2,3,4,5];
// let r = a.splice(2,1);
// console.log(a);
//--------------------------
// const removeEleWithIndx = (arr,indxValToRemove) => {
//   arr.splice(indxValToRemove , 1);
//   return arr;
// };
// let res = removeEleWithIndx([10,20,30], 1);
// console.log(res);
//---------------------------
// const removeGivenVal = (arr, valToRemove) => {
//   if(!valToRemove){
//     return arr;
//   }
//   else{
//   let indexOfVal = arr.indexOf(valToRemove);
//   arr.splice(indexOfVal,1);
//   return arr;
//   }
// };
// // let res = removeGivenVal([10,20,30]);
// let res = removeGivenVal([10,20,30] , 20);
// console.log(res);
//-----------------------------

//without using any built in methods:
// let arr = [1,2,3,4,5];
// let srchVal = 2;
// let outputArr = [];
// let count = 0;
// for(let i=0; i<arr.length; i++){
//   if(arr[i] === srchVal && count === 0){
//     count++;
//   }
//   else{
//     outputArr.push(arr[i]);
//   }
// }
// console.log(count);

//-----------------------------

// let a = [1,2,3,4,5];
// let val = 2;
// let r = a.filter((item) => item!=val);
// console.log(r);
//=======================================

//Count no of duplicate elements in the array:
// let arr = [1,2,1,2,3,4,4,5,5];

// let count = 0;
// for(let i=0; i<arr.length; i++){
//   for(let j=i+1; j<arr.length; j++){
//     if(arr[i] === arr[j]){
//       count++;
//       break;
//     }
//   }
// }
// console.log(count);
//=======================================

//Remove duplicate elements from the array:

// let arr = [1, 2, 1, 2, 3, 4, 4, 5, 5,,5,6];
// let r = [...new Set(arr)];
// console.log(r);  //or

// let r = Array.from(new Set(arr));
// console.log(r);  //or

// let r = arr.filter((val, index) => {
//   return arr.indexOf(val) === index;
// });
// console.log(r);  //or

// let uniqueArr = [];
// arr.forEach((val) => {
//   if(!uniqueArr.includes(val)){
//     uniqueArr.push(val);
//   }
// });
// console.log(uniqueArr);  //or

// arr.forEach((val) => {
//   if(uniqueArr.indexOf(val) == -1){
//     uniqueArr.push(val);
//   }
// });
// console.log(uniqueArr);  //or

// let result = arr.reduce((acc,curitem) => {
//   if(!acc.includes(curitem)){
//     acc.push(curitem);
//   }
//   return acc;
// },[]);
// console.log(result);
//------------------------------

//=======================================

//Multiply each array element with array length:
// let arr = [1,2,3,4,5];

// let r = arr.map((val) => val * arr.length);
// console.log(r);
//=======================================

//Return only numbers in an array:

// let arr = ["shama", 23, "Kalaburagi", 1989];
// let r = arr.filter((val) => typeof(val) === "number");
// console.log(r);
//=======================================
