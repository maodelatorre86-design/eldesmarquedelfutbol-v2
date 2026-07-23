/*=========================================
EL DESMARQUE DEL FÚTBOL
MAIN.JS - VERSIÓN COMPLETA
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
    iniciarContador();
    efectoNavbar();
    efectoBotones();
});

/*=========================================
CONTADOR PARA AMBOS PANELES
=========================================*/

function iniciarContador() {
    // FECHA Y HORA DEL PARTIDO
    const fechaPartido = new Date("July 23, 2026 19:30:00").getTime();

    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const dias2 = document.getElementById("dias2");
    const horas2 = document.getElementById("horas2");
    const minutos2 = document.getElementById("minutos2");
    const segundos2 = document.getElementById("segundos2");

    const estado = document.getElementById("estadoPartido");

    setInterval(function () {
        const ahora = new Date().getTime();
        const diferencia = fechaPartido - ahora;

        if (diferencia <= 0) {
            if (estado) {
                estado.innerHTML = "🔴 EN VIVO AHORA";
                estado.classList.remove("bg-warning");
                estado.classList.add("bg-danger");
            }
            if (dias) dias.innerHTML = "00";
            if (horas) horas.innerHTML = "00";
            if (minutos) minutos.innerHTML = "00";
            if (segundos) segundos.innerHTML = "00";

            if (dias2) dias2.innerHTML = "00";
            if (horas2) horas2.innerHTML = "00";
            if (minutos2) minutos2.innerHTML = "00";
            if (segundos2) segundos2.innerHTML = "00";

            return;
        }

        const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diferencia % (1000 * 60)) / 1000);

        const dStr = d < 10 ? "0" + d : d;
        const hStr = h < 10 ? "0" + h : h;
        const mStr = m < 10 ? "0" + m : m;
        const sStr = s < 10 ? "0" + s : s;

        if (dias) dias.innerHTML = dStr;
        if (horas) horas.innerHTML = hStr;
        if (minutos) minutos.innerHTML = mStr;
        if (segundos) segundos.innerHTML = sStr;

        if (dias2) dias2.innerHTML = dStr;
        if (horas2) horas2.innerHTML = hStr;
        if (minutos2) minutos2.innerHTML = mStr;
        if (segundos2) segundos2.innerHTML = sStr;

    }, 1000);
}

/*=========================================
NAVBAR AL HACER SCROLL
=========================================*/

function efectoNavbar() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 60) {
            navbar.style.background = "#090f1c";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
        } else {
            navbar.style.background = "#111827";
            navbar.style.boxShadow = "none";
        }
    });
}

/*=========================================
BOTONES INTERACTIVOS
=========================================*/

function efectoBotones() {
    const botones = document.querySelectorAll(".btn-danger");

    botones.forEach((boton) => {
        boton.addEventListener("mouseenter", function () {
            boton.style.transform = "scale(1.03)";
        });

        boton.addEventListener("mouseleave", function () {
            boton.style.transform = "scale(1)";
        });
    });
}

/*=========================================
FUNCIÓN PARA ACTIVAR EL VIDEO EN VIVO
=========================================*/

/**
 * Llama a esta función o ejecútala desde la consola cuando empieces a transmitir:
 * Ejemplo: activarVideoLive("https://www.youtube.com/embed/TU_ID_DE_YOUTUBE");
 */
function activarVideoLive(urlStream) {
    const pantallaEspera = document.getElementById("pantallaEspera");
    const contenedorVideo = document.getElementById("contenedorVideo");
    const videoFrame = document.getElementById("videoFrame");

    if (pantallaEspera && contenedorVideo && videoFrame) {
        videoFrame.src = urlStream;
        pantallaEspera.style.display = "none";
        contenedorVideo.style.display = "block";
    }
}

/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((ancla) => {
    ancla.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

console.log("El Desmarque del Fútbol listo para la transmisión.");
