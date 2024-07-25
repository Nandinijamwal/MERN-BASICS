const http=require('http');
const fsP=require('fs/promises');
const url=require('url');

const { readFile } = require('fs');

const createLog =(req)=>{
    fsP.appendFile('./log.txt','Request: ${req.url} ${new Date().toISOString()}\n');
}

//HOME PAGE
const HomePageResponse =async (req,res)=>{
    const data =await fsP.readFile('./pages/homepage.html');
    res.end(data);
}

//FOR LOOP TO GET MULTIPLE CARDS
const getcard= async()=>{
    const JSONfile =await fsP.readFile('./data.json',{encoding:'UTF-8'});
    let cardTexttemp=await fsP.readFile('./pages/card.html',{encoding: 'UTF-8'});
    const jsarr=(JSON.parse(JSONfile));

    const resarr=jsarr.map((ele)=>{
        let cardText=cardTexttemp;
        const title= ele.title;
        const description=ele.description;
        const imgSrc=ele.thumbnail;

        cardText=cardText.replace('$title$',title);
        cardText=cardText.replace('$description',description);
        cardText=cardText.replace("$src",imgSrc);

        return cardText;
    })
const resarr1=resarr.join('');
console.log(resarr1);
    
}

//PRODUCT PAGE
const ProductPageResponse =async (req,res)=>{
    const data =await fsP.readFile('./pages/productpage.html',{encoding: 'UTF-8'});
    const cardText= await getcard();
    const productsPageHTML = data.replace('#root#', cardText);
    res.end(productsPageHTML);
}

//ERROR PAGE
const ErrorPage =async (req,res)=>{
    const data =await fsP.readFile('./pages/errorpage.html');
    res.end(data);
}

const app=http.createServer((req,res)=>{
    createLog(req);
    res.setHeader('Content-Type','text/html');
    //to get port/url info
    //console.log(req.query,req.params,req.url);

    //TO STORE
    const route= req.url;
    const {pathname,query}= url.parse(route);

    // console.log(data);
    switch(pathname){
        case '/':{
           HomePageResponse(req,res);
           break;
        }
        case '/products':{
           ProductPageResponse(req,res);
           break;
        }
        default:{
           ErrorPage(req,res);
           break;
        }
    }
}
);

app.listen(1400, ()=>{
    console.log('--------------- SERVER ON --------------- ')
});