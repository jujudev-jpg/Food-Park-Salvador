

const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container .carro");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 1250}px)`;
}


const intervalPrincipal = 5000;
setInterval(slider, intervalPrincipal);


setInterval(() => {
  box.style.transition = 'transform 0.5s'; 
  contador = 0;
  box.style.transform = `translateX(0)`;
  setTimeout(() => {
    box.style.transition = 'none'; 
  }, 1000);
}, intervalPrincipal + 1000); 
