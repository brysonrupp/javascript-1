console.log('js loaded');

//ANCHOR - data types
let string = 'hello'
let number = 5
let number2 = 5.5
let bool = true // or false
let dontknow = undefined // unknown nothing
let nothing = null // known-nothing

// reference types
// array
// stores info by index/position/order
let strArr = ['howdy', 'hello', 'whats is up']
let numArr = [5, 10, 500]
let mixArr =

    // object
    // store info by key value pair
    let obj = {
        age: 30,
        key: 'value',
        name: 'bryson',
        costume: 'dino'
    }

function doSomething() {
    console.log('i did something');
}

function returnSomething() {
    return 'something' // returns value from function to where the function was called 
}

function sum() {
    return 5 + 10
}

//!SECTION the real app begins below

let secretCode = 'ghost pumpkin zombie'

let yourCode = ''

function ghost() {
    yourCode += 'ghost'
    console.log(yourCode);
}

function clearCode() {
    yourCode = ''
    drawCode()
}


// can only add strings // if you change data, console log the data