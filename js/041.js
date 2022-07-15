//Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number


class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
    
  }