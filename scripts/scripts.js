function mostrarSeccion(seccionId) {

    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });


    var seccionMostrar = document.getElementById(seccionId);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }
}

