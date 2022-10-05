// document.write("05/09/2022");
//======================================================================================
//HIGHER ORDER FUNCTIONS:

// const interviewQuestions = (name) => {
//   if(name == "vinod"){
//     return function(topic){
//       console.log(`hi ${name},ur topic is ${topic} `);
//     }
//   }
//   else if(name == "thapa"){
//     return function(topic){
//       console.log(`hi ${name},ur topic is ${topic} `);
//     }
//   }
//   else if(name == "thapatech"){
//     return function(topic){
//       console.log(`hi ${name},ur topic is ${topic} `);
//     }
//   }
//   else{
//     return function(topic){
//       console.log(`welcome to higher order functions `);
//     }
//   }
// };
// // interviewQuestions("vinod")("ui");
// //or
// let value = interviewQuestions("thapa");
// value("ux");

//======================================================================================
//IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSIONS: as soon as v refresh the page , it is executed.

// (function(){
//   console.log("hello shameem");
// })();

//or

// (function(){
//   let aName = "shameem";   //aName is not accessible from outside, it is  private now
//   console.log(`hello ${aName}`);
// })();

// or

// (function(aName){
//   console.log(`hello ${aName}`);
// })("shameem");

//======================================================================================
//ABOVE HIGHER ORDER EXAMPLE USING CLOSURE:

// const interviewQuestions = (name) => {
//   return function(topic){
//     if(name == "vinod"){
//       console.log(`hi ${name},ur topic is ${topic}`);
//     }
//     else if(name == "thapa"){
//       console.log(`hi ${name},ur topic is ${topic}`);
//     }
//     else if(name == "thapatech"){
//       console.log(`hi ${name},ur topic is ${topic}`);
//     }
//     else{
//       console.log(`welcome!!`);
//     }
//   }
// };
// let candidate1 = interviewQuestions("thapa");
// candidate1("JS");

//======================================================================================
