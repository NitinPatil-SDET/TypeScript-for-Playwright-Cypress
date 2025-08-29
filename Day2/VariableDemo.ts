/*
Day 2 : Variable :  Container which can hold/store some data

let → Block-scoped, can be reassigned
const → Block-scoped, cannot be reassigned (constant)
var → Function-scoped, old style (avoid in modern TS)

Syntax: var variableName: dataType = initialValue;
Example: var age: number = 25;

   Parameter      ||    var    ||      let      ||      const
---------------------------------------------------------------
1) Scope         || Function  || Block         || Block
2) Re-assignable || Yes       || Yes           || No
3) Hoisting      || Yes       || No            || No
4) Redeclarable  || Yes       || No            || No
5) Initialization|| Optional  || Optional      || Required


1) Scope  
 // Example usage:
var x = 10;      // Function-scoped, can be redeclared/reassigned
let y = 20;      // Block-scoped, can be reassigned
const z = 30;    // Block-scoped, cannot be reassigned


var - We do not recommend using 'var' in modern TypeScript code due to its function-scoped nature and potential for unexpected behavior. Instead, prefer 'let' and 'const' for better scoping and maintainability.
let - We use when you need a variable that can be reassigned and is limited to a specific block scope.
const - We use when you need a variable that should not be reassigned and is limited to a specific block scope.

What is Scope ?
Scope refers to the region of code where a variable is accessible.
1. Functional Scope: Variables declared within a function are not accessible outside of it.
2. Block Scope: Variables declared within a block (e.g., within `{}`) are not accessible outside of it.

*/

var age = 30;
console.log("Age:", age);

function varScopeDemo() {
    if (true) {
        var a = 10; // function-scoped    
        let b = 20; // block-scoped & can change value later
        const c = 30; // block-scoped & can't change value later

         console.log("function-scoped(Inside block) a : ", a); // Accessible   
         console.log("block-scoped(Inside block) b : ", b); //  Accessible
         console.log("block-scoped(Inside block) c : ", c); //  Accessible
    }
    console.log("function-scoped(Outside block) a : ", a); // Accessible
    // console.log("block-scoped(Outside block) b : ", b); // Error: not accessible
    // console.log("block-scoped(Outside block) c : ", c); // Error: not accessible
}

varScopeDemo();

/*
2) Declaration/Value Assignment
   - var: Can be declared without initialization
   - let: Can be declared without initialization
   - const: Must be initialized at the time of declaration
*/

//Example:
var x; // Declaration without initialization
console.log("var x after declaration without initialization:", x);

let y; // Declaration without initialization
console.log("let y after declaration without initialization:", y);

const z = 30; // Declaration with initialization
console.log("const z after declaration with initialization:", z);


/*
3) Redeclaration
   - var: Can be redeclared and it's not type safe
   - let: Cannot be redeclared in the same scope and it's type safe
   - const: Cannot be redeclared in the same scope and it's type safe
*/
//Example:
var city = "Pune";
var city = "Mumbai"; // No error
console.log("var city after redeclaration:", city);

let country = "India";
// let country = "USA"; // Error: Cannot redeclare block-scoped variable country
console.log("let country after redeclaration:", country);

const planet = "Earth";
// const planet = "Mars"; // Error: Cannot redeclare block-scoped variable planet
console.log("const planet after redeclaration:", planet);


/*
4) Re-initialization/Re-assignment
   - var: Can be re-initialized/re-assigned
   - let: Can be re-initialized/re-assigned
   - const: Cannot be re-initialized/re-assigned
*/

//Example:
// var EmpName = "Nitin";
// EmpName = "Raj"; // No error
// console.log("var EmpName after re-assignment:", EmpName);

// let Salary = 12000;
// Salary = 15000; // No error
// console.log("let Salary after re-assignment:", Salary);

// const EmpID = 101;
// // EmpID = 102; // Error: Cannot re-assign a constant variable
// console.log("const EmpID after re-assignment:", EmpID);

/* 
5) Hoisting
   - var: Hoisted to the top of its scope, can be used before declaration (undefined)
   - let: Hoisted to the top of its block, cannot be used before declaration (ReferenceError)
   - const: Hoisted to the top of its block, cannot be used before declaration (ReferenceError)
*/

//Example:

//console.log("var p before declaration:", p);
var p = 11;
console.log("var p after declaration:", p);

//console.log("let q before declaration:", q); // ReferenceError: Cannot access 'q' before initialization
let q = 22;
console.log("let q after declaration:", q);

//console.log("const r before declaration:", r); // ReferenceError: Cannot access 'r' before initialization
const r = 101;
console.log("const r after declaration:", r);



/*
Feature                        | var           | let                | const         |
|---------------------------------|---------------|--------------------|--------------|
| Scope                          | Function      | Block              | Block        |
| Value Assignment at Declaration | ❌ Not Mandatory | ❌ Not Mandatory | ✅ Mandatory  |
| Re-declare                     | ✅ Allowed     | ❌ Not Allowed      | ❌ Not Allowed|
| Re-assign/Reinitialization      | ✅ Allowed     | ✅ Allowed          | ❌ Not Allowed|
| Hoisting                       | ✅ (undefined) | ❌ (Not initialized)| ❌ (Not initialized) |
| Best Use                       | ❌ Avoid
*/


