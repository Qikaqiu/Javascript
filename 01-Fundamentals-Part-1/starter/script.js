/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"

console.log(myFirstJob);*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
*/

/*
// let,cosnt&var
let age = 30;
age = 31;

// const 不可改变 常量 且需要初始值
// 不知道用啥时，默认用const
const birthYear = 1991;
// birthYear = 1990;
// const job; //需要初始值

var job = 'programmer';
job = 'teacher'

lastName = 'Qikaqiu';
console.log(lasName);
*/

/*
// Math operators 数学运算符
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators 赋值运算符
let x = 10 + 5;
x += 10; // x = x + 10
x *= 10; // x = x * 10
x++;
x--;
console.log(x);

// Comparison operators 比较运算符
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
//MDN上可以查看各运算符的优先级
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/


/*
// BMI = mass / height ** 2 // mass / (height * height)

function BMI(mass, height) {
    return mass / height ** 2 // mass / (height * height)
}

// const massMark = 78;//kg
// const heightMark = 1.69;//m
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;//kg
const heightMark = 1.88;//m
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2022;


//es5
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//es6 模板字符串
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(jonasNew);

console.log(`Just a regular string...`);//只是一个普通字符串..

//多行字符串
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);
*/

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚀');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😁`);
}
*/

//////
//Coding Challenge #2
/*
function BMI(mass, height) {
    return mass / height ** 2 // mass / (height * height)
}

const massMark = 95;//kg
const heightMark = 1.88;//m
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

/*
//type conversion 类型转换
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);//前面的是string 后面的是value，控制台颜色不一样

//type coercion 类型强制转换
console.log('I am ' + 23 + ' years old');//这里将'23'转换成string了
console.log('23' - '10' - 3); //这里把string转换为number了
console.log('23' + '10' + 3); //这里把它们拼接为一串字符串
//这里把string转换为number了
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;//11
n -= 1;
console.log(n);
*/

/*
// 5 falsy values(输出为false):0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all 😏");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
// ===不执行类型转换 ==会执行
const age = '18';
if (age === 18) console.log('You just became an adult! :D (strict)');//严格
if (age == 18) console.log('You just became an adult! :D (loose)');//松散

const favorite = Number(prompt("What's your favorite number? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) { // '23' == 23 -> false
    console.log('Cool! 23 is an amzaing number! ');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 9 or 7'); }

if (favorite !== 23) {
    console.log('Why not 23?');
}
*/


/*
// 逻辑符
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

/*
if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) { console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}*/



/*
///////////////////////////
//  challenge

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKolas);

// if (scoreDolphins > scoreKolas) {
//     console.log('Dolphins win the trophy! ');
// } else if (scoreDolphins < scoreKolas) {
//     console.log('scoreKolas win the trophy! ');
// } else {
//     console.log('Both win the trophy! ');
// }


const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKolas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKolas);

if (scoreDolphins > scoreKolas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy! ');
} else if (scoreDolphins < scoreKolas && scoreKolas >= 100) {
    console.log('scoreKolas win the trophy! ');
} else if (scoreDolphins === scoreKolas && scoreDolphins >= 100 && scoreKolas >= 100) {
    console.log('Both win the trophy! ');
} else {
    console.log('No one wins the trophy ');
}
*/


/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Today is Monday !');
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
        console.log('Today is Wednesday! ');
        break;
    case 'thursday':
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
    default:
        console.log('Not a valid day');
}

//...
if (day === 'monday') {
    console.log('...');
} else if (day === 'tuesday') {
    console.log('...');
}
*/

/*
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🧊');

const drink = age >= 18 ? 'wine 🍷' : 'water ';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water'}`);
*/


/////////////////////////
//  coding challenge #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill valus was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);


