


class Person {
  props = {
    name: 'John',
    age: 30
  }
  greet() {
    console.log(`Hello, my name is ${this.props.name}`);
  }
}

const person = new Person();
const greet = Person.prototype.greet;

const boundGreet = greet.bind(this);

boundGreet();