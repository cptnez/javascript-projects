// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return the value of 'organization' as 'non-profit'", function(){
   expect(launchcode.launchcode.organization).toBe('non-profit');
 });
 test("should return the value of 'percentageCoolEmployees' as 100", function(){
  expect(launchcode.launchcode.percentageCoolEmployees).toBe(100);
});
test("should return the value of 'executiveDirector' as 'Jeff'", function(){
  expect(launchcode.launchcode.executiveDirector).toBe('Jeff');
});
test("should return the value of 'programsOffered' as [array]", function(){
  expect(launchcode.launchcode.programsOffered).toBe["Web Development", "Data Analysis", "Liftoff"];
});
test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function(){
  let output = launchcode.launchOutput(2);
  expect(output).toBe('Launch!');
});
test("When passed a number that is ONLY divisible by 3, return 'Code!'", function(){
  expect(launchcode.launchOutput(3)).toBe('Code!');
});
test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", function(){
  expect(launchcode.launchOutput(5)).toBe('Rocks!');
});
test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", function(){
  expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
});
test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
});
test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", function(){
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
});
test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function(){
  expect(launchcode.launchOutput(30).toBe('LaunchCode Rocks!'));
});
// test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function(){
//   expect(launchOutput[0 || NaN]).toBe['Launchcode Rocks!'];
// });


  // Write your unit tests here!
  

});
