let user = {
  fname : "shameem",
  lname : "khan",
  role : "Admin",
  loginCount : 34,
  googleSignedIn : true
};

// console.table(user);
// console.log(user["loginCount"]);

// console.log(user.role);
// user.role = "manager";
// console.log(user.role);

// console.table(user);

// let Phone = {
//   brand : "Apple",
//   modelName : "iPhone",
//   color : "silver",
//   os : "iOS14",
//   technology : "GSM"
// };

// console.table(Phone);

//empty object
// let empObj = new Object(); OR
// let empObj = {};
// console.log(empObj);

// user.age = 23;
// console.log(user);
// delete user.age;
// console.log(user);

// user["likes birds"] = true;
// console.log(user);

let user2 = {
  fname : "shameem",
  lname : "khan",
  role : "Admin",
  loginCount : 34,
  googleSignedIn : true,
  courseList : [],
  buyCourse : function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount : function () {
    return `${this.fname} has ${this.courseList.length} courses`;
  },
  info : function(){
    return `name : ${this.fname} ${this.lname},
            Role : ${this.role},
            Login count : ${this.loginCount},
            Google SignedIn : ${this.googleSignedIn},
            no. of courses : ${this.courseList.length}
    `;
  }
};
// console.log(user2);
// user2.buyCourse("React JS");
// user2.buyCourse("Node JS");
// // console.log(user2.getCourseCount());
// console.log(user2.info());

// console.log("fname" in user2);// "in operator"

// let arr = [34,53,34];
// for(const i of arr)
// {
//   console.log(i);
// }

//for-in for objects
for(const keys in user){
  console.log(`key: ${keys} and value : ${user2[keys]}`);
}


