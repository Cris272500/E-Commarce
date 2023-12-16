const artDama = document.getElementById("arts1");
const artCaballero = document.getElementById("arts2");
const lupa = document.getElementById("lupa");

const desp1 = document.getElementById("off1");
const desp2 = document.getElementById("off2");
const desp3 = document.getElementById("off3");
const desp4 = document.getElementById("off4");

const desp2_1 = document.getElementById("off2_1");
const desp2_2 = document.getElementById("off2_2");
const desp2_3 = document.getElementById("off2_3");
const desp2_4 = document.getElementById("off2_4");


artDama.addEventListener("click", ()=> {
  desp1.classList.toggle("desactivado");
  desp2.classList.toggle("desactivado");
  desp3.classList.toggle("desactivado");/*EL TOGGLE FUNCIONA CON UN SOLO ELEMENTO*/
  desp4.classList.toggle("desactivado");
});

artCaballero.addEventListener("click", ()=> {
  desp2_1.classList.toggle("desactivado");
  desp2_2.classList.toggle("desactivado");
  desp2_3.classList.toggle("desactivado");/*EL TOGGLE FUNCIONA CON UN SOLO ELEMENTO*/
  desp2_4.classList.toggle("desactivado");
});

lupa.addEventListener("click", ()=> {
  lupa.classList.toggle("escalar");
});