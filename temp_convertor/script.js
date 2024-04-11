let FtC = document.querySelector(".FtC");
let CtF = document.querySelector(".CtF");
let number = document.querySelector(".temperature");
let tempBox = document.querySelector(".temp");
let btn = document.querySelector(".convert");
let temp = number.value;

btn.onclick = function () {
    convertTemp();
}

function convertTemp() {
    if (CtF.checked) {
        console.log("prout");
        convertFarToCel(temp);
    }
    if (FtC.checked) {
        console.log("prout");
        convertCelToFar(temp);
    }

}

function convertFarToCel(number) {
    number = (number * 9/5) +32
    tempBox.innerHTML = number;
}
function convertCelToFar(number) {
    number = (number - 32) * 5/9;
    tempBox.innerHTML = number;
}