const nameChange = (e)=>{
    const val=e.target.value;
    console.log(val);
}
const handleSubmit = (e)=>{
    e.preventDefault();
    const val=e.target;
    console.dir(val);

    const uname=val[0].value;
    const umail=val[1].value;
    const upw =val[2].value;
    console.log(uname, umail, upw);
}
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const val = Object.fromEntries(formData.entries());
//     console.log(val);
// }