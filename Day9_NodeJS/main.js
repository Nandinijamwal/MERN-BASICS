// const sum= require('./mathFunctions.js');
// const ans = sum(10,10);
// console.log(ans);

//USING IMPORTED MODULE

// const math=require('./mathFunctions.js');
// const ans=math.add(10,30);
// const ans2=math.sub(10,30);

// console.log(ans,ans2);

const {add, sub}= require('./mathFunctions.js');
const ans=add(10,30);
const ans2=sub(10,30);
console.log(ans,ans2);

//Destructuring

//Array
const arr=[1,2,3];
const [a,b,c]=arr;
console.log(a,b,c);

//Object
const obj={
    name: 'Nandini',
    age: 19,
    city: 'J&K'
};
const {name,age,city}=obj;
console.log(name,age,city);
console.log(obj.name);

const [d,e,f,g,h]=require('./city.js');
console.log(e,g);

var figlet = require("figlet");

figlet("Sushant", (err, data) =>{
  if (err) {
    console.log("Something went wrong...");
    
  }
  console.log(data);
});
