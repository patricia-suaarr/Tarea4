window.onload=function() {
    alert("load");

    nombre.style.color="red";
}

let elemento=document.getElementById("nombre");

nombre.addEventListener("mouseover", function () {

    nombre.style.color = "green";
    nombre.innerText = (nombre.innerText).toUpperCase();

}, false)
nombre.addEventListener("mouseout", function () {
    nombre.style.color = "black";
    nombre.innerText = (nombre.innerText).toLowerCase();

}, false)