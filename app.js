
// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const codingMenu = document.querySelector('#coding-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // Adds 'highlight' class to menu items
    if(scrollPos <  0.5 * document.documentElement.clientHeight) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        codingMenu.classList.remove('highlight')
        // document.documentElement.style.setProperty('--main', '#323044')
        // document.documentElement.style.setProperty('--text', '#ffffff')
        // document.documentElement.style.setProperty('--comp', '#19EF82')
        return;
    } else if (scrollPos <=  1.5 * document.documentElement.clientHeight) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        codingMenu.classList.remove('highlight')
        // document.documentElement.style.setProperty('--main', '#19EF82')
        // document.documentElement.style.setProperty('--text', '#323044')
        // document.documentElement.style.setProperty('--comp', '#ffffff')
        return;
    } else if (scrollPos >=  1.5 * document.documentElement.clientHeight) {
        codingMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        // document.documentElement.style.setProperty('--main', '#ffffff')
        // document.documentElement.style.setProperty('--text', '#323044')
        // document.documentElement.style.setProperty('--comp', '#19EF82')
        return;
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)


var isDark = true;

function switchMode(){
    if (isDark) {
        isDark = false
        document.getElementById("dark").innerHTML = "Dark Mode"
        document.getElementById("logo").src = "img/YL_Logo_light.png"
        document.documentElement.style.setProperty('--main', '#dddddd');
        document.documentElement.style.setProperty('--text', '#000000');
        document.documentElement.style.setProperty('--comp', '#ff0000');
        document.documentElement.style.setProperty('--header', '#ffffff')
    } else {
        isDark = true
        document.getElementById("dark").innerHTML = "Light Mode"
        document.getElementById("logo").src = "img/YL_Website.png"
        document.documentElement.style.setProperty('--main', '#323044')
        document.documentElement.style.setProperty('--text', '#ffffff')
        document.documentElement.style.setProperty('--comp', '#19EF82')
        document.documentElement.style.setProperty('--header', '#272a32')
    }
};