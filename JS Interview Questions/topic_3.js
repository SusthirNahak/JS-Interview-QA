//***************** Topic Name:Functions **********************//

/*
--what is function expression()- 
when we store a function inside of a variable ,it is called a function expression.
//////////////////////////////////////////////////////////////////////////
*anonymous function- a function has no name,can be assign to a variable or can pass as a callback
Example:-     
const square =function (num){
    return num*num;
}
square(5); //invokation
///////////////////////////////////////////////////////////////////////////
*First Class Function - where functions are treated as variable and passed inside another function ,we called as first class functions
Example:- 
function displaysquare(fn){
    clg("square is ",fn(5))
}
displaysquare(square) //previous function example we passed
///////////////////////////////////////////////////////////////////////////
*IIFI - IMMEDIATELY INVOKED FUNCTION EXPRESSION
Example:- 
(function square(num){
    clg(num*num)
})(5);//immediately invoked this "()" after the function.

*/
const square =function (num){
    return num*num;
}
square(5); //invokation