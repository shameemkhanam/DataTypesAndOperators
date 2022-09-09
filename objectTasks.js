// TASK 1:
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

//TASK 2:
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// let user1 = {};
// function isEmpty(obj){
//   for(const key in obj){
//     //if loop started, means there is property
//     return false;
//   }
//   return true;
// }
// user1.name = "shameem";
// console.log(isEmpty(user1));

//TASK 3:
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for( let key in salaries){
//   sum += salaries[key];
// }
// console.log(sum);

//TASK 4:
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 20,
  height: 40,
  title: "my menu",
};
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
let res = multiplyNumeric(menu);
console.log(res);
