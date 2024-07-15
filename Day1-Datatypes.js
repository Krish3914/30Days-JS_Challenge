//Day-1 Variable declaration
console.log("Start Day-01 JS-Challenge 13thJuly2024: Basic Datatypes & Variables");

var integerVar = 2;
console.log(typeof integerVar, ":", integerVar);

let stringVar = "krish";
console.log(typeof stringVar, ":", stringVar);

//Constant declaration

const IsLoggedIn = true;
console.log(typeof IsLoggedIn, ":", IsLoggedIn);

//typeofOperator

let num = 12;
let str = "krishagrawal";
let LoggedIn = false;
const obj = {
    name: "krish",
    age: 21,
    mature: true,
};
let arr = [1,2,3,5,6];

console.log(typeof num);
console.log(num);
console.log(typeof str);
console.log(str);
console.log(typeof LoggedIn);
console.log(LoggedIn);
console.log(typeof obj);
console.log(obj);
console.log(typeof arr);
console.log(arr);

console.log("++++++++++++++-------------------+++++++++++");


//Reassign Variables

let oldVariableValue = 32;
console.log(`OldValue of variable is: ${oldVariableValue}`);
oldVariableValue += 34;
console.log(`New modified Value of the variable is: ${oldVariableValue}`);

let oldStringVar = "krish";
console.log(typeof oldStringVar, ":",oldStringVar);
oldStringVar = 88;
console.log(typeof oldStringVar, ":", oldStringVar);

//Using const
const constOldVar = 334;
console.log(typeof constOldVar, ":", constOldVar);
// constOldVar = 788
// console.log(typeof constOldVar, ":", constOldVar);
//No change of variable value in case of const: because it is a constant fixed variable that can not be altered in any case.

// "let" is a mutable variable, while "const" is immutable variable, because "const" value cannot be ChannelMergerNode.

console.log("Day-01 JS task Completed");