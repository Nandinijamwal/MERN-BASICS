const fsP= require('fs/promises');
const fs= require('fs');


//PROMISE FUNCTION- It returns a Promise

//READING-: Reads entire DOCUMENT

// console.log("START");
// const data=fsP.readFile(('./text.txt'),{encoding:'UTF-8'}); //Gives promise
// // console.log(data); //SHOWS PROMISE STATUS
// data.then((res)=>{
//     console.log(res);
// })
// console.log("END");



//CALLBACK FUNCTION- It accepts a CB function which is then executed


// console.log("START");

// function readfileSync(){ //SYNC FUNCTION
//     const data=fs.readFileSync(('./text.txt'),{encoding:'UTF-8'});
//     console.log(data);
// }


//  async function readfileASyncwithPromises(){    //ASYNC FUNCTION - can use TRY-CATCH BLOCK
//     const data= await fsP.readFile(('./text.txt'),{encoding:'UTF-8'});
//     console.log(data);
//  }

// // readfileSync();
// readfileASyncwithPromises();
// console.log("END");



// console.log("START");

// async function readfileASyncwithCallback(){   //ASYNC FUNCTION
//     fs.readFile('./text.txt', {encoding:'UTF-8'}, (err,data)=>{
//         if (err) {
//         console.log("ERRORRRR:", err);
//         }
//         console.log(data);
//     })   
// }
// readfileASyncwithCallback();
// console.log("END");



//SYNC FUNCTION- It behaves in Synchronous way, Blocking Operation



// const data= fs.readFileSync('./text.txt');
// console.log(data); //gives buffer- Data in HEXADECIMAL

// ONE WAY
//const texxt=data.toString();
// console.log(texxt);

//SECOND WAY
// const data= fs.readFileSync(('./text.txt'),{encoding: 'UTF-8'});
// console.log(data);

//WRITING

// fs.writeFileSync('./text.txt',"HEYYYY");
// fsP.writeFile('./text.txt',"okatt");

// READ STREAM-: Reads STREAM - bit by bit













//SERVER

const http = require('http');


//createServer- takes callback
// const app=http.createServer((req,res)=>{
//     console.log("Request received",req.url) //to get url of request we use .url

//     //TO GET KEYS THAT CAN BE USED
//     console.log(Object.keys(req));

//     //response.setHeader('Content-type','text/html');
//     // res.setHeader('X-Response-Time', Date.now().toString());
//     res.setHeader('Content-Type','application/json');
//     res.end(JSON.stringify({name:'na',age:18}));

//     // res.end("welcome!"); //for ending response we CAN ONLY send string or array.
//     // res.end("DONE");
// });
// app.listen(1000);
// console.log("DONE");    




//SENDING HTML FROM SERVER SIDE 

const app=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end(`
        <html lang="en">
        <head>
        <style>
        body{
        padding: 24px;
        background-color: pink;
        font-size:38px;
        }
        </style>
        </head>
        <body>
        <h1>
        I hope this works! hehe
        </h1>
        <input type='password'/>
        </body>
        </html>
        `);
});
app.listen(1000);
console.log("DONE"); 

