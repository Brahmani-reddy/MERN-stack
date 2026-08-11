// Demo of arrow functions
const shootWeb = (target: string): string => {
  return "Spider-Man shoots a web at " + target;
};

const savePerson = (name: string): string => {
  return "Spider-Man saved " + name;
};

const punchVillain = (villain: string): void => {
  console.log("Spider-Man punches " + villain);
};

console.log(shootWeb("Green Goblin"));
console.log(savePerson("Peter"));
punchVillain("Venom");
