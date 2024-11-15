

class Person {
  constructor(props) {
    this.props = props;
  }
  greet(name, favColor) {
    console.log(`Hello ${name}, my name is ${this.props.name},and I love ${favColor}`);
  }
}

const person = new Person({ name: 'John' });

const greet = Person.prototype.greet;

greet.apply(person, ['Mike', 'blue']);