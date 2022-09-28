// document.write("Date : 28/09/2022");
//===========================================================================================
//1. Write a method that splits an array into parts of determined size
//  * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// const chunks = (array, size) => {
//   const chunkedArr = [];
//   let index = 0;
//   while(index < array.length){
//     chunkedArr.push(array.slice(index, index+size));
//     index += size;
//   }
//   return chunkedArr;
// };
// let data = [1, 2, 3, 4, 5];
// console.log(chunks(data,2));

//===========================================================================================
//2.  Write a method that creates an array of unique values that are included in all given arrays
//  * Expected Result: ([1, 2], [2, 3]) => [2]

const intersection = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  if (arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }
  return Array.from(new Set(result));
};

const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
console.log(intersection(arr3, arr4, arr5));
console.log(intersection(arr4, arr5));