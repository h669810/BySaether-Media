const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

const portfolio1 = document.getElementById("portfolio1")
const portfolio2 = document.getElementById("portfolio2")
const portfolio3 = document.getElementById("portfolio3")

const menuBtn = document.getElementById("menuBtn")
const menuPath = document.getElementById("menuPath")
const menuDropdown = document.body.querySelector(".menuDropdown")
const header = document.body.querySelector(".header")

function menuClicked() {
    if(menuDropdown.classList.contains("activateDropdown")) {
        menuPath.setAttribute("d","M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z")
        menuDropdown.classList.remove("activateDropdown")
        header.classList.remove("menuActive")
    } else {
        menuPath.setAttribute("d","M26 23 9 6c-1-1-2-1-3 0s-1 2 0 3l17 17c1 1 2 1 3 0S27 24 26 23zM23 6 6 23c-1 1-1 2 0 3s2 1 3 0l17-17c1-1 1-2 0-3S24 5 23 6z")
        menuDropdown.classList.add("activateDropdown")
        header.classList.add("menuActive")
    }
}

window.addEventListener("resize", function () {
    if(this.window.innerWidth > 500) {
        if(menuDropdown.classList.contains("activateDropdown")) {
            menuDropdown.classList.remove("activateDropdown")
            header.classList.remove("menuActive")
        }
    }
})

function loadFront() {
    window.location = "../index.html"
}

function portfolioOne() {
    if(!button1.classList.contains("btnActive")) {
        button1.classList.add("btnActive")
        
        button2.classList.remove("btnActive")
        button3.classList.remove("btnActive")

        portfolio1.style.display = "unset";
        
        portfolio2.style.display = "none";
        portfolio3.style.display = "none";
    }
}
function portfolioTwo() {
    if(!button2.classList.contains("btnActive")) {
        button2.classList.add("btnActive")
        
        button1.classList.remove("btnActive")
        button3.classList.remove("btnActive")

        portfolio2.style.display = "unset";
        
        portfolio1.style.display = "none";
        portfolio3.style.display = "none";
    }
}
function portfolioThree() {
    if(!button3.classList.contains("btnActive")) {
        button3.classList.add("btnActive")
        
        button1.classList.remove("btnActive")
        button2.classList.remove("btnActive")

        portfolio3.style.display = "unset";
        
        portfolio1.style.display = "none";
        portfolio2.style.display = "none";
    }
}

function backdoor() {
    window.open("https://www.tiktok.com/@thecaramelgamer/video/7246549585202646298")
}

function trafstop() {
    window.open("https://www.tiktok.com/@thecaramelgamer/video/7261010105628445978")
}

function storerob() {
    window.open("https://www.tiktok.com/@thecaramelgamer/video/7258026469115350299")
}