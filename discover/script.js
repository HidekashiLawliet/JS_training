const doc = document.getElementById("body");
let pseudo = document.querySelector(".pseudo");
let username = document.querySelector(".username");
let count = document.querySelector(".count");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let reset = document.querySelector(".reset");
let number = 0;

// display the name enter in the txt box
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
        console.log("Invalid day");
        break;
}


//---------------------------