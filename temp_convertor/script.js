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
        convertFarToCel(temp);
    }
    if (FtC.checked) {
        convertCelToFar(temp);
    }

}

function convertFarToCel(number) {
    number = ((number * 9/5) +32).toFixed(2);
    tempBox.innerHTML = number;
}
function convertCelToFar(number) {
    number = ((number - 32) * 5/9).toFixed(2);
    tempBox.innerHTML = number;
}