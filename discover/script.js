/*

todo Mark commment todo

? interogation

! warning

* basic comment

//?  the double slash underline the line

*/


// ! ---- LES FONCTIONS -----
function NameOfFunction(name, age) {
    console.log(`Happy Birthday ${name}! You are ${age} years old`);
}

// une fonction doit etre appeler pour l'utiliser
NameOfFunction("John", 25);

//----------------------

// check email address
function IsValidEmail(email) {
    
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

console.log(IsValidEmail("john@gmail.com"));
console.log(IsValidEmail("johngmail.com"));

//-------------------


// display the name enter in the txt box
let pseudo = document.querySelector(".pseudo");
let username = document.querySelector(".username");
let count = document.querySelector(".count");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let reset = document.querySelector(".reset");
let number = 0;

function display() {
    if (input.value === "") {
        alert("Please enter your username first");
    } else {
        temp = username;
        username = input.value;
        if (username === temp) {
            alert("change your username");qsq
        }
        console.log(input.value);
        pseudo.innerHTML = input.value; 
    }
    
}
// --------------


// counter function
sub = document.querySelector(".sub").addEventListener("click", function () {
    sub_count();
});

function sub_count() {
    number -= 1;
    count.innerHTML = number;
}

add = document.querySelector(".add").addEventListener("click", function () {
    add_count();
});

function add_count() {
    number += 1;
    count.innerHTML = number;
}

reset = document.querySelector(".reset").addEventListener("click", function () {
    reset_count();
});

function reset_count() { 
    number = 0;
    count.innerHTML = number;
    
};

// --------------------------


// guess number function
let guess_nbr = document.querySelector(".guess_number");
let num_guess = Math.floor(Math.random() * 101);
let valid = document.querySelector(".valid_num");
let nb_guess = document.querySelector(".nb_guess");
let num = 0;
let try_count = document.querySelector(".try_count");
let count_nbr = 0;
console.log(num_guess);


guess_nbr.onclick = function () {
    if (valid.value == num_guess) {
        count_nbr += 1;
        nb_guess.innerHTML = "You got it!";
        try_count.innerHTML += count_nbr;
        console.log("You got it!");
    } else {
        count_nbr += 1;
        nb_guess.innerHTML = "Wrong, sorry try again";
        console.log("Wrong!");
    } 
}

//---------------------------

// check box

let RememberMe = document.querySelector(".RememberMe");
let visaBtn = document.querySelector(".visaBtn");
let masterCardBtn = document.querySelector(".MasterCardBtn");
let paypalBtn = document.querySelector(".PayPalBtn");
let payment_btn = document.querySelector(".payment_btn");
let payment_methode = document.querySelector(".payment_methode");
let remember_me = document.querySelector(".remember_me");

payment_btn.onclick = function () {
    if (RememberMe.checked) {
        remember_me.innerHTML = "You will be remembered";
        console.log("checked");
    }
    if(visaBtn.checked) {
        console.log('ENCULE TON CACTUS')
        payment_methode.innerHTML = "";
        payment_methode.innerHTML += "Visa";
    } else if(masterCardBtn.checked) {
        payment_methode.innerHTML = "";
        payment_methode.innerHTML += "MasterCard";
    } else {
        payment_methode.innerHTML = "";
        payment_methode.innerHTML += "Paypal";
    }
}

//  ternary operator
let age = 21;
let age_message = age >= 18 ? "You are old enough to buy a car" : "You are not old enough to buy a car";
console.log(age_message);
//---------------------------


// switch case

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a day of the week.`);
        break;
}

let test_score = 76;
let grade = '';

// check if the case == true and if it true then the grade will be the letter grade
switch(true){
    case test_score >= 90:
        grade = 'A';
        break;
    case test_score >= 80:
        grade = 'B';
        break;
    case test_score >= 70:
        grade = 'C';
        break;
    case test_score >= 60:
        grade = 'D';
        break;
    case test_score >= 50:
        grade = 'E';
        break;
    default:
        grade = 'F';
        break;
}
//---------------------------

//strings methode 

/// too much string methode can be used
// .trim -> enleve les espace comme un .join
// .toUpperCase -> en majuscule
// .toLowerCase -> en minuscule
// .repeat(x) -> x fois la chaine
// .startWith -> commence par la lettre demander et return un bool
// .endsWith -> finie par la lettre demander et return un bool
// .include comme startWith et endWith mais pourtout dans la string
// .remplaceAll("-", "") remplace toutes les occurences du charactere 1 par le charactere 2
// .padStart(x, character) -> ajoute des characteres en debut de la string jusqu'a obtenir une string de la taille de X
// .padEnd(x, character) -> ajoute des characteres en fin de la string jusqu'a obtenir une string de la taille de X
// charAt prend le charcatere x de la variable et .slice separe apres le charcatere x


let pseudonyme = "hidekashi";
console.log(pseudonyme.charAt(0).toUpperCase() + pseudonyme.slice(4));

// ----------------------------------


// string slicing

const full_name = "Hidekashi Lawliet"

let first_name = full_name.slice(0, full_name.indexOf(" "));
let last_name = full_name.slice(full_name.indexOf(" ") + 1);

//-----------------------------------

// methode chaining

//no methode chaining
// let username2 = window.prompt("Enter your username");

// username2 = username2.trim()
// let letter = username2.charAt(0)
// letter = letter.toUpperCase()

// let otherChars = username2.slice(1);
// otherChars = otherChars.toLowerCase();

// console.log(letter + otherChars);


//methode chaining

let username3 = window.prompt("Enter your username");

username3 = username3.trim().charAt(0).toUpperCase() + username3.trim().slice(1).toLowerCase();

console.log(username3);
//----------------------------------

// while loop / for loop

let int = 0;

// while (int < 11) {
//     console.log(int);
//     int += 1;
// }

for (int = 0; int <= 10; int += 1) {
    console.log(int);
}

// variable scope 
// a declared variable as ether a local or a global scope
// if it's declared in a global scope else it's a local scope
function test1() {
    const localVar =  0;
    console.log(localVar);
}

// ------------------

// array
let fruits = ["apple", "cherry", "banana", "grape", "orange", "mango"];
console.log('---------------------------------------')
// .sort, sort array in alphabetic order
console.log(fruits.sort());
// .reverse, sort array in reverse alphabetic order
console.log(fruits.sort().reverse());
console.log('---------------------------------------')
console.log(fruits.length)
console.log(fruits.indexOf("apple"))
// --------------------

// spread operator (...)= expend array or string into separate elements
// can be also use to accept an infinite number of arguments
let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = Math.max(...Num);
console.log(max);
//

// rest parameters = the opposite of spread operator
function OpenFridge(...args) {
    console.log(args);
}

const food1 = "apple";
let food2 = "pizza";
let food3 = "burger";
let food4 = "chicken";

OpenFridge(food1, food2, food3, food4);

//----------------------------

// password generator

function generatePassword() {
    let pass = ''
    const passLenght = 17;
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}|:"<>?,./;';
    let allowedChars = lowerCaseChars + upperCaseChars + numbersChars + specialChars;

    for(let i = 0; i <= passLenght; i++) {
        const radomIndex = Math.floor(Math.random() * allowedChars.length);
        pass += allowedChars[radomIndex];
    }
    console.log(pass);
    return pass;
}
const passLenght = 12;

generatePassword();

//----------------------------

// callback = function pass as an arg to one other function

hello(GB);
function hello(callback) {
    console.log("hello");
    callback();
}

function GB() {
    console.log("good bye");
}

//----------------------------


// forEach() = iterate over the elements of the array 

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(display0);

function display0(number) {
    console.log(number);
}

// .map() = accept a callback and applies that function to each element of the array then return a new array, use to keep the first array untouched
console.log("-----------map-----------")

const numbr = [1, 2, 3, 4, 5, 6];
const squared = numbr.map(squrd); //declare a new array to stock the result of .map "squared" in this case

console.log(squared);

function squrd(number) {
    return Math.pow(number, 2);
}

const students = ['spongbob', 'johndoe', 'patrick', 'Kenn', 'keanu reeves'];
const mapUpperStd = students.map(UpperStd);
console.log(mapUpperStd);
function UpperStd(str) {
    return str.toUpperCase();
}
//----------------------------

// .filter() = create new array by filtering the elements of the original array
                // take every value that is equal to true to stock them

let EvenNumber = numbr.filter(isEven);

console.log(EvenNumber);
function isEven(numbr) {
    return numbr % 2 === 0; // so it's equal to true
}

const ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log(ages.filter(NottooOld));

function NottooOld(nbr) {
    return nbr <= 25;
}

// .reduce() = reduce the elements of an array into a single value

let prices = [10, 20, 30, 40, 50];
let totalPrice = prices.reduce(addPrice);

console.log(totalPrice.toFixed(2));

function addPrice(total, price) {
    return total + price;
}

// object = structure en C sauf qu'on attribue directement des valeurs

let person = {
    name: "hidekashi",
    age: 21,
    job: "programmer"
}

person.name = "temp";

console.log(person);
console.log(person.name);

//----------------------------

console.log("----------------------------");

// THIS reference to object where "this" is used

const person1 = {
    name: "hidekashi",
    age: 21,
    job: "programmer",
    sayHello: function() {console.log(`hello! my name is ${this.name}`)} // c'est quoi cette idiotie a la noix serieux
}

person1.sayHello();

//----------------------------


// Constructor used to create generic structure 
        // for that need to declare "new" after the equal sign

function car(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.drive = function() {console.log(`you drive a ${this.brand}`)}
}

const car1 = new car("audi", 2019, "red");
console.log(car1);
car1.drive();

// class = (ES6 feature) provide a more structured and cleaner way to work with objects compared to traditional 
//       constructors to traditional constructor function ex. static keyword, encapsulation, inheritance

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
            console.log(`${this.name} : ${this.price.toFixed(2)}€`);
        }

        calculateTotale(salesTax){
            return this.price + (this.price * salesTax);
        }
}

const salesTax = 0.15;
const product1 = new Product("Pixel Pro 8", 1000);

product1.displayProduct();
const Total = product1.calculateTotale(salesTax);
console.log(Total)
// product1 est une class du type de Product et qui prend en parametre de son constructor "Pixel Pro 8" et 1000€"
    // il est possible d'appeler une fonction de class a l'extérieur de la classe si on l'utilise avec un objet créer avec la class dans la quel la fonction est

//-------------------------------

// static = keyword that defines properties or methods that belong to a class itself rather thant the objects created from that class (class owns anythings static, not the objects)

class MathUtil {
    static PI = 3.1415926535897932;
    static diameter(radius) {
        return radius * 2;
    }
    static circumference(radius) {
        return 2 * this.PI * Math.PI; 
    }
}

console.log(MathUtil.diameter(5));


console.log("----------------------------");
//-------------------------------


// inheritance = allows a new class to inherit properties and methods from an existing class (parents -> child)
//      help with code reusability

class Animal {
    isCute = true;

    alive(state) {
        console.log(`this ${this.name} is ${state}`);
    }

    eat(food, type) {
        // console.log(`this ${this.name}` + `is eating ${food}`);
        this.isVegan = console.log(`this ${this.name} ` + `is eating ${food} and he ` + `is ${type}`)         
    }

    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }

}



class Rabbit extends Animal {
//class will be the child of animal and inherit all his properties and methods
    name = "rabbit";
}


class Fish extends Animal {
//class will be the child of animal and inherit all his properties and methods
    name = "fish";

    swim() {
        console.log(`this ${this.name} is swimming`);	
    }
}

class Hawk extends Animal {
//class will be the child of animal and inherit all his properties and methods
    name = "hawk";
}

const rabbit = new Rabbit();
const hawk = new Hawk();
const fish = new Fish();

rabbit.eat("carrot", "vegetarian")

// console.log(rabbit.isVegan); // ! UNDEFINED CAUSE CONSOLE.LOG A FUNCTION VAR WITH NO VALUE

fish.eat('algae', 'not vegan');
fish.swim();
fish.sleep();


console.log("----------------------------");
//-------------------------------


// super = allow to call a parent class method from a child class
// super() = call the parent class method
// super.method() = call the parent class method


class Manga {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    power(nbr) {
        console.log(`${this.name} has ${nbr} power`);
    }
}

class Goku extends Manga {

    constructor(name, age, manga) {
        super(name, age);
        this.manga = manga;
    }
}

class Luffy extends Manga {
    constructor(name, age, manga) {
        super(name, age);
        this.manga = manga; 
    }
}

class Ichigo extends Manga {
    constructor(name, age, manga) {
        super(name, age, manga);
        this.manga = manga; // ! first value of ichigo. even before the super call 
    }
}

const ichigo = new Ichigo("Bleach", 21, "Ichigo");

console.log(ichigo.name);
console.log(ichigo.age);
console.log(ichigo.manga);

console.log("----------------------------");
//-------------------------------

// * getter = special method to makes a property readable
// * setter = special method to makes a property writable, set is useed to validate a property given in entry 

class rectangle{

    constructor(width, height) {
            this.width = width;
            this.height = height;
    }
    set width(newWidth) { // ! variable is 'set' so can't be read so a console.log will return <undefined>
        if(newWidth > 0) {
            this._width = newWidth; // ! using _var tel to other dev to know that this is a private proprietary so they should not touch it at all
        } else {
            console.error("width must be a positive number");
        }
    }

    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight; // ! using _var tel to other dev to know that this is a private proprietary so they should not touch it at all
        } else {
            console.error("height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

}

const rect1 = new rectangle(-1000, "pizza");
const rect2 = new rectangle(1000, 900);
console.log(rect2.width);
console.log(rect2.height);



class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName ==='string' && newFirstName.length > 2) {
            this._firstName = newFirstName; // ! if there is not the _ between the . and the var name, that will infinity loop
        } else {
            console.error('Please enter your first name');
        }
    }

    set lastName(newlastName) {
        if( typeof newlastName ==='string' && newlastName.length > 2) {
            this._lastName = newlastName;
        } else {
            console.error('Please enter your lastname');
        }
    }

    set age(newAge) {
        if( age <= 18 && age >= 120) {
            console.error('You have nothing to do on this site');
        } else {
            this._age = newAge;
        }
    }

    get firstName() {
        return this._firstName;
    }
    
    get lastName() {
        return this._lastName;
    }
    
    get age() {
        return this._age;
    }

}

const peoples = new Person("hidekashi", "lawliet", 21);
console.log(peoples.firstName);
console.log(peoples.lastName);
console.log(peoples.age);

console.log("----------------------------");
//-------------------------------



// * array of object because why not

const fruit = [
    {name: "apple", price: 10},
    {name: "banana", price: 20},
    {name: "orange", price: 30},
    {name: "grape", price: 40},
    {name: "mango", price: 50}
];

console.log(fruit[0].name);
console.log(fruit[0].price);

console.log(fruit[4].name);
console.log(fruit[4].price);

fruit.push({name: "pineapple", price: 60});

console.log(fruit[5].name);
console.log(fruit[5].price);


// fruit.pop(); // * remove element
// fruit.splice(1,2); // * remove the element fruit[1] and fruit[2]


fruit.forEach(Fruit => console.log(Fruit.name)); 


console.log("----------------------------");
//-------------------------------


// * shuffle an array

const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// ! FISHER-YAKES algorithm

shuffle(card);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]; // * swap the element of the array between i and random
    }
}

console.log(card);

console.log("----------------------------");
//-------------------------------

// * Date objects   Date(year, month, day, hours, minutes, seconds, millisecondsa)

let date = new Date(); // * if empty get the date when the script is run, else get the date given as param
let year = date.getFullYear();


console.log(date);
console.log(year);


console.log("----------------------------");
//-------------------------------



// * closure = A function defined inside another function,
// * the inner function has access to the variables and scope of the outer function
// * Allow for private variables and state maintenance
// * Used frequently in JS frameworks: React, Vue, Angular

function outer() {
    let message = "Hello World!";

    function inner() {
        console.log(message);
    }
// * anything inside the inner function is accessible from the outer function BUT if it's not called inside the OUTER function it will not be usedk
// * and the inner has access to the all variable declared in outer
    inner();
}

function increment() {
    let count = 0;
    
    function innerIncrement() {
        count += 1;
        console.log`number: ${count}`;
    }
    innerIncrement();
    innerIncrement();
    innerIncrement();
    innerIncrement();
}

// * by declaring variable inside a function, made the code safer

console.log("----------------------------");

let score = 0;

function incrementScore(points) {
    score += points;
    console.log(`+ ${points} points`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`- ${points} points`);
}

function getScore() {

    return score;
}

incrementScore(10);
decreaseScore(5);
console.log(`the finals score is ${getScore()} points`);

// ! ↑ note safe because score is declared outsiede, || safer way ↓ 

console.log("----------------------------");


function game() {
    let score = 0;

    function incrementScore(points) {
        score += points;
        console.log(`+ ${points} points`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`- ${points} points`);
    }

    function getScore() {

        return score;
    }
    return {incrementScore, decreaseScore, getScore};
}

const GAME = game();

GAME.incrementScore(10);
GAME.decreaseScore(5);

console.log(`the finals score is ${GAME.getScore()} points`);

console.log("----------------------------");
//-------------------------------

// * ES6 module =   an external file that contains reusable code that can be imported into other files. Write reusable code for many different projects.
// * Can contain variable, classes, function ... and more
// * Introduced as part  of ECMAScript 2015 update

// *  look the  math.js file for an example

import {PI, getCircumference, getArea, getVolume} from './math.js';

console.log(PI);
console.log(getCircumference(10).toFixed(2));
console.log(getArea(10).toFixed(2));
console.log(getVolume(10).toFixed(2));

console.log("----------------------------");
//-------------------------------

// * synchronuous = execute line by line consecutively in a sequential order, code that wait the previous one to finish before execute the next one
// * asynchronous = execute line by line in parallel, oposite of synchronous

// * setTimeout is one of the function that can do asynchronous

function asynch1(callback) {
    setTimeout(() => { console.log("asynchronous0")
                    callback()}, 10000);
}

function synch1() {
    console.log("synchronous0");
    console.log("synchronous1");
    console.log("synchronous2");
    console.log("----------------------------");
}

asynch1(synch1);  // * by doing like that i guaranty the sync1 function to execute after async1 function

//-------------------------------

// * ERROR = an object that is created to represent a problem that occur often with user input or establishing a connection
// * try { } = Encloses code that might potentially cause an error
// * catch { } = catch and handle any throw Errors from the try { }
// * finally { } = always executes. Used mostly for clean up ex: close files, close connections, release ressources

try {
    console.log(undefinedVar);
} catch (error) {
    console.error(error);
}
console.log("You have reached the end of the script");

console.log("----------------------------");
//-------------------------------


// * DOM = DOCUMENT OBJECT MODEL
// * Object { } that reprensents the page you see in the web browser and provides you with an API top interact with it


document.title = "red";

console.log("----------------------------");

// * DOM navigation = the process of navigating through the structure of an HTML document using JS

// * firstElementChild
// * lastElementChild
// * previousElementSibling
// * nextElementSibling
// * parentElement
// * children



//-------------------------------

// * Element selector
// * 1. document.querySelector("class")             // Return an ELEMENT or NULL
// * 2. document.getElementById("id")               // Return an ELEMENT or NULL
// * 3. document.querySelectorAll("element")        // NODELIST
// * 4. document.getElementsByClassName("class")    // HTML COLLECTION
// * 5. document.getElementsByTagName("tag")        // HTML COLLECTION


//-------------------------------
console.log("----------------------------");


// * ADD and change HTML element

// *    STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// *    STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.id = "myH1"
newH1.style.color = "white";
newH1.textContent = "I like pizza!"


// *    STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1)
// document.body.prepend(newH1)
document.getElementById("box1").append(newH1)


// *    STEP 4 REMOVE HTML ELEMENT 


//-------------------------------
console.log("----------------------------");

// * mouse event

// * eventListener = listen for specific events to create interactive web pages,
// * events: click, mouseover, mouseout
// * addEventListener(event, callback or arrow function or anonymous function)

const box2 = document.getElementById("box2");

box2.addEventListener("click", function(event) {
        console.log(event);
    event.target.style.backgroundColor = "black";
    event.target.textContent = "I like pizza!";
});

box2.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "white";
});

box2.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "";
});

const fakeButton = document.getElementById("box4");

fakeButton.addEventListener("mouseover", function(event) {
    document.title = "";
});fakeButton.addEventListener("mouseout", function(event) {
    document.title = "PROUT";
});

window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Come Back!';
    
    document.addEventListener('visibilitychange', function(e) {
      console.log(document.hidden);
      document.title = document.hidden?  `${attentionMessage} \u{1F622}` : pageTitle;  
    });
  
  };