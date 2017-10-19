var students = [
  { name: "Bob", age: 17 },    // 0
  { name: "Susy", age: 18 },   // 1
  { name: "Ted", age: 18 },    // 2
  { name: "Sarah", age: 20 },  // 3
  { name: "Bill", age: 19 }    // 4
];

console.log( students[2] );
console.log( students[2].name.toUpperCase() );
console.log( students[2].age >= 21 );


students.push(
  { name: 'Jose', age: 17 }
);

console.log( students[5] );
console.log( students[5].name );
console.log( students[5].age );
