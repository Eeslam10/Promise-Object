// 1.
// You’ll be writing your code in the code-editor, but we won’t be running it until the final step. To check your code for a step, you can press the “Check Work” button.

// We’re going to create a promise representing ordering sunglasses from an online store. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

// myExecutor() should:

// Have two parameters: resolve and reject
// Check if the sunglasses property on the inventory object has a value greater than zero
// If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
// If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'
// When you’re ready, press the “Check Work” button.


// 2.
// Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.


// 3.
// Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.


// 4.
// At the bottom of your app.js file, log orderPromise to the console.

// 5.
// In this exercise and throughout the lesson, we’ll provide you with a bash terminal to execute your code. To run the app.js program, you’ll type node app.js in the terminal and hit enter (or return). You’ll be able to see the output of the program in the terminal.

// Let’s try it! Type node app.js in the terminal and hit enter.

// If you’d like, you can see an alternate output by changing the sunglasses property in the inventory object to 0 and executing app.js from the terminal again.

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.')
    } else {
      reject ('That item is sold out.')
    }
  };
  
  const orderSunglasses = () => {
    return new Promise(myExecutor)
  };
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);