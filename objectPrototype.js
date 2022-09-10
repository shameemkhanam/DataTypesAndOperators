// var User = function(firstName, courseCount){
//   this.firstName = firstName;
//   this.courseCount = courseCount;
//   this.getCouseCount = function(){
//     console.log(`course count is : ${this.courseCount}`);
//   };
// };

// var hema = new User("hema",3);
// // console.log(hema);
// hema.getCouseCount();

// var rima = new User("rima",2);
// // console.log(rima);
// rima.getCouseCount();
//------------------------------------------------------------

// to inject extra methods or data into the User prototype---->
var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCouseCount = function(){
      console.log(`course count is : ${this.courseCount}`);
    };
  };

  User.prototype.getFirstName = function(){
    console.log(`the first name is : ${this.firstName}`);
  };

  var hema = new User("hema",3);
  // hema.getFirstName();
  if(hema.hasOwnProperty("firstName")){
    hema.getFirstName();
  }

  // var rima = new User("rima",2);
  // rima.getFirstName();


// console.log(typeof User);