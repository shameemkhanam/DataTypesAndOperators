// console.log(this);          // this ==> window object
//---------------------------
// function init(){              // for regular functions also this ==> window object
//   console.log("hello world");
//   console.log(this);
// }
// init();
//------------------------------
const stu = {
  name : "shama",
  age : 23,
  getName : function(){
    console.log(this.name,this.age);
    console.log(this);
  }
};
stu.getName();