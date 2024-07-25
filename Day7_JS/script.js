// Functions are First Class Citizens in JS
// Functions are treated as other variables, can be assigned to other variables, passed as arguments
// or returned by another function

//function as argument

function pretty(x){
    console.log("***", x, "***");
}

function summ(a,b,fn){
    fn(a+b);
}

// const ans = summ(8,2);
// pretty(ans);

const ans = summ(8,12,pretty);

// When a function takes another function as an ARGUMENT or RETURN a function then that function is called 
// HOF-HIGHER ORDER FUNCTION
//Example:  "summ"

//Array and Functions

const arr =[1,2,3,4,5,6];
arr.forEach(pretty);

//function declared in array method
arr.forEach(
    function pretty(x){
        console.log("***", x, "***");
    }
)
//arrow method
arr.forEach((a,b)=>{
    console.log("==",a,b,"==");
}
)

//Asynchronous Functions- An async function declaration creates an AsyncFunction object. 
//Each time when an async function is called, it returns a new Promise which will be resolved 
//with the value returned by the async function, or rejected with an exception uncaught within 
//the async function.

console.log("START");
const cb = ()=> {
    console.log("PROCESSING...");
};
const t = 4000; //1 k = 1 sec
setTimeout(cb,t);
console.log("END");

//setTimeout(), setInterval()