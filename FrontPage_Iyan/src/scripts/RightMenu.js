function openRightMenu() {
    var menu = document.getElementById('sideBar');

    if (menu.style.right = '-380px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-380px'
    }
}

function closeRightMenu() {
    var menu = document.getElementById('sideBar');

    if (menu.style.right = '0') {
        menu.style.right = '-380px';
    } else {
        menu.style.right = '0';
    }
}
