console.log("RUNNING...");

//REPL Property- Read Evaluate Process Loop

// Module: writing a file that can be used in other files

const addition=(a=0,b=0)=>{
    return a+b;
}
const subtraction=(a=0,b=0)=>{
    if(a>b){
        return a-b;
    }
    else{
        return b-a;
    }
}

//This will export only a FUNCTION
// module.exports=addition;

//To export entire module, use a datastructure
//Using OBJECT

module.exports={
    add:addition,
    sub:subtraction
};