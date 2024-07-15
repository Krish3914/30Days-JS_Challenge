//Day-02 Js Operators
console.log("Start Day-02 JS-Challenge 14thJuly2024: DataTypes");

//Airthmetic Operators
let num1 = 2;
let num2 = 3;
console.log(`addition of two nums: ${num1 + num2}`);
console.log(`addition of two nums: ${num1 - num2}`);
console.log(`addition of two nums: ${num1 * num2}`);
console.log(`addition of two nums: ${num1 / num2}`);
function modFunction(num1, num2){
    let modd = num1%num2;
    return modd;
}
console.log(`mod of num1 by num2 is: ${modFunction(num1,num2)}`);

console.log(`++++++++++--------------+++++++++`)
//Assignment Operators
let num = 23;
num+=4;
console.log(`after using += operator: ${num}`);
num-=3;
console.log(`after using -= operator: ${num}`);

console.log(`++++++++++--------------+++++++++`)

//Comparison Operators
let number1 = 12;
let number2 = 22;

console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
let number3 = 22;
console.log(number2 <= number3);

let str1 = "23";
let str2 = 23;
console.log(str1==str2);   //because it checks the value
console.log(str1===str2);   //because it checks both value and data type.

console.log(`+++++++++-----------+++++++++`);
//logical Operators
let comp1 = 20;
let comp2 = "krish";
if(comp1==20 && comp2=="krish"){
    console.log(`Number and correct name exist in the variables`);
}
if (comp1 == 20 || comp2 == "krish") {
  console.log(`Atleast one of Number and correct name exist in the variables`);
}
let IsLoggedIn = false;
if(!IsLoggedIn){
    console.log(`User is Not Logged in.`);
}

console.log(`+++++++++-----------+++++++++`);
//Ternary operator
const numberTernary1 = 0;
const numberTernary2 = 20;
numberTernary1 >= 0
  ? numberTernary1 > 0
    ? console.log(`${numberTernary1} is Positive`)
    : console.log(`${numberTernary1} is exact Zero`)
  : console.log("${numberTernary1} is Negative");


numberTernary2 >= 0
  ? numberTernary2 > 0
    ? console.log(`${numberTernary2} is Positive`)
    : console.log(`${numberTernary2} is exact Zero`)
  : console.log("${numberTernary2} is Negative");

console.log(`___________________++++++++++++_________________`);
console.log(`Day02 Finished`);