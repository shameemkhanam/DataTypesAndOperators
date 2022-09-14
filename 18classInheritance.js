class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed){
    this.speed = speed;
    console.log(`${this.name} runs with speed of ${this.speed}.`);
  }
  stop(){
    this.speed = 0;
    console.log(`${this.name} stands still..`);
  }
}

const myAnimal = new Animal("my animal");
// myAnimal.run(20);
// myAnimal.stop();
// console.log(myAnimal);

class Rabbit extends Animal{
  constructor(name,earlength){
    super(name);
    this.earlength = earlength;
  }

  hide(){
    console.log(`${this.name} hides.`);
  }
}

// let rabbit = new Rabbit("my rabbit");
// rabbit.run(23);
// rabbit.hide();
// rabbit.stop();
// console.table(rabbit);

let rabbit2 = new Rabbit("new rabbit",10);
rabbit2.run(200);
console.table(rabbit2);
