// Class implementation with constructors.
class SpiderMan {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  introduce(): string {
    return "I am " + this.name;
  }
}

let spiderman = new SpiderMan("Peter Parker");
console.log(spiderman.introduce());
