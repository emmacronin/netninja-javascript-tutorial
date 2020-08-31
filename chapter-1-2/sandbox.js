// alert("Pop-up bericht in Js");

console.log(123456789)

// let is een variabele die kan veranderen

// camelCase

let myAge = 25

myAge = 26

// const is een variabele die niet mag veranderen, anders error

const leven = 42

console.log(myAge, leven)


// STRINGS

console.log("hello, world");

let email = "nermin@secrid.com";

console.log(email);

// string concatenation - samenvoegen

let firstName = "Nermin";
let lastName = "Camo";
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

// getting characters

let initials = firstName[0] + lastName[0];

console.log(initials);

// string length

let lettersName = fullName.length - 1;

console.log(lettersName);

// string methods - let op bij methods () erbij!

console.log(fullName.toUpperCase());

// .indexOf vindt de index/nummer van hetgeen wat je zoekt (parameter? argument?)

let index = email.indexOf('@');
let indexPlus1 = index + 1;

console.log("@ = " + `${indexPlus1}`);

let result = email.slice(0, 6);

console.log(result);

result = email.substr(6, 20);

console.log(result);

result = email.replace('in', 'ini');

console.log(result);

// let wordt niet vervangen door de method, result pakt steeds volledige email, niet wat er in de result ervoor was

result = email.replace('n', 'v');

console.log(result);


// MATH

// math operators: +, -, *, /, ** (TO THE POWER OF), % (REMAINDER)
// ++ is 1 optellen, += x is x optellen --> dan hoef je niet Z = Z + X te schrijven, maar Z += X

let likes = 10;

// likes = likes + 1;

// likes++;

// likes = likes + 10;

likes += 10;

console.log(likes);

// NaN = Not a Number

console.log(10 / "paars");

// template strings

const title = 'Best Reads of 2019';
const author = 'Mario';
const likesAmount = '30';

// concatenation way
let resultTemplate1 = 'The blog called ' + title + ' by ' + author + ' has ' + likesAmount + ' likes.';
console.log(resultTemplate1);

// template string way --> met BACTICKS niet met SINGLE of DOUBLE QUOTES
let resultTemplate2 = `The blog called ${title} by ${author} has ${likesAmount} likes.`;
console.log(resultTemplate2);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likesAmount} likes.</span>
`;
console.log(html);


// ARRAYS 

let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas[1]);

// vergeet niet () van de concat method!
let resultArray = ninjas.concat(['ken', 'crystal']);

console.log(resultArray);
console.log(ninjas);

// concat() verandert originele array niet, push() en pop() wel
let resultArray2 = ninjas.push('ken');

console.log(resultArray2);
console.log(ninjas);

let resultArray3 = ninjas.pop();

console.log(resultArray3);
console.log(ninjas);


// BOOLEANS

let resultBoolean1 = email.includes('@');

console.log(resultBoolean1);

// == is het gelijk??
console.log(myAge == 25);
console.log(myAge == 26);

// Js maakt van string een getal voordat het waarde checkt - checkt WAARDE
console.log(myAge == '26');

// nog meer === checkt WAARDE en TYPE, 26 is NIET meer gelijk aan '26'
console.log(myAge === '26');

// != is het NIET gelijk??
console.log(myAge != 30);

console.log(myAge > 20);
console.log(myAge >= 26);


// TYPE CONVERSION

let score = '100';

// zonder type conversion is het een string, '100' + 1 = '1001'

score = Number(score);

console.log(score + 1);

// checken wat het type is, string of number
console.log(typeof score);