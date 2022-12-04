// document.write("03/10/2022");

//=========================================================================================
// function init(){
//   let fname = "hitesh";
//   function sayFname(){
//     console.log(fname);
//   }
//   sayFname();
// }
// init();
// console.log(fname);   //error: fname not defined
//---------------------------------
// function init(){
//   let fname = "hitesh";
//   function sayFname(){
//     console.log(fname);
//   }
//   return sayFname;
// }
// let value = init();
// value();
// console.dir(value);

//=========================================================================================
// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`Sum of a and b is : ${sum}`);
//   }
//   return innerFun;
// };
// let store = outerFun(20);
// // store();
// console.dir(store);

//=========================================================================================

let a = 10;
const outer = (b) => {
  let c = 30;
  const inner = () => {
    let sum = a + b + c;
    console.log(`sum : ${sum}`);
  }
  return inner;
};
let store = outer(20);
console.dir(store);
store();