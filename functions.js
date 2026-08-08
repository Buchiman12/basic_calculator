function greet(a, b) {
    console.log("Hello, Jessica!")
    return a * b;

}
console.log(greet(5, 6));

function greeting(name){
    console.log(`Hello, ${name}!`);
}
greeting("Alice");
greeting("Nick");

//anonymous function is a fxn without a name
const sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(3, 4));

// fxns with default parameters if in a case there is no argument
function greetings(name = "Guest"){
    console.log(`Hello ${name}!`)
}
greetings()
greetings("Anna")

// arrow fxn
const greetFun = (name2) => {
    return (`Hello ${name2}!`)

}
// if the parameter of the fxn is only one you can write it like this too
const greetOnePara = name1 => {
    return (`Hello, ${name1}!`)
}
// for no parameters
const greetNoPara = () => {
    return (`Hello!`)
}
console.log(greetFun("buchi"))
console.log(greetOnePara("buchi2"))

// if fxn contains only one line code
const oneLineCode = nameOne => console.log(`hello ${nameOne}`);

//If your arrow function has no parameters, then you must use the parentheses like this:
const greetings = () => {
  console.log("Hello");
};
