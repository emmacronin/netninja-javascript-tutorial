console.log("TEST");

// DOM - Document Objet Model
// je browser maakt een OBJECT van alle content, het DOCUMENT
// er zijn oneindig veel .methods die kunnen worden uitgevoerd op het docuement
// html is ROOT NODE en dan vertakt het naar head, body, h1, p, etc.
// je met een document query pak/verander/verwijder je elementen 

// const para = document.querySelector('p');
// const para = document.querySelector('.error');
const para = document.querySelector('div.error');
// je kan ook in Chrome instector 'COPY SELECTOR' doen --> body > h1

console.log(para);

// querySelector pakt er één, querySelectorAll pakt alle!
const paras = document.querySelectorAll('p');

// hier krijgn je een nodeList, dit is NIET hetzelfde als een array
console.log(paras);

// kies de tweede p
console.log(paras[1]);

paras.forEach(par => {
    console.log(par);
});

// get element by id

const pageTitle = document.getElementById('page-title');
console.log(pageTitle);

// get elements by class

// geen .error nodig want het is al gespecificeerd dat het een class is
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// .forEach kan hier NIET! Waarom? Het is geen function. Snap het nog steeds niet...
// errors.forEach(err => {
//     console.log(err);
// });

// get element by tag

// hoe is dit anders/beter dan querySelector? niet, je kan alles met querySelector volgens NetNinja

const allPar = document.getElementsByTagName('p');
console.log(allPar);
console.log(allPar[0]);


// VERANDEREN HTML CONTENT

const firstPar = document.querySelector('p');

console.log(firstPar);

// .property, geen .method()
console.log(firstPar.innerText);


console.log("EVEN EEN DUIDELIJKE SPLITSING");


// firstPar.innerText = 'Dit is de nieuwe tekst.';

const allParas = document.querySelectorAll('p');

allParas.forEach(onePara => {
    console.log(onePara.innerText);
    onePara.innerText += ' NIEUW ERBIJ';
})


const content = document.querySelector('.content');

console.log(content.innerHTML);

content.innerHTML = '<h2>DIT IS NIEUWE HTML</h2>';


const people = ['Mario', 'Luigi', 'Yoshi'];
people.forEach(character => {
    content.innerHTML += `<p>${character}</p>`;
});

// holy shit, de .getAttributie('') ging echt vaak fout! let op haakjes en aanhalingstekens
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// veranderen van attribute, ('welke veranderen', ('naar wat');
link.setAttribute('href', 'www.secrid.com');
link.innerHTML = "Secrid.com"


// veranderen van een class, de eerste 'error' wordt nu 'success'

const mssg = document.querySelector('.error');
mssg.setAttribute('class', 'success');

// waarom werkt .querySelectorAll hiet NIET???
// const mssg = document.querySelectorAll('.error');
// mssg.setAttribute('class', 'success');


// TOEVOEGEN VAN EEN TWEEDE (DERDE ETC.) STYLE, NIET ALLEEN VERVANGEN

const newTitle = document.querySelector('h1');

// newTitle.setAttribute('style', 'margin:50px');

console.log(newTitle.style);
console.log(newTitle.style.color);

newTitle.style.margin = '50px';
// camelCase in Js, geen streepjes zoals CSS
newTitle.style.fontSize = '10vw';
// lege string om het te verwijderen
newTitle.style.margin = '';


const newBody = document.querySelector('body');
newBody.style.margin = '5%';


// VERANDEREN CLASS - ERROR MESSAGE

// eerst de juist p pakken, het is de eerst

const errorSuccess = document.querySelector('p');

// dit van net zou kunnen, maar het wordt met .classList gedaan
// errorSuccess.setAttribute('class', 'success2');

console.log(errorSuccess.classList);
// errorSuccess.classList.remove('error2');
errorSuccess.classList.add('success2');


// toggle --> voegt toe als het er niet is, haalt het er af als het er al is

errorSuccess.classList.toggle('success2');
errorSuccess.classList.toggle('success2');


const errSucc = document.querySelectorAll('p');

errSucc.forEach(ptje => {

    if (ptje.textContent.includes('error')) {
        ptje.classList.add('error2');
    }

    if (ptje.textContent.includes('success')) {
        ptje.classList.add('success2');
    };

});