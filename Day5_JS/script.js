console.log("HEY");

/*var was prone to error, re-declaration, calling before initialization and, 
re-assignment was common*/
//By Default-var

var a=10
console.log(a);

//let was better option
//didn't allow re-declaration, access before initialization.
//BUT re-assignment is ALLOWED

let b=100;
console.log(b);

//block scope --> { }
//ex: if {}, for {}

// const VS let
//need to be declared during initialization and can't be re-assigned

const count=54660;
console.log(count);


//DATATYPES; PRIMITIVE & NON-PRIMITIVE

//typeof operator, used to know type of the operator
console.log(typeof(b));

//Naming variable
//CamelCase
//CANNOT have numeber or space or - in variable name

//Type Coersion

const fname="JOHN";
const lname="Cena";
const fullname= fname+' '+ lname;
console.log(fullname);

res=true+1;
console.log(res);

res2="A"+true+1;
console.log(res2);

//can convert str to int

ans= "2.88" - "1.2";
console.log(ans);

ans2="400"/"20";
console.log(ans2);

ans3= "20" * 3;
console.log(ans3);

//Loose equality- JS always type coeersion first then check
if (10=="10"){
    console.log("YES");
}
else{
    console.log("NO");
}
//Strong equality- JS doesn't type coeersion before checking
if (10==="10"){
    console.log("YES");
}
else{
    console.log("NO");
}
//for object and arrays, it checks equality on type and reference/address

// ES6 TEMPLATE LITERALS FORMAT

const fnam="JOHN";
const lnam="Cena";
const fn =`NAME IS: ${fnam} ${lnam}`;
console.log(fn);

/* FUNCTION: 

Declare --> 

function myFunction(param1, param2) {
  // code block
}

Express-->

const myFunction = function(param1, param2) {
  // code block
};

*/

//Error prone like "var"
function sum(x,y,a,b){
    console.log(x+y);
    return a*b;
}
//call
let an=sum(2,3,4,5);
console.log(an);

//FUNCTION ASSIGNMENT (named function assignment)
const pr = function sub(x){
    console.log("VALUE: ", x);
}

pr(7);

//ANONYMOUS FUNCTION ASSIGNMENT 
const pr1 = function (x){
    console.log("VALUE: ", x);
}

pr1(89);

//ARROW FUNCTION ASSIGNMENT
const pr2 = (x) => {
    console.log("VALUE: ", x);
}

pr2(788);

//RECURSION

const m = (r)=>{
    if(r==1){
        console.log(1);
    }
    else{
        console.log(r);
        m(r-1);
    }
}

m(10);