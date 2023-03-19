/* 
 *  Eduardo E. Naranjo, MS
 *  Software Engineer
 *  This File: menu.js
 *  2023-03-19
 */

function loadMenu() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("menu").innerHTML =
                this.responseText;
    }
    xhttp.open("GET", "menu.txt");
    xhttp.send();
}

window.onload = loadMenu();
