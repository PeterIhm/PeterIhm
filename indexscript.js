function ChangePage(sectionId, button) {
    console.log("Scrolling to section: " + sectionId);

    const section = document.getElementById(sectionId);
    const offset = 200; 

    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}

let sections = Array.from(document.querySelectorAll('.page-divider, .content-container > div')); 
var positions = []

function logSectionPositions() {
    sections.forEach((section, index) => {
        const position = section.getBoundingClientRect().top + window.scrollY;
        positions.push(position);
    });
}

document.addEventListener('DOMContentLoaded', logSectionPositions);

window.addEventListener('scroll', () => {

    document.querySelectorAll('#navbar ul li').forEach(x => x.classList.remove("active"));

    document.querySelectorAll('#navbar ul li')[positions.findIndex(x => x > window.scrollY)].classList.add("active")
});

window.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
});

function initializeTheme() {
    const themeCheck = document.getElementById("themecheck");
    const isDarkTheme = getCookie("darktheme") != null ? getCookie("darktheme") === "true" : null;


    console.log(isDarkTheme)
    if (isDarkTheme) {
        document.body.classList.add("dark-theme");
        themeCheck.checked = true; 
    } 
    else {
        document.body.classList.remove("dark-theme");
        themeCheck.checked = false;
    }

    if(isDarkTheme == null){
        setCookie("darktheme", "true", 30);
    }
}

function toggleTheme(button) {
    if (button.checked) {
        document.body.classList.add("dark-theme");
        setCookie("darktheme", "true", 30);
    } else {
        document.body.classList.remove("dark-theme");
        setCookie("darktheme", "false", 30);
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}