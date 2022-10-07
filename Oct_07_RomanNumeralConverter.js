//Convert to roman numerals:

// function convertToRoman(num) {
//   const lookupTable = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };

//   let accumulator = "";

//   for(let key in lookupTable){
//     let numValue = lookupTable[key];

//     while(numValue <= num){
//       num = num - numValue;
//       accumulator = accumulator + key;
//     }
//   }

//   return accumulator;
// }

// let r = convertToRoman(2658);
// console.log(r);

//---------------------------------------------------------
let num = 3999;

const lookupTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

let acc = "";

for(let key in lookupTable){
  // console.log(key, lookupTable[key]);
  let numVal = lookupTable[key];

  while(numVal <= num){
    num = num - numVal;
    acc = acc + key;
  }
}
console.log(`Roman Numeral = ${acc}`);
