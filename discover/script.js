//---- LES FONCTIONS -----
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
const doc = document.getElementById("body");
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
            alert("change your username");
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

// let int = 0;

// while (int < 11) {
//     console.log(int);
//     int += 1;
// }

for (int = 0; int <= 10; int += 1) {
    console.log(int);
}

// variable scope 
// a declared variable as eather a local or a global scope
// if it's declared in a global scope else it's a local scope
function test1() {
    const localVar =  0;
    console.log(localVar);
}
function test1() {
    console.log(a);
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

numbers.forEach(display);

function display(number) {
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

//TODO:Reprendre a la parti class  https://youtu.be/lfmg-EJ8gm4?t=19108