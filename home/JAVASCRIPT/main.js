//alert("hello amaka");

////// variables in javascript
console.log("my name is chris");

let name = "Emeka";
name = "obi";
console.log(name);

let score = 28;
score = 67;

/////const
const scoresheet = 23;
console.log(scoresheet);

////DATA TYPES

///////string type
const firstName = "caleb;";

const scoreline = 52;

const rating = 55.7;

///////// boolean type
const isAdmin = true;

const lastscore = null;

/////undefined

let price;

console.log(firstName);

console.log(scoreline);

console.log(rating);

console.log(isAdmin);

console.log(lastscore);

console.log(price);

console.log(typeof firstName);

console.log(typeof scoreline);

console.log(typeof rating);

console.log(typeof isAdmin);

console.log(typeof lastscore);

console.log(typeof price);

console.log("My name is" + firstName + "My score is" + scoreline);

////comcatination using template string

// console.log(`my name is ${firstName} and my score is ${scoreline},

const lastname = "john caleb lambourge";
console.log(lastname.length);
console.log(lastname.toUpperCase());
console.log(lastname.split());

const people = {
  firstName: "john",
  lastname: "jerry",
  age: 46,
  isPaid: false,
  figure: null,
};
console.log(people.firstName);
console.log(people.lastname);
console.log(people.age);
console.log(people.isPaid);
console.log(people.figure);

// AN OBJECTS IN JS
constpeople = {
  firstName: "obi",
  lastName: "peter",
};

// AN ARRAY IN JS

const info = ["henry", "Jay", 76, false, 89, true, null];
console.log(info);
console.log(info[2]);
console.log(info[5], info[4]);
// here we want to add another value to the info after null how do we do this
info[7] = "book";
// another way if we dont know of the number of the last value we do this
info.push("pen", "crayon", false, 12);
// to delet last item
info.pop();
// to make a value the first index in the array
info.unshift("basket");

// alernative ways of Arrays
const personinfo = new Array("henry", "Jay", 87, true, "kaka");
console.log(personinfo[4]);

const basicInfo = {
  firstName: "oluchi",
  lastname: "joy",
  age: 14,

  isCompleted: false,
  hobbies: ["music", "Football", "sporty"],
  address: {
    city: "oweeri",
    state: "Imo state",
    postalcode: 4600101,
  },
};
// cosnsole logging object
console.log(basicInfo);
console.log(basicInfo.firstName);
console.log(basicInfo.address.postalcode);
console.log(basicInfo.address.city);
// console logging array
console.log(basicInfo.hobbies[2]);
console.log(basicInfo.hobbies);

// Objects of an Array

const task = [
  {
    id: 1,
    tittle: "login",
    assignedTo: "prince",
    iscomplete: true,
  },
  {
    id: 2,
    tittle: "Navbar",
    assignedTo: "sam",
    iscomplete: true,
  },
  {
    id: 3,
    tittle: "Signup",
    assignedTo: "Favour",
    iscomplete: false,
  },
  {
    id: 4,
    tittle: "login",
    assignedTo: "oluchi",
    iscomplete: true,
  },
];
console.log(task);
console.log(task[3].assignedTo);
console.log(task[3]);
console.log(task[2].tittle);
console.log(task[0].id);
console.log(task[2].assignedTo);

// How to Loop  an object through an Array

///for loop
//while loop

for (let x = 0; x < 20; x++) {
  // x=0 assignment of varianble
  // x<=6 condition to be meet
  // x++ increasement of varaible
  console.log(x);
}
let xy = 1;
while (xy < 6) {
  console.log(xy);
  xy++;
}

for (items of task) {
  console.log(items.assignedTo);
  console.log(items.assignedTo, items.tittle, items.isCompleted);
}

// higher methods looping through array
//  forEach
// map
// filter

task.forEach(function (items) {
  console.log(items.tittle);
  console.log(items.iscomplete);
  console.log(items.assignedTo);
});

task.map(function (items) {
  console.log(items.iscomplete);
});
const prince = "hello";
const chris = prince;
const emeka = chris;

const displaytask = task.map(function (items) {
  return items.id;
});
console.log(displaytask);

/// filter method highest array method
const listtask = task.filter(function (items) {
  return items.iscomplete == true;
});
console.log(listtask);

// jSON DATA
//  it is short form of js Object notation
//  it is a light weight data inter change format used
//  for transmitting data between computers, espacially in web applications
//          it is widely used for transmitting data betwen webserver and clients
//  using API application programming interface
// DIFFERENCES BETWEEN STATIC AND Dynamic DATA
// 1.static : it is a fixed data set while a dynamic data is a periodically updated data set/JSON

//  CONDITIONS     IF STATEMENT , CONDITION RENDERING
const result = 35.0;
if (result > 35) {
  console.log("result is greater than 35");
} else if (result === 35) {
  console.log("result is equal to 35");
} else {
  console.log("result is less than 35");
}

const fruits = "apple";
const beverage = "milk";
const completed = true;

if (fruits === "apple" && beverage === "sugar") {
  console.log("the color is blue");
} else if ((completed === true && fruits === "apple") || beverage === "milo") {
  console.log("color is purple");
} else {
  console.log("color is empty");
}

//  // tenary operations
//  - subtraction13213wqsaa
//  + Addition
//  / division
//  * multiplication
//  = equals varaible value or the value of a variable
//  == will match with the value Of the variable
//  ===will match with the data type value
//  || or in javascript
//  && and in javascript(to match with the condition)
//  : else in javascript
//  ? then in javascript(used when condition is true or meet with)
//  []array in javascript
//  {}Object in javascript
//  () for arrow function, setting a condition for varaibles and also etc
//  ! not or no( doesnt meet with the condition)
//  > greater than
//  <less than
//  >= greater than or equal to
//  <=less than or equal
//  if() if statement(conditional rendering)

// ternary operator
// it is a concise Way to express a simple condition statement
// 1. a condition
// a value to return when true
//  a value  to return when false

const terms = true;
const value = 23;

const mark = terms === true && value === 23.1 ? "green" : "yellow";
console.log(mark);
