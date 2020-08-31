// for() loops
// loops hebben geen eind, dus geen ; aan het einde!
// for( START VARIABELE ; CONDITIE OM TE BEREIKEN ; DOEN AAN HET EINDE VAN EEN LOOP ){}

for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}

console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {

    console.log(names[i]);

    let html = `<div>${names[i]}</div>`;

    console.log(html);

}


// while() loops
// alleen 1 voorwaarde tussen haakjes

let j = 0

while (j < 5) {

    j++;

    console.log('in loop: ', j);
}

// do{} while() loops - doet sowieso 1x de loop, ongeacht de while voorwaarde

let k = 3;

do {
    console.log(k);
    k++;
} while (k < 5);


// if, else if en else statements (geen loop dus)

const age = 21

if (age >= 21) {
    console.log("Do whatever you want!");
} else if (age >= 18) {
    console.log("You can do some stuff.");
} else {
    console.log("You're too young to do anything.");
};


// logical operators- OR || and AND &&

const password = 'p@ssword1234';

// beide moet hier TRUE zijn
if (password.length >= 12 && password.includes('@')) {
    console.log("Strong password!");
} else {
    console.log("Password needs to be 12 characters long and include an @-symbol");
}


// logical NOT (!) --> maakt true false en false true

console.log(true);
console.log(false);
console.log(!true);
console.log(!false);


// break and continue loops

const score = [35, 91, 74, 0, 24, 82, 100, 54, 16, 30];

for (let l = 0; l < score.length; l++) {

    // continue stop met de rest van de loop en begint opnieuw (soort reset), break stopt er helemaal mee
    if (score[l] === 0) {
        continue;
    }

    console.log(`You scored ${score[l]}`);
    // console.log("You scored:", score[l]);

    // let op! hier moet de functie 'score[l]' staan en niet alleen de const 'score'
    if (score[l] === 100) {
        console.log("You've got max score!");
        break;
    }
};


// switch statements
const grade = 'A';

// als je een if statement gebruikt:
if (grade === 'A') {
    console.log('You got an awesome A!');
} else if (grade === 'B') {
    console.log('You got a not bad B');
} else if (grade === 'C') {
    console.log('You got a so-so C');
} else if (grade === 'D') {
    console.log('You got D...');
} else if (grade === 'E') {
    console.log('Ew, you got a E!');
} else {
    console.log('You got a F!!!!');
};

// als je swtich statement gebruikt:
// vergeet break; niet

switch (grade) {
    case 'A':
        console.log('You got an awesome A!');
        break;
    case 'B':
        console.log('You got a not bad B');
        break;
    case 'C':
        console.log('You got a so-so C');
        break;
    case 'D':
        console.log('You got D...');
        break;
    case 'E':
        console.log('Ew, you got a E!');
        break;
    default:
        console.log('You got a F!!!!');
};


// block scope, de let of const waarde gefefinieerd in een loop (for, if) is alleen daar geldig, niet erbuiten

let age2 = 20;

// age 20
console.log(`Your age: ${age2}`);

// age 31
if (true) {

    let age2 = 31;

    console.log(`Your age: ${age2}`);

};

// age 20!
console.log(`Your age: ${age2}`);