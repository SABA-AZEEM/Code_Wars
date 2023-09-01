// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for that data types.

Boolean.prototype.toString=Number.prototype.toString=Array.prototype.toString=
  function(){
    return JSON.stringify(this);
}

                            // or 
                            
// // Enable toString() for booleans
// Boolean.prototype.toString = function() {
//     return this.valueOf().toString();
// };

// // Enable toString() for numbers
// Number.prototype.toString = function() {
//     return this.valueOf().toString();
// };

// // Enable toString() for arrays
// Array.prototype.toString = function() {
//     return '[' + this.join(', ') + ']';
// };

// // Enable toString() for objects
// Object.prototype.toString = function() {
//     return JSON.stringify(this);
// };

// // Usage examples

// const boolValue = true;
// console.log(boolValue.toString()); // Outputs: "true"

// const numValue = 42;
// console.log(numValue.toString()); // Outputs: "42"

// const arrayValue = [1, 2, 3];
// console.log(arrayValue.toString()); // Outputs: "[1, 2, 3]"

// const objValue = { name: 'John', age: 30 };
// console.log(objValue.toString()); // Outputs: "{\"name\":\"John\",\"age\":30}"

