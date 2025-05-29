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

// How to Loop through an Array

///for loop
//while loop
for (let p = 0; p <= 6; p++) {
  // p=0 assignment of varianble
  // p<6 condition to be meet
  // p++ increasement of varaible
  console.log(p);
}
let x = 1;
while (x < 9) {
  console.log(`the value of x is less down or equals 9`);
  x++;

} 
 //  forEach map filter Method,higher methods looping through array
Task.forEach(function(tasklist){
  console.log(tasklist);
});

  




