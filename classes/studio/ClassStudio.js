//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScores(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let sum = 0; 
       for (let i = 0; i < this.scores.length; i++){
        sum += this.scores[i];
       }
        return Math.round(sum / this.scores.length);
    }
    status() {
        let avg = this.average
        if (avg >= 90) {
            return "Accepted";
        } else if (avg >= 80){
            return "Reserve";
        } else if (avg >= 70) {
            return "Probationary";
        } else if (avg <= 69) {
            return "Rejected";
        } else {
            return "YO DUMB"
        }
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]) 


 console.log(merryMaltese.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
