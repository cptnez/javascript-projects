// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hrsToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hrsToMars / 24;

// Print the results of the space mission calculations below
console.log("The " + shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hrsToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hrsToMoon / 24;
// Print the results of the trip to the moon below
console.log("The " + shuttleName + " will take " + daysToMoon + " days to reach the Moon.");