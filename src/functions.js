
import {compose, pipe} from "lodash/fp";


// In javascript functions are first-class citizens which means it is treated like a variable.

function sayHello(){
    return "Hello World"
}

let fn=sayHello;
fn()
// both gives the same result
sayHello()



// In  javascript we can pass the function as a arguments
function greet(fnMessage){
    console.log(fnMessage());
}
greet(sayHello);


// In javascript function can return a function

function hello(){
    return function(){
        return "Hello World"
    }
}

// Higher order functions
let numbers=[1,2,3];
numbers.map(number=>number*2) 
// Here map is higher order function because it takes function as an arguments

// Compositions
let input="  JavaScript   "
let output ="<div>"+input.trim()+"</div>"

const trim=str=>str.trim();
const wrapInDiv=str=>`<div>${str}</div>`
const toLowerCase=str=>str.toLowerCase();

const result=wrapInDiv(toLowerCase(trim(input)));

// Composing and Piping
// Lodash
const transform=compose(wrapInDiv, toLowerCase, trim);
transform(input)
// Piping (Help to read the code from left to right)
const transform=pipe(trim, toLowerCase, wrapInDiv); 
transform(input)

// Currying
let input="  JavaScript   "
let output ="<div>"+input.trim()+"</div>"

const trim=str=>str.trim();
const wrapInDiv=str=>`<div>${str}</div>`
const wrapInSpan=str=>`<span>${str}</span>`
// instead
const wrap=type=>str=>`<${type}>${str}</${type}>`;
const toLowerCase=str=>str.toLowerCase();
const transform=pipe(trim, toLowerCase, wrap("div")); 
transform(input)

// Pure functions => no random values, no current date/time, no global state, No mutations of parameters

//  Spread Operator 
const person={name:"John"}
const updated={...person} /* ... copies the all the properties of object person  */
console.log(updated)

// Updating Arrows
const numbers=[1,2,3];
// Adding
const added=[...numbers, 4]
// add in front
const added1=[4, ...numbers]
// add in between
const index=numbers.indexOf(2);
const added2=[
    ...numbers.slice(0,index),4, ...numbers.slice(index)
]

// Removing
const removed=numbers.filter(n=>n!==2);

// Updating
const updated = numbers.map(n=>n===2?20:n)

// Immutable Js npm i immutable
// import {Map} from 'immutable
let book=Map({title:"Harry"});

function publish(book){
    return book.set("isPublished", true);
}
book=publish(book);
console.log(book.toJS())

// Immer npm i immer
// import {produce} from 'immer'

let book={title:"Harry"};

function publish(book){
    return produce(book, draftBook=>{
        draftBook.isPublished=true;
    })
}
book=publish(book);
console.log(book.toJS())
















