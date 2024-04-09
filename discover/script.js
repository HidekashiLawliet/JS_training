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


guess_nbr.addEventListener("click", function () {
    guess_number();
});

function guess_number() {
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
