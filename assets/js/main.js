/*=========================================
EL DESMARQUE DEL FÚTBOL
MAIN.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarContador();

    efectoNavbar();

    efectoBotones();

});

/*=========================================
CONTADOR
=========================================*/

function iniciarContador() {

    // FECHA DEL PARTIDO
    const fechaPartido = new Date("July 23, 2026 19:30:00").getTime();

    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const estado = document.getElementById("estadoPartido");

    setInterval(function () {

        const ahora = new Date().getTime();

        const diferencia = fechaPartido - ahora;

        if (diferencia <= 0) {

            if (estado) {

                estado.innerHTML = "🔴 EN VIVO";

                estado.classList.remove("bg-warning");

                estado.classList.add("bg-danger");

            }

            return;

        }

        const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        const s = Math.floor((diferencia % (1000 * 60)) / 1000);

        if (dias) dias.innerHTML = d;
        if (horas) horas.innerHTML = h;
        if (minutos) minutos.innerHTML = m;
        if (segundos) segundos.innerHTML = s;

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
BOTONES
=========================================*/

function efectoBotones() {

    const botones = document.querySelectorAll(".btn-danger");

    botones.forEach((boton) => {

        boton.addEventListener("mouseenter", function () {

            boton.style.transform = "scale(1.05)";

        });

        boton.addEventListener("mouseleave", function () {

            boton.style.transform = "scale(1)";

        });

    });

}

/*=========================================
ANIMACIÓN DE TARJETAS
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(".card").forEach((card)=>{

    observer.observe(card);

});

/*=========================================
BOTÓN VER TRANSMISIÓN
=========================================*/

const botonTransmision = document.querySelector(".btn-danger");

if (botonTransmision) {

    botonTransmision.addEventListener("click", function () {

        // AQUÍ PEGAREMOS EL LINK DE TWITCH
        // Ejemplo:
        // window.location.href="https://www.twitch.tv/eldesmarquedelfutbol";

        alert("La transmisión comenzará unos minutos antes del partido.");

    });

}

/*=========================================
MENSAJE CUANDO FALTEN 30 MINUTOS
=========================================*/

function avisoPrevio() {

    const fecha = new Date("July 23, 2026 19:30:00").getTime();

    const ahora = new Date().getTime();

    const minutos = (fecha - ahora) / 60000;

    if (minutos <= 30 && minutos > 0) {

        console.log("Faltan menos de 30 minutos para iniciar.");

    }

}

setInterval(avisoPrevio,60000);

/*=========================================
EFECTO TÍTULO
=========================================*/

const titulo = document.querySelector(".display-3");

if(titulo){

    setInterval(()=>{

        titulo.style.opacity=".75";

        setTimeout(()=>{

            titulo.style.opacity="1";

        },400);

    },4000);

}

/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((ancla)=>{

    ancla.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
CONSOLA
=========================================*/

console.log("El Desmarque del Fútbol 2.0 cargado correctamente.");