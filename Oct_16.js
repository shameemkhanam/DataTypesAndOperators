// let obj1 ={
//   name1 : "shameem",
//   age : 34,
//   degree : "BE"
// };

// let obj2 = {...obj1 , degree : "BEd"};

// // console.log(obj1);
// // console.log(obj2);
// //---------------------------------------------------
// // let name1 = obj1.name1;
// // let age = obj1.age;
// // let degree = obj1.degree;

// let {name1, age, degree} = obj1;
// console.log(name1, age, degree);

//=================================================================================
const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: 45000
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: 35000
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: 38000
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: 40000
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: 41000
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: 32000
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: 38000
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: 46000
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: 42000
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: 34000
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: 49000
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: 39000
  }
];
// console.log(people.length);

// 1) What is the average income of all the people in the array?
// let avgIncome = people.reduce((acc, curitem) => {
//   return acc + curitem.salary;
// }, 0) / people.length;
// console.log(avgIncome);

// 2) Who are the people that are currently older than 30?
// let olderThan30 = people.filter((curitem) => {
//   return (new Date().getFullYear() - new Date(curitem.DOB).getFullYear()) > 30;
// });
// console.log(olderThan30.length);

// 3) Get a list of the people's full name (firstName and lastName).
// let fullName = people.map((person) => person.firstName + " " + person.lastName); //or
// let fullName = people.map((person) => `${person.firstName} ${person.lastName}`);
// console.log(fullName);

// 4) Get a list of people in the array ordered from youngest to oldest.
// let yToOldest = people.sort((personA, personB) => new Date(personB.DOB) - new Date(personA.DOB));
// console.log(yToOldest);

// 5) How many people are there in each department?
let res = people.reduce((acc, curitem) => {
  if(acc[curitem.department]){
    acc[curitem.department]++;
  }
  else{
    acc[curitem.department] = 1;
  }
  return acc;
}, {});
console.log(res);



