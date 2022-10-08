// const alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// function rot13(str) {
//   let accumulator = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let isALetter = alphabet.includes(char);
//     if(isALetter === false){
//       accumulator += char;
//     }
//     else{
//       //else , rotate +13 or -13 , add to acc
//       const charIndex = alphabet.findIndex((c) => c ===char);

//       accumulator = accumulator + (alphabet[charIndex + 13] || alphabet[charIndex - 13]);
//     }
//   }
//   return accumulator;
// }

// console.log(rot13("SERR PBQR PNZC"));

//------------------------------------------------------------------------

// let givenStr = "SERR CVMMN!";

// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let a = Array.from(alphabet);
// // console.log(a);

// let acc = "";

// for(let i=0; i<givenStr.length; i++){
//   let isALetter = a.includes(givenStr[i]);

//   if(isALetter === false){
//     acc += givenStr[i];
//   }
//   else{
//     let charIndex = a.findIndex((c) => c === givenStr[i]);
//     acc += a[charIndex+13] || a[charIndex-13];
//   }
// }
// console.log(acc);

//----------------------------------------------------------------------

function rot13(str) {
  let acc = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let asciiCode = str[i].charCodeAt();
    // console.log(asciiCode);
    if (asciiCode >= 65 && asciiCode <= 77) {
      acc += String.fromCharCode(asciiCode + 13);
    } else if (asciiCode >= 78 && asciiCode <= 90) {
      acc += String.fromCharCode(asciiCode - 13);
    } else {
      acc += str[i];
    }
  }
  return acc;
}
// console.log(rot13("SERR PBQR PNZC &"));
//------------------------------------------------------------------

function rotThirteen(str) {
  let acc = "";

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let ascCode = str[i].charCodeAt();
    // console.log(ascCode);
    if (ascCode >= 65 && ascCode <= 77) {
      acc += String.fromCharCode(ascCode + 13);
    }
    else if(ascCode >= 78 && ascCode <= 90){
      acc += String.fromCharCode(ascCode - 13);
    }
    else{
      acc += str[i];
    }
  }
  return acc;
}
// console.log(rotThirteen("SERR PBQR PNZC"));
console.log(rotThirteen("SERR PBQR PNZC ! 1"));
