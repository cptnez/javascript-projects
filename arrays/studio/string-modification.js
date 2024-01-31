const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

// newStr = str.slice(3) + str.slice(0, 3);
// console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

// console.log(`This word, ${str}, in the first string. This word, ${newStr}, is the second string.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

userInput = input.question('Please enter a number: ');
thirdStr = str.slice(userInput) + str.slice(0, userInput);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userInput > str.length) { 
    thirdStr = str.slice(3) + str.slice(0, 3);
    console.log(`Opps! Your selection of ${userInput} has been changed to 3.`);
 }



console.log(`The answer is ${thirdStr}.`);