let cities = [
  { name: "city1", population: 20001 },
  { name: "city2", population: 13002 },
  { name: "city3", population: 45003 },
  { name: "city4", population: 70004 },
  { name: "city5", population: 80005 },
];

// forEach((item,index,array)=>{}) //returns undefined...not an array

// cities.forEach((ele) => {
//   if (ele.population > 25000) console.log(ele.name);
// });

// cities.forEach((item,indx,cityArr) => {
//   if(cityArr[indx].population > 25000)
//   console.log(cityArr[indx].name);
// })

// for(let i=0; i<cities.length; i++){
//   if(cities[i].population > 25000)
//   console.log(cities[i]);
// }

//remove first odd no.-->
// let num = [3,2,4,6,8];
// let odd = num[0];
// num.forEach((item) => {
//   if(item == odd){
//     num.shift();
//   }
// });
// console.log(num);

// let students = [
//   {name : "abc", age:23},
//   {name : "def", age:22},
//   {name : "ghi", age:24},
// ];
// // students.forEach((stu,index,array) => {
// //   console.log(`${index} : ${stu.name}`);
// // });

// students.forEach((ele) => {
//   if(ele.age >22) console.log(ele.name);
// }) 

//Array.from();
// let name1 = "true";
// let output = Array.from(name1);
// console.log(output);

//for..of in array
// for(let i of cities){
//   console.log(i);   //gives values
// }

//for...in
// for(let i in cities){
//   console.log(i, cities[i]); // gives keys, in arrays the keys are indices
//   // console.log(cities[i]);
// }

// for (let i of cities){
//   if(i.population > 25000)
//   console.log(i.name);
// }

//==================================================================================

let arr = [23, 21, 24, 12, 16];

// let res = arr.filter((a) => {
//   return a>20;
// });
// console.log(arr,res);

// let res = arr.map((a) => {
//   return a + 10;
// });
// console.log(arr,res);

// arr.map((e) => {
//   if(e > 20)
//   console.log(e);
// })
let arr2=[1,3,5,6];
let res = arr2.reduce((acc,cur) => {
  return acc + cur;
});
console.log(res);