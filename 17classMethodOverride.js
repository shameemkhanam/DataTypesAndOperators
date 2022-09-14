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

class Rabbit extends Animal{
  constructor(name,earlength){
    super(name);
    this.earlength = earlength;
  }

  hide(){
    console.log(`${this.name} hides.`);
  }

  stop(){
    super.stop();
    this.hide();
  }
}

const myRabbit = new Rabbit("my rabit", 2);
myRabbit.run(5);
myRabbit.stop();
console.table(myRabbit);