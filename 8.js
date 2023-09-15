/*Write a javascript program that uses the Fetch method to retrieve data from an API,and then logs the data to the console.For example,you could use the Api at https://jsonplaceholder.typicode.com/posts to retrieve a list of posts,and then display them to the browser console. */

// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
