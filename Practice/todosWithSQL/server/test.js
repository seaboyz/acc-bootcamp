// var blue = () => {
//   console.log(myVar);
//   myVar = 'blue';
// }

// var red = () => {
//   var myVar = 'red';
//   blue();
// }

// var myVar = 'color';
// red();

// function red () {
//    function blue (){
//       console.log(myVar);
//       myVar = 'blue';
//    };
//    myVar = 'red';
//    blue();
// }

// var myVar = 'color';
// red();

// function red () {
//    function blue (){
//        console.log(myVar);
//    };
//    blue();
// }

// var myVar = 'color';
// red();



// console.log(this);    // what does this refer to here?

// function myFn(){
//   console.log(this);
//   this.myVar = 'Ha ha!';
// }

// myFn();               // what does this refer to here?
// console.log(myVar)    // where is myVar residing?
// console.log(this)


// var myFn = function(){  // function expression (FE)
//    console.log(this);
//    this.myVar = 'Ha ha!';  // what does this inside the FE refer to?
//    console.log(this);
// }

// myFn();

// console.log(myVar)  // this is looking for raaVar in global


// var myObj = {
//    name    : 'piyush\'s object',
//    myMethod: function (){
//      console.log(this.name);
//    }
// };

// myObj.myMethod();      // what does this refer
//                        // to here?

// var myObj = {
//    name    : 'my object',
//    myMethod: () => {
//                console.log(this);
//                let myInnerMethod = () => {
//                  console.log(this);
//                };
//                myInnerMethod();
//              }
// }

// myObj.myMethod();      // what does this refer to here?


// function f() {
//  console.log("jason");
//  setTimeout(g, 0);
//  console.log("javier");
//  h();
// }

// function g() {
//   	console.log("jenny");
// }

// function h() {
//  console.log("miguel");
// }

// f();



//  ---------------- //
//        Sync
//  ---------------- //
//
// function hide(str) {
//     return str.replace(/[a-zA-Z]/g, 'X');
// }
//
// var hidden = hide("Hello World");
//
// console.log( hidden );


//  ----------------------------------------- //
//       sync - continuation passing style
//  ----------------------------------------- //
//
// function hide(str, someCallbackFn) {
//     someCallbackFn(str.replace(/[a-zA-Z]/g, 'X'));
// }
//
// hide("Hello World", 
//
//     function(value){
//         console.log(value)
//     }
//
// );
// // this is still synchronous
// console.log('done')


//  ----------------------------------------- //
//       async - continuation passing style   //
//                    made async              //
//  ----------------------------------------- //
//
// function hide(str, someCallbackFn) {
//     process.nextTick(function(){
//         someCallbackFn(str.replace(/[a-zA-Z]/g, 'X'));
//     })
// }
//
// hide("Hello World", 
//     function(value){
//         console.log(value)
//     }
// );
//
// console.log('done')




//  ---------------- //
//       async
//  ---------------- //
//
// function pause(secs, cb) {
//     setTimeout(cb, secs*1000);
// }
//
// console.log('starting delays');
// pause(2, () => {
//     console.log('two seconds');
//     pause(1, () => {
//         console.log('three seconds');
//         pause(1, () => {
//             console.log('four seconds');
//         })
//     })
// })


//  ---------------- //
//       promises
//  ---------------- //

// var delay = (secs) => new Promise((resolves, rejects) => {
//     setTimeout(() => {
//         resolves('the long delay has ended')
//     }, secs);
// });
// pause(1)
//   .then(console.log)
//   .then(() => 42)
//   .then((number) => console.log('Hello world: ${number}'))

// console.log('end first tick');

var person = {name: 'Jon', age: 101, haircolor: 'black'}

// console.log('names:')
// console.log('========')
// for(x in person){
//     console.log(x);
// }

// console.log('values:')
// console.log('========')
// for(x in person){
//     console.log(person[x])
// }


// console.log(
//     Object.keys(person)
// )

var fruits = ['banana', 'apple', 'pear']


var person = {
    name: 'Missa', 
    age: 78,
    city: 'Austin',
    state: 'Jetas',
    planet: 'Earth'
}

// write code that goes through all the person properties
// and lists them out as "name: value"

// console.log(
//     Object.keys(person).forEach(function(v){
//         console.log(`${v}: ${person[v]}`);
//     })
// )

// for (const p in person) {
//   console.log(`${p}: ${person[p]}`);
// }


// function square(x){
//     if( typeof x == 'number') {
//         return Math.pow(x, 2)
//     }
//     return null
// }

// console.log(
//     square(3)
// )

// var a = " ";

// if (a) {
//     console.log('The value of a is ' + a);
// }


// function greeting(name) {
//    console.log('Hello ' + (name || '<your name here>'));
//    }
  
//    greeting("Class")
//    greeting()
//    greeting("");


// function myfn(a, b, c) {
//  arguments['0'] = 100
//  console.log(arguments)
// }

// myfn(1, 2, 4)


// function myFn (first, last, lang = 'english') {     // new way
//    console.log(`lang is :${lang}`)
//    console.log(arguments)
// }

// myFn('Jon-Mikel', 'Pearson', 'Spanish');


// function myFunc() {
//    return (
//     'This is run from myFunc'
//    );
// }

// console.log(myFunc());


// // IIFE
// var myFn = function(city){          // fn expression
//    console.log( "I've been to " + city );
// }("Kirkenes")                       // immed. invoked

// console.log(function(city) {
//    return "I've lived in " + city;
// }('Calcutta'))

function build(){
   var myArray = [];
   for (i = 0; i < 3; i++){
     myArray.push(
       (function(j){
         return function(){
           console.log(j);
         }
       }(i))
     )
   }
   return myArray;
}

var f = build();

f[0](); // expect 0
f[1](); // expect 1
f[2](); // expect 2



Join Zoom Meeting
https://us02web.zoom.us/j/83962946668

Meeting ID: 839 6294 6668
One tap mobile
+13462487799,,83962946668# US (Houston)
+12532158782,,83962946668# US (Tacoma)

Dial by your location
        +1 346 248 7799 US (Houston)
        +1 253 215 8782 US (Tacoma)
        +1 669 900 6833 US (San Jose)
        +1 646 558 8656 US (New York)
        +1 301 715 8592 US (Germantown)
        +1 312 626 6799 US (Chicago)
Meeting ID: 839 6294 6668
Find your local number: https://us02web.zoom.us/u/kAKkOrghB



