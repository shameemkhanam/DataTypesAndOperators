let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

// for(let i=0; i<cities.length;i++){
//   if(cities[i].population >3000000){
//     console.log(`${cities[i].name} : ${cities[i].population}`);
//   }
// }

// cities.forEach((ele) => {
//   if(ele.population > 3000000){
//     console.log(ele.name);
//   }
// })

// for( let i of cities){
//   if(i.population > 3000000) {
//     console.log(i.name);
//   }
// }

// for (let i in cities){
//    if(cities[i].population > 3000000)
//    console.log(cities[i].name);
// };

// cities.filter((city) => {
//   if (city.population > 3000000)
//    console.log(city.name);
// });

// const v = cities.filter((city) => {
//   if (city.population > 3000000) return city.name;
// });
// console.log(v);

cities.map((pop) => {
  if (pop.population > 3000000) console.log(pop.name);
});
