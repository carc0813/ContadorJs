let contador = 0;

const numero = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");

function actualizarContador() {
    numero.textContent = contador;

    if (contador >= 10) {
        numero.classList.add("rojo");
    } else {
        numero.classList.remove("rojo");
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarContador();
});

btnDecrementar.addEventListener("click", () => {
    contador--;
    actualizarContador();
});