document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a').forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            let idSeccion = this.getAttribute('href').substring(1);
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

document.addEventListener('DOMContentLoaded', function () {
    // llama a la funcion mostrarSeccion con el id de la seccion de inicio
    mostrarSeccion("inicio");

    // hace scroll automaticamente a la seccion de inicio
    let inicioSection = document.getElementById("inicio");
    if (inicioSection) {
        inicioSection.scrollIntoView();
    }
});

function mostrarSeccion(idSeccion) {
    document.querySelectorAll('main section').forEach(function (seccion) {
        seccion.classList.remove('active');
    });

    document.getElementById(idSeccion).classList.add('active');
}



const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill")

    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    document.querySelector("nav").classList.add("bg-dark");
    document.querySelector("header").classList.add("bg-dark", "text-light");
    document.querySelector("footer").classList.add("bg-dark", "text-light");

}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill")

    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);

    document.querySelector("nav").classList.remove("bg-dark");
    document.querySelector("header").classList.remove("bg-dark", "text-light");
    document.querySelector("footer").classList.remove("bg-dark", "text-light");

}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
        temaOscuro() : temaClaro();
}
