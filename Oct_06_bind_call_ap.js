// document.write("06/10/2022");
//========================================================================================

//CALL METHOD:
// let obj1 = {
//   name : "sana",
//   age : 22,
//   getName : function(){
//     console.log(`student name is ${this.name}`);
//   }
// };
// // obj1.getName();

// let obj2 = {
//   name : "tina",
//   age : 23
// };
// obj1.getName.call(obj2);
//-------------------------------------------

// let obj1 = {
//   name : "sana",
//   nameWithRating : function(rating,support){
//     console.log(`${this.name} has ${rating} star rating.Plz, ${support} her.`);
//   }
// };
// // obj1.nameWithRating(4,"like");

// let obj2 = {
//   name : "tina"
// };
// obj1.nameWithRating.call(obj2,5,"subscribe");
//========================================================================================
// APPLY() METHOD:

//same as call() method: call() takes args seperately , apply() method takes array of args:

// let obj1 = {
//   name: "sana",
//   nameWithRating: function (rating, support) {
//     console.log(`${this.name} has ${rating} star rating.Plz, ${support} her.`);
//   }
// };
// // obj1.nameWithRating(4,"like");

// let obj2 = {
//   name: "tina",
// };

// obj1.nameWithRating.apply(obj2,[5,"subscribe"]);
//----------------------------------------------------

// console.log(Math.max(1,2,40,5));  //output:40

// //but for finding max of all elements from an array:
// //we can use apply method:

// let maxArr = Math.max.apply(null, [1,2,40,5]);
// console.log(maxArr);             //output:40

//========================================================================================
//BIND() METHOD :
// const obj1 = {
//   name : "sana",
//   age : 34,
//   getData : function(){
//     console.log(`student name is ${this.name} and age is ${this.age}`);
//   }
// };
// const obj2 = {
//   name : 'faaiz',
//   age : 4
// };

// // obj1.getData();

// // let obj1Method = obj1.getData();
// // obj1Method();                      //error

// let func = obj1.getData.bind(obj2);
// func();
// //-------------------------------

// const obj1 = {
//   name: "fahaad",
//   age: 1,
// };

// const obj2 = {
//   name: "faaiz",
//   age: 04,
// };

// const obj3 = {
//   name: "farhat",
//   age: 10,
// };

// function getData(){
//   console.log(`The student name is ${this.name}, and age is ${this.age}.`);
// }

// // obj1.getData(); // error
// let func1 = getData.bind(obj1);
// func1();

// let func2 = getData.bind(obj2);
// func2();

// let func3 = getData.bind(obj3);
// func3();
//-----------------------------------
// function getData(rating) {
//   console.log(`The student name is ${this.name}, and age is ${this.age}.The rating is ${rating}.`);
// }

// let func1 = getData.bind(obj1);
// func1(5);

//========================================================================================

function sumFibs(num) {
  let prevnum=0;
  let curnum=1;
  let result = 0;
  while(curnum<=num){
    if(curnum%2!==0){
      result +=curnum;
    }
    curnum = curnum+prevnum;
    prevnum = curnum-prevnum;
  }
  return result;
}

console.log(sumFibs(4));