let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: 1,
   move: function (){return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let Chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let Beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 6,
   astronautId: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let Tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId: 5,
   move: function
};

let crew = [superChimpOne, salamander, Chimpanzee, Beagle, Tardigrade]

function oneCrewReport (obj) {
   // for (let i = 0; i < obj.length; i++)
      for (item in obj) {
         result = (`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautId}.`);
}
return console.log(result);
}

// oneCrewReport(Chimpanzee);

function allCrewReports (obj) {
   let result;
   for (let i = 0; i < obj.length; i++) {
      oneCrewReport(obj[i])   
}
return console.log(result);
}

// allCrewReports(crew);

function fitnessTestOne (obj) {
   for (item in obj) {
      result = (`${obj.name} took ${obj.move} turns to take 20 steps.`);
}
return console.log(result);
}

// fitnessTestOne(superChimpOne);

function fitnessTestAll(arr) {
   let result;
   for (let i = 0; i < arr.length; i++) {
      fitnessTestOne(arr[i])   
}
return console.log(result);
}

fitnessTestAll(crew);

// function fitnessTest(candidates){
//    let results = [], numSteps, turns;
//    for (let i = 0; i < candidates.length; i++){
//        numSteps = 0;
//        turns = 0;
//        while(numSteps < 20){
//        numSteps += candidates[i].move();
//        turns++;
//        }
//        results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
//    }
//    return results;
//   }

//   fitnessTest(crew);

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!