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


sub = document.querySelector(".sub").addEventListener("click", function () {
    sub_count();
});

function sub_count(input) {
    number -= 1;
    count.innerHTML = number;
}

add = document.querySelector(".add").addEventListener("click", function () {
    add_count();
});

function add_count(input) {
    number += 1;
    count.innerHTML = number;
}


reset = document.querySelector(".reset").addEventListener("click", function () {
    reset_count();
});

function reset_count(input) { 
    number = 0;
    count.innerHTML = number;

};