function contentFromP (value) {
    var content = document.getElementById('contentInsideBox');

    switch (value) {
        case 1: // 1 para el icono de la mano
            content.innerHTML = "En valle del Norte, el cuidado del medioambiente es nuestra máxima prioridad. Nos enorgullece decir que nuestros productos están diseñados y fabricados teniendo en cuenta el impacto ambiental. Nos esforzamos por utilizar materiales sostenibles y reciclables, reducir el consumo de energía y minimizar los residuos en todas las etapas de producción. Estamos comprometidos con la protección del medioambiente y trabajamos constantemente para mejorar nuestras prácticas y contribuir a un futuro más sostenible."
            break;
        case 2: // 2 para el icono de instalacion
            content.innerHTML = "En Valle del Norte, nos preocupamos profundamente por la forma en que instalamos nuestros productos para nuestros clientes. Nos enorgullece decir que somos extremadamente profesionales en nuestro enfoque de instalación. Nuestro equipo altamente capacitado se asegura de que cada instalación se realice con precisión y cuidado, brindando a nuestros clientes una experiencia excepcional."
            break;
        case 3: // 3 para el icono de la tierra
            content.innerHTML = "En valle del Norte, nos esforzamos por utilizar materiales sostenibles y reciclables en todas las etapas de producción. Estamos comprometidos con la protección del medioambiente y trabajamos constantemente para mejorar nuestras prácticas y contribuir a un futuro más sostenible."
            break;
        default:
            content.innerHTML = "Error"
            break;
      }
}

function colorStars(value) {
    var stars = document.querySelectorAll('.star');

    for (var i = 0; i < stars.length; i++) {
        if (i < value) {
            stars[i].style.color = 'yellow';
        } else {
            stars[i].style.color = 'black';
        }
    }
}
