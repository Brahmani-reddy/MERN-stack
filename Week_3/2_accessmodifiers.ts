// Implementation of accesmodifiers 1-Private , 2- Public, 3-Protected.
class Student {
  public name: string;
  public age: number;
  private regNo: string;
  constructor(name: string, age: number, regNo: string) {
    this.name = name;
    this.age = age;
    this.regNo = regNo;
  }
  introduce(): void {
    console.log("My name is " + this.name);
    console.log("I am " + this.age + " years old");
    console.log("My registration number is " + this.regNo);
  }
}

let student = new Student("Brahmani", 18, "24B01A45B5");
student.introduce();
