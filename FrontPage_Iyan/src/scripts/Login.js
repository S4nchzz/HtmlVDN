function logIn () {
    var welcomeBox = document.getElementsByClassName('welcomeBox')[0];
    welcomeBox.style.display = 'none';

    
    var fondoHa = document.getElementsByClassName('fondoHand')[0];
    fondoHa.style.display = 'none';

    var fondoEa = document.getElementsByClassName('fondoEarth')[0];
    fondoEa.style.display = 'none';

    var fondoIn = document.getElementsByClassName('fondoInstalacion')[0];
    fondoIn.style.display = 'none';


    //Se quita de la pantalla cada imagen de los botones
    var globalPictures1 = document.getElementsByClassName('menuIconos')[0];
    globalPictures1.style.display = 'none';
    
    var globalPictures2 = document.getElementsByClassName('menuIconos')[1];
    globalPictures2.style.display = 'none';

    var globalPictures3 = document.getElementsByClassName('menuIconos')[2];
    globalPictures3.style.display = 'none';

    var goup = document.getElementById('goUp');
    goup.style.top = '110%';

    var foot = document.getElementById('foot');
    foot.style.top = '120%';
    //Se elimina de la pantalla el conteido de quienes somos
    var contentBox = document.getElementById('moreInfo');

    contentBox.style.display = 'none'

    //Caja login
    var login = document.getElementById('loginBox');

    login.style.display = 'inline';
}