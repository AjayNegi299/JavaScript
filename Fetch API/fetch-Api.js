const gitUrl = 'https://api.github.com/users/AjayNegi299'


// const promise = fetch(gitUrl)
// console.log(promise);

//use async await

const getdata = async ()=>{
    console.log('Loading data........');
    let Response = await fetch(gitUrl)
    console.log(Response);
}