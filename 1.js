/*Write a function that takes in an array of integers and a callback function,and returns a new array where each elements is doubled using the callback. */
function doubleWithCallback(arr, callback) {
    const doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
      const doubledNum = callback(arr[i]);
      doubledArr.push(doubledNum);
    }
    return doubledArr;
  }
  
  function double(num) {
    return num * 2;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const result = doubleWithCallback(inputArray, double);
  console.log(result); 
  