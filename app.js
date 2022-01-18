// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const codingMenu = document.querySelector('#coding-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // Adds 'highlight' class to menu items
    if(window.innerWidth > 960 && scrollPos <  0.5 * document.documentElement.clientHeight) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        codingMenu.classList.remove('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPos <=  1.5 * document.documentElement.clientHeight) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        codingMenu.classList.remove('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPos >=  1.5 * document.documentElement.clientHeight) {
        codingMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return;
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)