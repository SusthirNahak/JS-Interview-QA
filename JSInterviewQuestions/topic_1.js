//***************** Topic Name: var vs let vs const , scope ,hoisting **********************//
/*
scope - 
scope is a certain region of a program,
where a defined variable exists and can be recoginized.
beyond that it cant be recoginized.
ex- global scope,blog scope,function scope
*/
var a=7;// a is a global scope ,we can access anyover here.
//console.log(a);

///////////////////////////////////////////////////////////
{
    var b=8; //b (var) is a block scope ,we can access outside the block here.but not possible with let and const
}
//console.log(b);

///////////////////////////////////////////////////////////

function test(){
    var a = "hello";
    let b = "bye"
    if(true){
        let a ="hy" // variable shadowing ,it shadows the a (hello) value
        let b ="good bye" // variable shadowing,it shadows the b (bye) value
       // console.log(a);
       // console.log(b);
    }
}
test();
//NOTE:- if you shadow var variable by let variable it will work fine,
//but if you shadow let variable by var it will show error ,called as illigal shadowing

///////////////////////////////////////////////////////////////////
/*
 --Var can be declared,redeclared also and accessed globally.
 --Let can be declared globally, but its access is limited to the block in which it is declared.
 --var can be re-declared and updated within the same scope.
 --let can be updated but not re-declared within the same scope.
 --const can not be declared without any value,but we can declare var and let without value.

*/

//Hoisting
/*
--Hoisting - During the creation phase ,javascript enginee moves the variables and function declation to top of codes.
this is known as hoisting
--var is hoisted(op-undefined),let is giving error but it is hoisted at the temporal dead zone
--temporal dead zone is the time between declation and initialization of let and const variables



*/
//example:
function abc(){
    // console.log(a);     //output is undefined, if var is declared before console.log then it will give the output
    var a=5;
}
abc()