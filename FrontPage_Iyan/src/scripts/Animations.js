//Esta funcion despliega un cuadro debajo de cada opcion que el usuario escoja de los botones
function animateDiv(param) {
    var div = document.getElementsByClassName('contentFromBox')[0];
    var content = document.getElementById('contentInsideBox');

    content.style.color = 'black';
    div.style.transition = '0.5s ease';

    if (div.style.height === '1px') {
        div.style.backgroundColor = 'white';
        div.style.height = '20%';
    } else {
        div.style.backgroundColor = 'white';
        div.style.height = '20%';
    }

    contentFromP(param);
}

    //Funciones para que la salida de cada menu sea rapida
function leaveDiv() {
    var div = document.getElementsByClassName('contentFromBox')[0];
    var content = document.getElementById('contentInsideBox');

    content.style.color = 'transparent';
    div.style.height = '1px';
    div.style.backgroundColor = 'transparent';
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function divAnimationWhoami() {
    var div = document.getElementsByClassName('moreInfo')[0];

    
}