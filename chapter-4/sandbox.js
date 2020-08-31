// FUNCTIONS

// declaring a function

function greet() {
    console.log("HELLO");
}

// calling a function

greet();

// function expression, starting a function inside a variable
// LET OP, hier wel een; aan het einde, boven niet

const speak = function () {

    console.log("WORDS")

};

speak();

// function declaration wordt ge-HOIST en een function expression
// de definitie van de declaration function kan NA de oproep komen, een expression niet

declaration();

function declaration() {
    console.log("Dit werkt nog gewoon.");
}

// expression();

// const expression = function () {

//     console.log("Dit werkt niet meer.")

// };


// toevoegen van arguments and parameters

// parameter is hetgeen wat in function (parameter) staat, een argument is hetgeen wat staat als je de funtion oproept const(argument)

const hi = function (name = 'Luigi', day = 'day') {

    console.log(`Good ${day} ${name}`);

};

// dit doet niks omdat de value alleen in de function geldt! 
// console.log(name);

// hoeft niet nog een keer de loggen, want dat zit al in de funtie
// console.log(hi('Mario'));

// zonder argument wordt default gebruikt, in dit geval 'Luigi' en 'day'
hi();
hi('Mario', 'morning');


// waarom function hiervan maken? function en een varaibele?

const calcArea = function (radius) {

    let area = 3.1415 * (radius ** 2);

    // dit is niet handig, je kan area alleen in de function gebruiken en niet er buiten!
    // console.log(area);

    // hier zeg je om het 'terug te geven', dus hiermee kan het buiten de function leven!
    return area;

}

// waarom const en niet let hier?
const areaBuitenFunction = calcArea(5);
console.log(areaBuitenFunction);


// variable in deze functie hoeft dus niet!!

const calcArea2 = function (radius2) {

    // let op return is gewoon simpel er voor, geen haken, punten, isjes nodig!
    return 3.1415 * (radius2 ** 2);

};

// doe gewoon zelf een let maken hoor
let area2 = calcArea2(5);
console.log(area2);

// but wait, there's more...
// even testen hoe het werkt om met meerdere functions te rekenen (reuse a value)

const calcLolz = function (area2) {

    return (area2 * 2);

};

let area2Verdubbeling = calcLolz(area2);

console.log(area2Verdubbeling);

// ARROW FUNCTIONS!!!

// met 1 parameter kunnen de (haakjes) zelfs weg, nog kortere syntx! Bij 0 en meerdere wel (haakjes)!

// const calcAreaArrow = radius3 => {

//     return (3.1415 * radius3 ** 2);

// };

// je hoeft niet eens RETURN te schrijven joh
const calcAreaArrow = radius3 => 3.1415 * radius3 ** 2;

let areaArrow = calcAreaArrow(5);
console.log(areaArrow);

// zelf proberen van normale function naar arrow function

const greet2 = function () {
    return 'hello world';
};

const greet2Arrow = () => 'hello world';

const result = greet2Arrow();
console.log(result);


const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

const billArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(billArrow([10, 15, 30], 0.2));


// VERSCHIL FUNCTIONS EN METHODS

const name = 'Banaan';

// functions

const functionVersusMethod = () => `Hoi ${name}`;
let result1 = functionVersusMethod();
console.log(result1);

// methods

let result2 = name.toUpperCase();
console.log(result2);


// CALL BACK FUNCTIONS - function als parameter in een andere functie

let people = ['Mario', 'Luigi', 'Peach', 'Bowser', 'Toad', 'Wario'];

// people.forEach(function (person) { console.log(person) });

// people.forEach(person => console.log(person));

people.forEach((person, index) => console.log((1 + index), person));


// HTML ACTION!

const ul = document.querySelector('.people');

let html = '';

// people.forEach(function (person) {

//     html += `<li style = "font-size: 30px; list-style-type: none;">${person}</li>`;

// });

people.forEach(person => html += `<li style = "font-size: 30px; list-style-type: none;">${person}</li>`);

ul.innerHTML = html;
