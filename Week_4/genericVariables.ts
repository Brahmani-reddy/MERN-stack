class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Generic variable
let studentName: string = "Brahmani";

// Generic function
function showValue<T>(value: T): T {
  return value;
}
console.log(showValue(studentName));
console.log(showValue(18));

// Generic constraint
function showName<T extends { name: string }>(student: T): string {
  return student.name;
}
let student = new Student("Brahmani");
console.log(showName(student));
