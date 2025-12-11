var a;  // Global Scope [Redeclaration, Reinitialization]
a=10;
var a = 20; 

let b; //Block Scope [Reinitialiation]
b=10;
b=20;

const c=10; //Block Scope

var p = 20; //number
var q = "Hello"//string
var bool = true;//boolean
var r; //undefine
var s = null; //null
var big = 1012345678992345678912345678n;
var symbol =Symbol('li');
console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof s);
console.log(typeof big);
console.log(typeof symbol);
var arr = [1,2,3,4,5]; //array
console.log(arr);

var object = { // Object
    name : "vikraam",
    age: 24
}
console.log(typeof arr);
console.log(typeof object);
//Arithametic Operator(+,-,*,/,%)
var a=10;
var b="20";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Relational Operaator(>,<,>=,<=,==,!=,===,!==)
var a=10;
var b="10";
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

//Assign Operator (=,+=,-=,*=,/=,%=)
a = 10;
console.log(a);
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a/=2;
console.log(a);
a%=2;
console.log(a);

//logical Operator (&&,||,!)
a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//for loop
// for(initialization;Condition;increment/Decrement){
//     //Statement
// }
for(let i=1;i<=10;i++){
    console.log(i);
}
//While loop
// while(condition){
//     //Statement
// }
var a =0;
while(a!==5){
    a++;
    console.log(a)
}
console.log(a);

// do...while 

// do{
//     //statement
// }while(condition);

a=0;
do{
    console.log(a);
}while(a===1);

//conditional Statement
//if
a =5;
if(a%2===0){
    console.log("Even")
}
//if..else
if(a%2===0) console.log("Even");
else console.log("odd");

//else..if
var mark =90;
if(mark>=90) console.log("O");
else if(mark>=70) console.log("A");
else if(mark >=50) console.log("B");
else console.log("Fail");

//switch
day  = 1;
switch(day){
    case 1:
    {
        console.log("Sunday");
        break;
    }
    case 2:{
        console.log("Monday");
        break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("saturday");
        break;
    }
    default:
        console.log("Invalid Number");
}
// terinary Operator (?:)
// syntax
// condition?value:value;
a=10;
var result = (a%2===0) ? "Even" : "odd";
console.log(result);

mark =90;
var result = (mark>=90) ? "O" : (mark>=70) ? "A" : (mark >=50) ? "B" : "Fail";
console.log(result);

function add(){
    console.log(10+20)
}
add();

//Arrow Function
var addParam =(a,b)=>{
    console.log(a+b);
}

addParam(10,20);
console.log(typeof addParam);

// Spread Operator (...)
var a = [10,20,30];
var b = [...a,40,50];
console.log(a);
console.log(b);

// Destructuring Operator
//Array
var [name,age,marks]= ["vikraam",23,90];
console.log(name);
console.log(age);
console.log(marks);

//Object
var {name,age,marks} = {
    name:"vikraam",
    age:23,
    marks:90
}
console.log(name);
console.log(age);
console.log(marks);

//for..in (index value)
var arr = [1,2,3,4,5];
for(let i in arr){
    console.log(i);
}
//for..of(values)
for(let j of arr){
    console.log(j);
}

//forEach
arr.forEach((val,index) =>{
    console.log(val,index)
})

// Class and Object
class Person{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name,this.age);
    }
}
var p1 = new Person("Vikraam",24);
p1.display();

// Prime Number
var a =5;
var flag = true;
if(a<=1) flag = false;

else {
    for(let i=2;i<=a/2;i++){
        if(a%i===0){
            flag = false;
            break;
        }
    }
}
console.log(flag===true ? "Prime":"Not Prime");

//Palindrome number
var a =121;
b = a;
var rev =0;
while(a!==0){
    var rem = Math.floor(a%10);
    rev = rev*10 + rem;
    a=Math.floor(a/10);
}
if(rev === b) console.log("Palindrome");
else console.log("Not Palidrome");

// Scope
var a = 10; // Global scope
if(true){
    var b = 20; // var Global scope
    console.log(a);
}
console.log(a,b);

let a = 10; // Global scope
if(true){
    let b = 20; // let Block scope
    console.log(a);
}
console.log(a,b);

const a = 10; // Global scope
if(true){
    const b = 20; // const Block scope
    console.log(a);
}
console.log(a,b);

//Hoisting
console.log(a);
var a =10;
console.log(a);
let a =10;
console.log(a);
const a =10;
add();
function add(){
    console.log(10+20);
}

//for..in(Object)
var obj = {
    name:"vikraam",
    age:24,
    marks:90
};
for(let i in obj){
    console.log(i,obj[i])
}

CallBack Function

var demo = ()=>{
    console.log("Hello World!!")
}

var main = (callback)=>{
    console.log("Main Called");
    callback();
}

main(demo);

var add = (a,b,callback)=>{
    var result = a+b;
    callback(result);
}

add(10,20,(res)=>{
    console.log(res)
});

//SetTimeout 
console.log("Hello");
var Demo=()=>{

    setTimeout(()=>{
        console.log("Processing...");
    },2000)
}
Demo();

//Template Literals 
var age = 24;
var name = "vikraam"
var str = `vikraam age is ${age}`

console.log(str);

console.log(`${name} age is ${age}`)

console.log(name+" age is "+age);

//Map
var arr = [1,2,3,4,5];
var double = arr.map(num=>num**3);
console.log(double)

//Filter
var even = arr.filter((num)=>(num%2===0));
console.log(even);

//Reducer
var total = arr.reduce((sum,num)=>(sum+num),0);
console.log(total);

var evenCount = arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
console.log(evenCount);

var student = [
    {name:"viky",marks:90},
    {name:"muthu",marks:80},
    {name:"raja",marks:88},
    {name:"sudeep",marks:89},
];
//filter
var studentMark = student.filter(s=>s.marks>88);
console.log(studentMark);
//map
var studentName = student.map(s=>s.name)
console.log(studentName);
//reduce
var totalMarks = student.reduce((sum,s)=>(sum+s.marks),0)
console.log(totalMarks)
var avg = totalMarks/student.length;
console.log(avg)

//promise
const promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))

//promise
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },2000)
})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))

const getData =()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
}
getData().then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))


const getData = async(req,res)=>{
    try{
        var res=await fetch('https://jsonplaceholder.typicode.com/posts');
    var data =await res.json();
    console.log(data);
    }catch(err){
        console.log(err);
    }
}
getData();