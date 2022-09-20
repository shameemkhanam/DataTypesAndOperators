let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];

// for(let i=0; i<cities.length;i++){
//   if(cities[i].population >3000000){
//     console.log(`${cities[i].name} : ${cities[i].population}`);
//   }
// }

cities.filter((city) => {
  if(city.population > 3000000)
  console.log( city.name);
});
// console.log(output);

