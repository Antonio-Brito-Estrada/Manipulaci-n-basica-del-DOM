alert("Hola mundo");


const h1 = document.querySelector("h1");
const input1 = document.querySelector("#id1");
const form = document.querySelector("#from");
const input2 = document.querySelector("#id2");
const btn = document.querySelector("#idButtton");
const res = document.getElementById("resultado");
// var arr = [ 1,2,3,4,5],
//  arreglo = document.getElementById("id");
//  arreglo.innerHTML = ´
 btn.addEventListener("click", prueba);
//  form.addEventListener("click", prueba);
//  ´;
function prueba() {
    res.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}