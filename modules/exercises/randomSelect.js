function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }

let a = [1, 2, 3, 4]
console.log(randomFromArray(a));

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
};