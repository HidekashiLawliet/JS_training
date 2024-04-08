const display = document.getElementById("display");
// const equal = document.getElementById("equal");

function toDisplay(input) {
    display.value += input;
    console.log('temp');
}

function calc() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error: " + TypeError;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calc();
    }
});

document.getElementById("clean").addEventListener("click", function () {
    clearDisplay();
});

function clearDisplay(input) {
    display.value = "";
}
