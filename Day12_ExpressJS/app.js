const express = require('express');
const fsP = require('fs/promises');

const app =express();
const PORT=1400;

//To be able to use "body", we need to explicity write the funtion below
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        status :'success',
        data:{}
    })
});

app.get('/products', async(req,res)=>{
    const productsText = await fsP.readFile('./data.json',{encoding:'utf8'});
    const productsArray= JSON.parse(productsText);
    
    res.json({
        status: 'success',
        data:{
            products : productsArray
        }
    });
})

// app.post('/products', async(req,res)=>{
//     const body=req.body;
//     console.log('Received POST request:', body);

//     const productsText = await fsP.readFile('./data.json',{encoding:'utf8'});
//     // parse -> converts JSON TEXT into JS OBJECT

//     //error handling
//     let productsArray;
//     try{
//         productsArray= JSON.parse(productsText);
//     }
//     catch(err){
//         console.log(err);
//         productsArray=[];
//     }
//     //to add id incrementing-ly
//     // let prLen= productsArray.length;
//     // let id =productsArray[prLen-1].id + 1;
//     // body.id=id

//     productsArray.push(body);
//     // stringyfy -> converts JS OBJECT into JSON TEXT
//     await fsP.writeFile('./data.json',JSON.stringify(productsArray));

//     res.json({
//         status: 'inprogress',
//         data:{
//             // products : productsArray
//         }
//     });
// })


app.post('/products', async(req,res)=>{
    const {body} = req;
    let productsArray;
    try{
        productsArray= JSON.parse(productsText);
    }
    catch(err){
        productsArray=[];
    }

    let id;
    try{
        id = productsArray[productsArray.length - 1].id+1;
    }
    catch{
        id=1;
    }
    
    body.id=id;
    productsArray.push(body);
    await fsP.writeFile('./data.json',JSON.stringify(productsArray));
    res.json({
        status:'SUCCESS',
        data: {
            product: body,
        }
    });

});



app.listen(PORT);