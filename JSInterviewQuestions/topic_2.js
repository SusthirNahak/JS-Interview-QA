//***************** Topic Name:map ,filter ,reduce **********************//

/*
--what is map()- the map method is used to create a new array from existing array,
by appling a function to each one of the element of the first array
*/
//example:
const nums =[1,2,3,4,5,6,7];
const MultiplyArr = nums.map((num)=>{
    return num*5;
})
//console.log(MultiplyArr);

/////////////////////////////////////////////////////////////////////////////////
/*
--what is filter()- the filter method takes each elements of the array,
and applies conditional statements against each element.
if condition returns true the element pushed into the output array,
if false not pushed into the output array.
filter() method returns only those elements ,who fulfils the conditional critiria.

*/
//Example:
const NumArr=[4,7,1,2,8,1,47,8,36,45];
const NewArr=NumArr.filter((num)=>{
    return num>7;
})
//console.log(NewArr);
/////////////////////////////////////////////////////////////////////////////////
/*
--what is reduce()- the reduce method reduce down the array to one value
--it takes one callback function(fat arrow) and initial value (suppose 0)
--reduce method takes two parameters inside the arrow function - accumulator(acc) and current value(curr)
*/
//Example:
const arr=[4,8,8,5,9]
const newarval=arr.reduce((acc,curr)=>{
    return acc + curr;
},0)
//console.log(newarval);
//////////////////////////////////////////////////////////////////////////////////
//Output Based Questions.
//1.Return only name of students in capital
//2.return only details of those students ,who scored more than  6o marks
//3.return the details of students roll greater then equal 25 and marks greater than 60
//4.return the details of students0 marks greater than 60,give them 20 grace mark

let students =[
    {name:"Piyush",roll:23,marks:67},
    {name:"raju",roll:24,marks:77},
    {name:"Priti",roll:21,marks:37},
    {name:"abhilash",roll:25,marks:87},
    {name:"Vaibhab",roll:28,marks:97}
]
// const CapArr=students.map((stu)=>stu.name.toUpperCase())
// //console.log(CapArr);
// const MoreMarks =students.filter((std)=>{
//     return std.marks>=60;
// })
// console.log(MoreMarks);
const MarkCond =students.filter((stud)=>{
    if(stud.roll>=25 && stud.marks>=60){
        return stud.name;
    }
})
console.log(MarkCond);

let graceMark=students.filter((stmrg)=>{
    if(stmrg.marks>=60){
        stmrg.marks +=20
        return stmrg.name;
    }
})
console.log(graceMark);