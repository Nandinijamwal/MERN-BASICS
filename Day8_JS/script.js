//forEach doesn't return anything

const arr=["ithem1",2,3433,'ok'];
arr.forEach((a,b,c)=>{
    console.log(a,'-',b,'-',c);
})

//We use "map", it returns value in an array

const res= arr.map((a)=>{
    console.log(a);
    return 'I am okay';
})
console.log(res);

//filter- it filters out the elements of array and give needed element's array

const arr1=[1,2,3,4,5,6,7,8];
const res2=arr1.filter((x)=>{
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}
)

console.log(res2);

//REDUCE- reduces whole array into a single value.
//Can convert array into objects and vice-verse.
const arr2=[11,21,31,41];
const res3=arr2.reduce((acc,a,b,c)=>{
    console.log(acc,a,b);
    return acc+a;
})

console.log(res3);

//can give INITIAL values
const arr3=[11,21,31,41];
const res4=arr2.reduce((acc,a,b,c)=>{
    console.log(acc,a,b);
    return acc+a;
},100)

console.log(res4);

//CONCATINATION
const arr4=[11,21,31,41];
const res5=arr2.reduce((acc,a,b,c)=>{
    console.log(acc,a,b);
    return acc+a;
},'')

console.log(res5);

//Array conversion
const arr5=[11,21,31,41];
const res6=arr2.reduce((acc,a,b,c)=>{
    console.log(acc,a,b);
    acc.push(a);
    return acc;
},[])

console.log(res6);