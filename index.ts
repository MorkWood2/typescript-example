console.log('hello ts!');

//Implicit types

let helloWorld = 'Hello, world';

// helloWorld = 5; // type error

//Explicit types

let firstName: string = 'john';
let age: number = 34;

// firstName = 50; //type error
// age = 'number'; //type error

//Tuple - express an array with a fixed number of elements whose types are known but don't need to be the same.

type stringAndNumber = [string, number];

let x: stringAndNumber = ['hello', 10];

//enums - set of named constants

//Example of constants all reachable inside of an object

enum Continents {
  North_America,
  South_America,
  Africa,
  Asia,
  Europe,
  Antarctica,
  Australia,
}

let regions = Continents.Africa;

//Interface

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30,
};

// const person: User = {
//   name: 'Bill',
//   age: 50,
//   interests: ['music', 'reading'], //type error
//   //Object literal may only specify known properties, and 'interests' does not exist in type 'User'
// };

//composing mulitple types --> union
type WindowStates = 'open' | 'closed' | 'minimized';

const windowStates: WindowStates = 'open';
// const windowStates2: WindowStates = 'another option';//type error
// //Type '"another option"' is not assignable to type 'WindowStates'

type LockedState = 'unlocked' | 'locked';
type OddNumbersBelow10 = 1 | 3 | 5 | 7 | 9;

const odd: OddNumbersBelow10 = 3;

const getLength = (param: string | string[]) => {
  return param.length;
};

getLength('length'); //4
getLength(['word', 'anotherWord']);
