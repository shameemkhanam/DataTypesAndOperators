//import User from "./classes.js";

const User = require("./classes.js");

const hema = new User("hema","hema@gmail.com");

hema.enrollCourse("Angular JS");
hema.enrollCourse("React JS");
console.log(hema.getInfo());
// console.log(hema.getInfo().Email);
console.log(hema.getCourseList());

let courses = hema.getCourseList();
courses.forEach((c,indx)=>{
  console.log(`${indx}: ${c}`);
  
});
console.log(hema.getNoOfCourses());

// for(let key of courses){
//   console.log(key);
// };