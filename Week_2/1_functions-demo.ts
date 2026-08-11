// Demo of functions in typescript.
function myDetails(name: string, age: number): string {
  return "My name is " + name + " and I am " + age + " years old.";
}

function myFather(name: string): string {
  return "My father is " + name;
}

function myMother(name: string): string {
  return "My mother is " + name;
}

console.log(myDetails("Brahmani", 18));
console.log(myFather("Krishna Reddy"));
console.log(myMother("Madhavi"));
