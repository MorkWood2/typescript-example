console.log('hello ts!');
//Implicit types
var helloWorld = 'Hello, world';
// helloWorld = 5; // type error
//Explicit types
var firstName = 'john';
var age = 34;
var x = ['hello', 10];
//enums - set of named constants
//Example of constants all reachable inside of an object
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antarctica"] = 5] = "Antarctica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
var regions = Continents.Africa;
