document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/formData.json');
        const data = await response.json();
        data.reverse();
        
        const navbarList = document.getElementById('navbar-list');
        if (!navbarList) {
            console.error('Navbar list not found');
            return;
        }

        data.forEach((item, index) => {
            const navbarItem = document.createElement('li');
            navbarItem.setAttribute('onclick', `ChangePage('${item.id}', this)`);
            navbarItem.innerText = item.name;

            if (index === 0) {
                navbarItem.classList.add('active');
            }

            navbarList.appendChild(navbarItem);
        });

        const container = document.querySelector('.projects-container');
        data.forEach(item => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'work-inner-container projects';
            projectDiv.id = item.id;  

            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            img.title = item.name;

            const contentDiv = document.createElement('div');

            const title = document.createElement('h3');
            title.innerHTML = `
                ${item.name} 
                <a href="${item.link}" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            `;

            const description = document.createElement('p');
            description.innerHTML = `${item.description} ${
                item.extraLink ? `<a href="${item.extraLink}" target="_blank">${item.extraLinkText}</a>` : ''
            }`;

            contentDiv.appendChild(title);
            contentDiv.appendChild(description);

            projectDiv.appendChild(img);
            projectDiv.appendChild(contentDiv);

            container.appendChild(projectDiv);
        });

        const positions = Array.from(document.querySelectorAll('.work-inner-container')).map(section => section.getBoundingClientRect().top + window.scrollY);

        window.addEventListener('scroll', () => {
            document.querySelectorAll('#navbar ul li').forEach(x => x.classList.remove("active"));
            const index = positions.findIndex(x => x > window.scrollY);
            if (index >= 0 && document.querySelectorAll('#navbar ul li')[index] != null) {
                document.querySelectorAll('#navbar ul li')[index].classList.add("active");
            }
        });
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
});

function ChangePage(sectionId, button) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        const offset = 200; 
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    } else {
        console.error(`Section with ID ${sectionId} not found`);
    }
}

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