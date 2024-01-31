function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

 let arrOfTwo = [ ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'], ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga']];
 
// PART 2
// function random2(arr) {
//   let newArr = [];
//   let oldArr = randomSelection(arr);
//   for (let i = 0; i < 2; i++) {
//    newArr.push(randomSelection(oldArr));
//   }
//   return newArr;
// }
// console.log(random2(arrOfTwo));

// PART 3
function random3(arr) {
  let newArr = [];
  for (let i = 0; i < 2; i++) {
   newArr.push(randomSelection(randomSelection(arr)));
  }
  return newArr;
}
// console.log(random3(arrOfTwo));
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.