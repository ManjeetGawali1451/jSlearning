
let person = {
  name: "Jenny",
  age: 22,
  isMarried: true,
  city: "Pune",
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entry = Object.entries(person); // [ [], [], [], [] ]
console.log(entry);
for (const element of entry) {
  console.log(element[0], element[1]);
}