document.addEventListener('DOMContentLoaded', function () {
    // Agrega un evento 'click' a cada enlace de navegación
    document.querySelectorAll('nav a').forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            // Evita que se ejecute el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el identificador de la sección desde el atributo href
            var idSeccion = this.getAttribute('href').substring(1);

            // Llama a la función mostrarSeccion con el identificador de la sección
            mostrarSeccion(idSeccion);
        });
    });
});

function mostrarSeccion(idSeccion) {
    // Oculta todas las secciones
    document.querySelectorAll('main section').forEach(function (seccion) {
        seccion.classList.remove('active');
    });

    // Muestra la sección seleccionada
    document.getElementById(idSeccion).classList.add('active');
}
