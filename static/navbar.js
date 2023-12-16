const accesorios = document.getElementById("accesorios");//id acapite
const piel = document.getElementById("piel");
const maquillaje = document.getElementById("maquillaje");
const calzado = document.getElementById("calzado");

const evento1 = [...document.querySelectorAll(".accesorios")];//clase de los productos
const evento2 = [...document.querySelectorAll(".piel")];
const evento3 = [...document.querySelectorAll(".maquillaje")];
const evento4 = [...document.querySelectorAll(".calzado")];


//Accesorios
accesorios.addEventListener("click", () => {
  evento1.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento1.length; i++) {
      arreglo[i].classList.remove("none");
    }
  });

  evento2.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento2.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento3.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento3.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento4.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento4.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

});






//Piel
piel.addEventListener("click", () => {
  evento2.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento2.length; i++) {
      arreglo[i].classList.remove("none");
    }
  });

  evento1.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento1.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento3.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento3.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento4.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento4.length; i++) {
      arreglo[i].classList.add("none");
    }
  });
});



//Maquillaje
maquillaje.addEventListener("click", () => {
  evento3.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento3.length; i++) {
      arreglo[i].classList.remove("none");
    }
  });

  evento1.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento1.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento2.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento2.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento4.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento4.length; i++) {
      arreglo[i].classList.add("none");
    }
  });
});


//Calzado
calzado.addEventListener("click", () => {
  evento4.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento4.length; i++) {
      arreglo[i].classList.remove("none");
    }
  });

  evento1.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento1.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento2.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento2.length; i++) {
      arreglo[i].classList.add("none");
    }
  });

  evento3.forEach(function(elemento, index, arreglo) {
    for (let i = 0; i < evento3.length; i++) {
      arreglo[i].classList.add("none");
    }
  });
});