// Opdracht 019: Function return statements

console.log('Hallo Winc Academy studenten');

// Checking if a number is big
const bigNumber = function (numberBig) {

    if (numberBig >= 100) {
        return "true";
    }
    return "false";
};

console.log(bigNumber(101));
console.log(bigNumber(90));

// Bouncer at a club
const bouncer = function (maxPeople, currentPeople, agePeople) {

    if (currentPeople <= maxPeople) {
        if (agePeople < 18) {
            return "this is a club for adults";
        } else {
            return "come in";
        }
    } else {
        return "it's too busy now, come back later";
    }
};

console.log(bouncer(100, 50, 25));
console.log(bouncer(50, 100, 25));
console.log(bouncer(100, 50, 15));
console.log(bouncer(50, 100, 15));



// Opdracht 019 - Calculating the average
// Return statement with an array
const averageArray = function(numbers){
    const countAverage = ((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4])/ 5);
    return countAverage;
};

const result5 = averageArray([5, 10, 15, 20, 30]);
console.log(result5);

