// var arr = [3, 5, 6, 8, 4, 2];

// arr.reduce(function (accumulate, value, index, array) {
//   console.log(accumulate, value, index, array);
//   return accumulate + value;
// }, 10);

// var flatted = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ].reduce(function (a, b) {
//   console.log(a, b);

//   return a.concat(b);
// });

// var names = ["Mika", "Calean", "Kazuma", "Willian", "Mika"];

// var countName = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countName);

// var handsomeBoy = [
//   { name: "Mika", age: 22 },
//   { name: "Kazuma", age: 21 },
//   { name: "Calean", age: 20 },
//   { name: "Willian", age: 21 },
// ];
// function groupBy(objectArray, property) {
//   return objectArray.reduce(function (acc, obj) {
//     var key = obj[property];
//     if (!acc[key]) acc[key] = [];
//     acc[key].push(obj);
//     return acc;
//   }, {});
// }
// var groupPeople = groupBy(handsomeBoy, "age");
// console.log(groupPeople);

// var friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and Juliet"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     books: ["The Lord of the Rings", "The Shining"],
//     age: 18,
//   },
// ];

// // allbooks - list which will contain all friends' books +
// // additional list contained in initialValue
// var allbooks = friends.reduce(
//   function (prev, curr) {
//     console.log(prev);

//     return [...prev, ...curr.books];
//   },
//   ["Alphabet"]
// );
// console.log(allbooks);

// Building-blocks to use for composition
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Function composition enabling pipe functionality

var pipe = function (...functions) {
  return function (input) {
    return functions.reduce(function (acc, fn) {
      return fn(acc), input;
    });
  };
};

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)); // 36
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240
