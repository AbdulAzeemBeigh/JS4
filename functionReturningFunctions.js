'use strict'
const greet = function(greeting){
    return function (name){
        console.log(`${greeting} ${name}`)
    }
};

const greeter = greet('Hey!');
greeter('Abdul');
greeter('abdul');
greet('Hi There')('Abdul');
const newGreet = greeting => name => console.log(`${greeting} ${name}`);
newGreet('Hello')('Abdul Azeem');