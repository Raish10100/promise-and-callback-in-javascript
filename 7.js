/*Create an asynchronous function that retrieves data from two diffrent API endpoints:"https://jsonplaceholder.typicode.com/todo/1" and "https://jsonplaceholder.typicode.com/posh/1" . The first API returns a to-do task,While the second API provides post details.The function should combine the results from both APIs and log them as an object,where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs. */




 
async function fetchDataFromMultipleAPIs(){
    const todo = await fetch("https://jsonplaceholder.typicode.com/todo/1")
    const post = await fetch("https://jsonplaceholder.typicode.com/posh/1")

    const todoData = await todo.json()
    const postData = await post.json()

    const combinedData = {
        todo : console.log(todoData),
        post : console.log(postData),
    }

    console.log(combinedData);
}

fetchDataFromMultipleAPIs()