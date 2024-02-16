// document.addEventListener("DOMContentLoaded", function () {todo el código}) Para cargar completamente el js, antes de ejecutarse.

const magicButton = document.querySelector(".magic-button");
const resultConversion = document.querySelector(".result-conversion");
const inputNumbers = document.querySelector("#input-numbers");
const soundFail = document.getElementById("sound-fail");
const soundStrike = document.getElementById("sound-strike");

const mainMachine = document.querySelector('.main-machine');

magicButton.addEventListener("click", resolver);
/* magicButton.addEventListener('contextmenu', function (event) {
    event.preventDefault()
}) // click derecho a button */

inputNumbers.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        resolver();
    }
})

function resolver() {
    
    const numero = inputNumbers.value;    
    const numberConverted = convertToRoman(numero);
    
    if (numberConverted === "Máximo excedido '3999'.") {
        soundFail.play();
        resultConversion.innerText = "Maximum Exceeded '3999'";
        
    } else if (numberConverted === "" || numberConverted <= 0) {
        soundFail.play();
        resultConversion.innerText = "Minimum 1";
    
    } else {
        soundStrike.play();
        resultConversion.innerText = numberConverted;
    }
};

/* const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
});  // click derecho a imgs  */

mainMachine.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});