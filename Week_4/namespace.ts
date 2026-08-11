namespace MyInfo {
  export class Student {
    readonly name: string;
    age: number;
    static college: string = "SVECW";
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): void {
      console.log("My name is " + this.name);
      console.log("I am " + this.age + " years old");
      console.log("College: " + Student.college);
    }
  }

}

let student = new MyInfo.Student("Brahmani", 18);
student.introduce();
