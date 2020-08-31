// OBJECTS
// een telefoon heeft een grootte, model, kleur en kan bellen, appen, mailen (etc.)
// een user heeft een naam, email en kan inloggen, uitloggen
// een blog post heeft een titel, content en auteur en kan worden gepublished, unpublished, verwijderd

console.log('TEST');

// onject literals
// maak je met {}, net zoals een array zit in []

let user = {

    // 1 property --> key: 'value' (een key value pair)
    name: 'Crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'Berlin',
    // blogs: ['Why mac & cheese rules', '10 things to make with marmite'],

    // hier worden objects geplaatst in de array (zie onderaan). ook moet je on logBLogs naar deze .title worden verwezen!
    blogs: [
        { title: 'Why mac & cheese rules 2', likes: 29 },
        { title: '10 things to make with marmite 2', likes: 76 }
    ],

    // je kan ook methods/function toeveogen in de object
    // WAAROM KAN IK NIET DE VARIABELE (NAME) NIET GEBRUIKEN? Jawel, met this!
    login: function () {
        console.log(`${this.name} logged in`)
    },
    logout() {
        console.log(`${this.name} logged out`)
    },

    // cycle door array
    // DIT IS NEXT LEVEL, HIER GING HET MIS !!

    logBlogs: function () {

        console.log(`${this.name} has written the following blogs:`);

        this.blogs.forEach(blog => {
            console.log(blog.title);
        })
    }

    // arrow function maken KAN NIET! arrow functions nemen 'this' van de window en niet van de object zelf

    //     logBlogs: () => {

    //         console.log(`${this.name} has written the following blogs:`);

    //         this.blogs.forEach(blogs => {
    //             console.log(blogs);
    //         })
    //     }


    // wat wel kan is ': function' weghalen ! shorthadn versie :)

    //     logBlogs() {

    //         console.log(`${this.name} has written the following blogs:`);

    //         this.blogs.forEach(blogs => {
    //             console.log(blogs);
    //         })
    //     }


};

user.logBlogs();

// console.log(user);
// console.log(user.name);
// console.log(user['name']);

// user.age = 35;
// user['age'] = 31;

// console.log(user.age);
// console.log(user['age']);

// console.log(typeof user);

user.login();
user.logout();


//  je kan ook objects in arrays maken

// const blogs = [
//     { title: 'Why mac & cheese rules 2', likes: 29 }, 
//     { title: '10 things to make with marmite 2', likes: 76 }
// ];


// math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random number


const random = Math.random();

// willekeurig getal tussen 0 en 1
console.log(random);

// willekeurig getal tussen 1 en 100 - let opt (random * 100), niet (random) * 100 - dan is het alleen 0 of 100
console.log(Math.round(random * 100));


// PRIMITIVE & REFERENCES VALUES

// primitive values 'stacken', ze worden 1 voor 1 na elkaar in volgorde gelezen
// dus scoreOne = 50, scoreTwo = scoreOne, scoreOne = 100 --> scoreTwo = 50
// als je dit in een object had geplaatst werd het een reference values en gaat het alleen om de verwijzing
// userOne = {name: Player 1 ,score: 50}, userTwo = userOne, userOne = {name: Player 1 ,score: 100} --> userTwo.score = 100

// primitive value

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Player 1 scored: ${scoreOne}`, `Player 2 scored: ${scoreTwo}`);

scoreOne = 100;

console.log(`Player 1 scored: ${scoreOne}`, `Player 2 scored: ${scoreTwo}`);

// relative value

userOne = { name: 'Player 1', score: 50 };
userTwo = userOne

console.log(`${userOne.name} scored ${userOne.score}`);
console.log(`Player 2 scored ${userTwo.score}`);

userOne.score = 100;

console.log(`${userOne.name} scored ${userOne.score}`);
console.log(`Player 2 scored ${userTwo.score}`);