function addition(a: number, b: number): number{
  return a + b;
}
let num: number = addition(222, 99);
// addition(222, "Ninety nine ") gives us error. Because we told compiler that argument of type number but passing string.
console.log(num);
