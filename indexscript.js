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