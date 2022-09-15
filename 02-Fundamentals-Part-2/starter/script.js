"use strict";
//严格模式, 更多信息会报错
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive! ');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
// 严格模式，不允许使用这些特殊变量名字
*/

/*
function logger(){
  console.log('My name is Qikaqiu');
}

// calling/ running /invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
  return juice;
}

const juice = fruitProcessor(5,0);
console.log(juice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

/*
function calcAge1(birthYear){
  return 2022 - birthYear;
}

const age1 = calcAge1(1991);

//匿名函数
const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*
//匿名函数
const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65-age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log( yearsUntilRetirement(1991,'Jonas') );
console.log( yearsUntilRetirement(1980,'Bob'));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);


  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges. `;
  return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65-age;
  if(retirement > 0){
    return `${firstName} retires in ${retirement} years`;
  }else{
    return `${firstName} has already retired `;
  }
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1970,'Bobs'));
*/

/////////////////////////
// coding challenge #1

// function calcAverage(score1,score2,score3){
//   return (score1+score2+score3)/3;
// }

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins > scoreKoalas * 2) {
    console.log(`Dolphins win  (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win ! (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log("No team wins... ");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(580, 50);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age = new Array();
for (let i = 1; i < years.length; i++) {
  console.log(calcAge(years[i]));
  age.push(calcAge(years[i]));
}

console.log(age);
*/

/*
//Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John"); // add elements to the beginning
console.log(friends);

//remove elements
friends.pop(); //Last
const popped = friends.pop(); //Last
console.log(popped);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
//return 1/-1

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter! ");
} else {
  console.log("Peter is not your friend...");
}
*/

/*
//////////////////////////////////
// coding challenge #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const _calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
const jonasArray = [
  "Jonas",
  "Qikaqiu",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Qikaqiu",
  age: 2037 - 1991,
  job: "tacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Qikaqiu",
  age: 2037 - 1991,
  job: "tacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey);
*/

/*
const interestedIn = prompt(
  "What do you want to konw about Jonas? Choose between firstName, lastName, age, job, and firends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName,age, job and friends"
  );
}
jonas.location = "Portugal"; //葡萄牙
jonas["twitter"] = "@Qikaqiu";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is call ${jonas.friends[0]}`
);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Qikaqiu",
  birthYear: 1991,
  job: "tacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDrivesLicense: true,

  // calcAge: function (birthYear) {
  //   //属性
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      jonas.job
    } and he has ${this.hasDrivesLicense ? "a" : "no"} diver's license`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

// console.log(jonas.age);
console.log(jonas.getSummary());
*/

/*
////////////////////////////////////////
// coding challenge #3

const Mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const John = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

Mark.calcBMI();
console.log(Mark.BMI);

John.calcBMI();
console.log(John.BMI);
*/

/*
console.log("Lifting weights repetion 1");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep}`);
}
*/

/*
const jonas = [
  "Jonas",
  "Qikaqiu",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];
  ages.push(2037 - years[i]);
}
console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

/*
const joans = [
  "Jonas",
  "Schmedman",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

// for loop
for (let i = joans.length - 1; i >= 0; i--) {
  console.log(joans[i]);
}

// 嵌套for
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);
  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

/*
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
*/
