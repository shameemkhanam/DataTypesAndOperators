// let obj1 = {
//   name: "sana",
//   age: 34
// };
// let obj2 = { ...obj1 };


// console.log(obj2);
//======

// const circle = {
//   radius: 10,
//   style: {
//     color: 'blue'
//   }
// };

// const clonedCircle = {
//   ...circle
// };
// clonedCircle.style.color = 'red';

// console.log(clonedCircle);

//===========

// merging two objects:

const circle = {
  radius: 12,
  color: "red"
};

const background = {
  backgroundColor: "blue"
};

const mergedObj = {
  ...circle,
  ...background
};

console.log(mergedObj);