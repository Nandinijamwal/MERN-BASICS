//Truth values: 1,-1,' '
//Falsy values: 0, '', null, undefined

/*conditional statements:

1. if-else
2.switch case

syntax: 
switch (expression){
case 1:{
    code 
    break; 
    };
case 2:{
    code 
    break;
    };
default: {
};

}

*/

//Objects in JS
/* ONLY mutable values
value in memory, referenced by an identifier
Everything is stored in KEY-VALUE pair
Functions are also OBJECTS*/

//initialise

const obj1= new Object();
console.log(obj1);
console.log(typeof(obj1));

const obj2= {};
console.log(obj2);
console.log(typeof(obj2));

//const characteristics are applied

const stu ={
    Name: "Nandini",
    Sname: "Jamwal",
    Sem: "5th"
};

console.log(stu);

stu.Age = 19;
console.log(stu);

//nested objects

const data={
    st1: {
        name: "Meena",
        age: 20
    },
    st2:{
        name: "Sheela",
        age: 21
    },
    st3:{
        name: "Kaju",
        age: 18
    }
};

console.log(data);
console.log(data.st2);

//Taking INPUT & Dynamic Access
/*
const inp = prompt("What you want to search? ");
console.log(inp);
console.log(stu[inp]);

//Setting dynamically
const add = prompt("What field to add?");
const val = prompt("What value to add?");
stu[add] = val;

console.log(stu);
console.log(objname[key]);
*/

/*Shallow copy : Pointing to same address/reference; 
A shallow copy of an object can be created using the spread operator (...)
const shallowCopy = { ...originalObject }; 
it just copies the references to those nested objects. 
 This means changes to nested objects or arrays in the copied object will affect the original object 
 and vice versa. */

/*Deep copy : Exact copy
A deep copy can be created using JSON.parse() and JSON.stringify()
const deepCopy = JSON.parse(JSON.stringify(originalObject)); 
changes to the copied object do not affect the original object and vice versa.*/

//ARRAY- CSVs

const ar=[1,2,"hey","ok"];
console.log(ar);

console.log(ar[2]);

//To check if array

console.log(Array.isArray(ar));
console.log(Array.isArray(stu));

//for loop

for (let i=0; i<=ar.length; i++){
    console.log(i);
}

//Window in JS- BOM (Browser Object Model)- Allows to talk to the browser
//Global lib
/*The Document Object Model (DOM) is a programming interface for web documents. 
It represents the structure of a document as a tree of objects, allowing programs to dynamically 
access and update the content, structure, and style of a web page. */

//DOM- Document OM
console.dir(window.document);
//console.dir(document);

//DOM Manipulation

console.dir(document.body.children[0]);
console.dir(document.body);

document.body.style.backgroundColor='yellow';

//SELECTORS IN JS

//Get by ELE ID
document.getElementById('h22').style.color='blue';
document.getElementById('h22').style.margin='12px';

const STitle = document.getElementById('h22');
STitle.style.backgroundColor='pink';

console.log(STitle);

//Get by CLASS Name
const para= document.getElementsByClassName('p11');
console.log(para);

//Get by Tag Name
const ta= document.getElementsByTagName('h1');
console.log(ta);

ta[0].style.backgroundColor='aqua';

//query selector

//class in body
const print = document.querySelector('body.h22');
console.log(print);

//child class anyhere in body
const print1 = document.querySelector('body .p11');
console.log(print1);

//id in body
const print3 = document.querySelector('body #h22');
console.log(print3);
const print4 = document.querySelector('body #h22+p');
print4.style.backgroundColor='bisque';

const root= document.getElementById('root');
console.log(root);

//CREATEING NEW ELEMENTS
const newheading = document.createElement('h2');
newheading.innerText='Hello world';
console.dir(newheading);

root.appendChild(newheading);
console.log(root);

//Adding list

const list = document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='item1';
list.appendChild(li1);
console.dir(newheading);

const li2=document.createElement('li');
li2.innerText='item2';
list.appendChild(li2);
console.dir(newheading);

const li3=document.createElement('li');
li3.innerText='item3';
list.appendChild(li3);
console.dir(newheading);

root.appendChild(list);
console.log(root);

function func(){
    console.log('button clicked');
}
function func1(e){
    console.log('input received: ',e.target.value);
}