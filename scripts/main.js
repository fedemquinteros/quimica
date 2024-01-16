document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a').forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            var idSeccion = this.getAttribute('href').substring(1);
            mostrarSeccion(idSeccion);
        });
    });
});

function mostrarSeccion(idSeccion) {
    document.querySelectorAll('main section').forEach(function (seccion) {
        seccion.classList.remove('active');
    });

    document.getElementById(idSeccion).classList.add('active');
}


const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");

    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    document.querySelector("nav").classList.add("bg-dark");
    document.querySelector("header").classList.add("bg-dark", "text-light");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");

    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    document.querySelector("nav").classList.remove("bg-dark");
    document.querySelector("header").classList.remove("bg-dark", "text-light");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
        temaOscuro() : temaClaro();
}
