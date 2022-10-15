const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// console.log(characters.length);

// MAP--->
// 1.Get an array of all names
// 2.Get an array of all heights
// 3.Get an array of objects with just name and height properties
// 4.Get an array of all first names

// 1.Get an array of all names:
// let names = characters.map((item) => item.name);
// console.log(names);

// 2.Get an array of all heights:
// let heights = characters.map((item) => item.height);
// console.log(heights);

// 3.Get an array of objects with just name and height properties:
// let nameHeight = characters.map((item) => {
//   return {Name : item.name, Height : item.height};
// });
// console.log(nameHeight);

// 4.Get an array of all first names:
// let fnames = characters.map((item) => {
//   itemA = item.name.split(" ");
//   return itemA[0];
  
// });
// console.log(fnames);
//-------------------------------------------------------

// REDUCE-->
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)

// Get the total mass of all characters:
// let totalMass = characters.reduce((acc, curitem) => {
//   return acc + Number(curitem.mass);
// },0);
// console.log(totalMass);

// Get the total height of all characters:
// let totalHeight = characters.reduce((acc, curitem) => {
//   return acc + Number(curitem.height);
// }, 0);
// console.log(totalHeight);

// Get the total number of characters in all the character names:
// let charsInNames = characters.reduce((acc, curitem) => {
//   return acc + curitem.name.length;
// }, 0);
// console.log(charsInNames);

// Get the total number of characters by eye color (hint. a map of eye color to count):
// let charsByEyeColor = characters.reduce((acc, curitem) => {
//   if(acc[curitem.eye_color]){
//     acc[curitem.eye_color]++;
//   }
//   else{
//     acc[curitem.eye_color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charsByEyeColor);
//-------------------------------------------------------
// FILTER-->

// Get characters with mass greater than 100:
// let charsMass = characters.filter((item) => Number(item.mass) > 100);
// console.log(charsMass);

// Get characters with height less than 200:
// let charsHeight = characters.filter((item) => Number(item.height < 200));
// console.log(charsHeight);

// Get all male characters:
// let charsMale = characters.filter((item) => item.gender == "male");
// console.log(charsMale);

// Get all female characters:
// let charsFemale = characters.filter((item) => item.gender == "female");
// console.log(charsFemale);

//-------------------------------------------------------

// SORT-->

// Sort by name:
// let sortByName = characters.sort((a,b) => {
//   return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;  //ascending order
// });
// console.log(sortByName);

// Sort by mass:
// let sortByMass = characters.sort((a,b) => {
//   return Number(a.mass) - Number(b.mass);
// });
// console.log(sortByMass);

// Sort by height:

// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

