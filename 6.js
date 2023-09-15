/*Write a function that asynchronously fetches data from a API [https://jsonplaceholder.typicode.com/todos/1] and logs the result to the console. */

async function getTypicode(){
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await responce.json()
    console.log(data);
}

getTypicode()