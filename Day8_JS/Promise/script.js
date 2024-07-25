// Promises	are	one	way	to	deal	with	asynchronous	code	in	JavaScript,	without 
//writing too many callbacks in your code.
//A	promise	is	commonly	defined	as	a	proxy	for	a	value	that	will	eventually	become
 //available.
 //CONTROL INVERSION

 //.then and .catch

//  console.log("Fectching Data... 1");

//  const res= window.fetch("https://api.github.com/users");

//  res.then((data)=>{
//     console.log('Got response:\n', data); //Getting response in READABLE STREAM
//  })
//  .catch((err)=>{
//     console.log("Error AYA HAI: ", err);
//  })

//  console.log("Fectching Data... 2");

//  const res1= window.fetch("https://api.github.com/users");

//  res1.then((data)=>{
//     const obj= data.json();
//     console.log('Got response:\n', data);
//     console.log(obj);
//     obj.then((js)=>{
//         console.log(js);
//     })
//     .catch((err)=>{
//         console.log("ERROR IN JSON");
//     })
//  })
//  .catch((err)=>{
//     console.log("Error AYA HAI: ", err);
//  })


 //Render
console.log("Fetching Data... 3");

const res2 = fetch('https://dummyjson.com/products');

res2.then((data) => {
    const obj=data.json();
    obj.then((js)=>{
        renderUI(js);
    })
    .catch((err)=>{
        console.log("ERROR",err);
    })
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

function renderUI(data) {

    const products = data.products;
    // console.log(products);

    const ftitle= products[0].title;
    const tn=products[0].thumbnail;
    console.log(ftitle,tn);

    //Insert TEXT
    //WHERE?
    const parent = document.getElementById('root');
    //WHAT?
    const ti =document.createElement('h4');
    ti.innerText=ftitle;
    //HOW?
    parent.appendChild(ti);

     //WHAT?
     const im =document.createElement('img');
     im.src=tn;
     //HOW?
     parent.appendChild(im);

