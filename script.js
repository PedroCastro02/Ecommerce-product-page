document.addEventListener("DOMContentLoaded", function () {
const aumentar = document.getElementById("botao-mais");
const diminuir = document.getElementById("botao-menos");
const display = document.getElementById("display");
let count = Number(document.getElementById("display").value);

    aumentar.addEventListener("click", () => {
        count++;
        display.value = count;
    })

    diminuir.addEventListener( "click", () => {
        if (display.value <= 0)return;     
        count--;
        display.value = count;
    })
});