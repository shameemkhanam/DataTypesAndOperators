// function upperFirstChar(str){
//   let a = str[0].toUpperCase();
//   let b = str.slice(1);
//   return a+b;
// }
// console.log(upperFirstChar("sdkfjsd"));
//=================================================================

// function isNumPrime(num){
//   let isPrime = true;

//   if(num == 1 || num == 0){
//     isPrime = false;
//   }
//   for(let i=2; i<num; i++){
//     if(num % i === 0){
//       isPrime = false;
//     }
//   }
//   if(isPrime == true) return "Prime";
//   else return "Not a prime";
// }
// console.log(isNumPrime(02));
//=================================================================

// const outer = (a) => {
//   let b = 10;
//   const inner = () => {
//     let sum = a + b;
//     console.log(`sum of ${a} and ${b} is ${sum}`);
//   }
//   return inner;
// }
// let r = outer(20)
//=================================================================

//fibonacci series:
// function fib(limit) {
//   let prevnum = 0;
//   let curnum = 1;
//   let result = 1;
//   console.log(prevnum);
//   console.log(curnum);
//   for (let i = 2; i < limit; i++) {
//     result = prevnum + curnum;
//     console.log(result);
//     prevnum = curnum;
//     curnum = result;
//   }
// }
// fib(8);
//-------------------------------------
// let fib = [0, 1];
// const fibonacci = (num) => {
//   for (let i = 2; i < num; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// };
// console.log(fibonacci(10));
//=================================================================

// function fact(num){
//   let fact = 1;
//   if(num == 1 || num == 0){
//     return 1;
//   }
//   else{
//     for(let i = num; i>1; i--){
//       fact = fact * i;
//     }
//   }
//   return fact;
// }
// console.log(fact(4));
//=================================================================

// function alternateArrEle(arr){
//   for(let i in arr){
//     if(i % 2 == 0){
//       console.log(arr[i]);
//     }
//   }
// }
// alternateArrEle([1,2,3,4,5,6,7,8,9,10]); 
//=================================================================
// let newArr=[];
// function revArr(arr){
//   for(let i=arr.length-1; i>=0; i--){
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }
// let r = revArr([10,20,30]);
// console.log(r);
//---------------------------------
// let a = [1,2,3,4,5];
// let b = a.reverse();
// console.log(a);
// console.log(b);
//=================================================================

// function delDuplicates(arr){
//   let newArr = [];
//   for(let i in arr){
//     if(newArr.indexOf(arr[i]) == -1){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// let r = delDuplicates([1,1,2,2,2,40,3,3,4,4]);
// console.log(r);
//=================================================================

// function palindrome(str){
//   let polishedStr = str.toLowerCase();
//   let reversedStr = polishedStr.split("").reverse().join("");
//   console.log(polishedStr, reversedStr);
//   if(polishedStr === reversedStr){
//     console.log("palindrome");
//   }
//   else{
//     console.log("not a palindorome");
//   }
// }
// palindrome("nitin");
//---------------------------------------------------------

// const palOfSentence = (str) => {
//   let polishedStr = str.toLowerCase().replace(/\W+|_/g,"");
//   let revStr = polishedStr.split("").reverse().join("");
//   console.log(polishedStr, revStr);
//   return (polishedStr === revStr) ? "palindrome" : "not a palindrome";
// };
// console.log(palOfSentence("A man, a plan, a canal. Panama"));
//=================================================================

// Input: S = i.like.javascript.very.much
// Output: much.very.javascript.like.i

// let str = "i.like.javascript.very.much";
// let a = str.split(".").reverse().join(".");
// console.log(a);
//=================================================================

// Input: str = "pace"
//   Output: "peca”

// let str = "shameem";
// let arr = str.split("").sort((a,b) => a===b ? 0 : a<b ? 1 : -1).join("");
// console.log(arr);
//=================================================================

