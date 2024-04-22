//closure in javascript
//closure in javascript- it gives access to outer functions scope from inner function

//lexical scope
/*
lexical scope :-a variable defined outside the function ,
can be accessable inside of another function defined after a variable declaration but opposite is not true,
the variable defined inside the function can not accessable outside the function.
*/
//example
// var uname = "kanha";
// //global scope
// function local(){
//     //local scope
//     console.log(uname);
// }
// local();

//example
// global scope
function subscribe(){
    var uname = "kanha";
    //inner scope 2
    function DisplayName(){ // DisplayName is called closure
        //inner scope 1
        // alert(uname)
    }
    DisplayName()
}
subscribe();


var x = 21;
var fun = function(){
    console.log(x);
    var x =20;
}
fun() //undefined