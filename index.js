
// const posts = [
//     {title:'post one',body:'This is post one'},
//     {title:'post two',body:'This is post two'},
// ];

// function getPosts(){
//     setTimeout(() =>{
//         let output = '';
//         posts.forEach((post) =>{
//             output += `<li>${post.body}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             posts.push(post);

//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error: Something went wrong!');
//             }
//         },2000);
//     });
// }

// createPost({title:'post three',body:'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));



//async / await
//  async function init(){
//      await createPost({title:'post three',body:'This is post three'});

//      getPosts();
// }

// init();


// async /await / fetch


async function fetchUsers(){
    const res = await fetch('./data.json');
    const data = await res.json();
    const {latitude,longitude} = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;  
    // console.log(data);
}

fetchUsers()

// promiseAll

// const promise1 = Promise.resolve('Hello world!');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>
//     setTimeout(resolve,2000,'Goodbye')
// );

// const promise4 = fetch('./data.json').then(res => res.json())


// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));