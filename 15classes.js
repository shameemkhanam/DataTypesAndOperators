// there are 3 types of methods in classes:
// 1. constructor methods
// 2. prototype methods
// 3. static methods

// class student{
//   constructor(name,age){    //constructor method
//     this.studName = name;
//     this.studAge = age;
//     console.log("Constructor function called..");
//   }
//   getNameAndAge(){          //prototype method
//     // console.log(`Student name is "${this.studName}" and age is "${this.studAge}".`);
//     return( this.name );
//   }
//   static staticMethod(){    //static method
//     console.log("This is a Static method ..");
//   }
// }

// let student1 = new student("hema",20);
// // student1.getNameAndAge();
// let res = student1.getNameAndAge()
// console.log(res);

// let student2 = new student("reema",21);
// student2.getNameAndAge();

// student1.staticMethod();
// console.log(typeof student);

// student.staticMethod();       //static method is called with class name not with object

// console.log(typeof student1.getNameAndAge);  //function
//console.log(typeof student1);               //object
// console.log(typeof student.staticMethod);    //function

//=========================================================================

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  #courseList = []; //private vars ...start with "#", so it is not available outside

  getInfo() {
    return { Name: this.name, Email: this.email };
    // return (this.name);
  }

  enrollCourse(cname) {
    this.#courseList.push(cname);
  }

  getCourseList() {
    return this.#courseList;
  }

  getNoOfCourses() {
    return "Enrolled in " + this.#courseList.length + " courses";
  }

  static login() {
    //by using static ,v r telling that login() will not be inherited...its private method.
    return "You are logged in!";
  }
}

// export default User;
module.exports = User;

// const shameem = new User("shameem","shameem@gmail.com");
// shameem.enrollCourse("Node JS");
// shameem.enrollCourse("Angular JS");
// console.log(shameem.getInfo());
// console.log(shameem.getCourseList());
// console.log(shameem.courseList);

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subAdmin";
  }
}

const tom = new SubAdmin("s_name", "s_name@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
