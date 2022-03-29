
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

var text = [" passions", " hobbies", " goals", "self."]
var typeSpeed = 80
var deleteSpeed = 150
var wordIndex = 0
var i = 0

function type() {
    if (i < text[wordIndex].length) {
        document.getElementById("me").innerHTML += text[wordIndex].charAt(i);
        i++;
        setTimeout(type, typeSpeed);
    } else if(wordIndex != text.length - 1){
        setTimeout(deleteText, 2000)
    }

}

function deleteText() {
    if (i != 0) {
        document.getElementById("me").innerHTML = document.getElementById("me").innerHTML.slice(0, -1);
        i--;
        setTimeout(deleteText, deleteSpeed);
    }
    else {
        wordIndex++;
        setTimeout(type, 1000)
    }
}

window.type()

var isDark = true;

function switchMode(){
    if (isDark) {
        isDark = false
        document.getElementById("dark").className = "fa fa-moon-o"
        document.getElementById("dark").style.transform = "rotate(360deg)"
        document.getElementById("logo").src = "img/YL_Logo_light.png"
        document.documentElement.style.setProperty('--main', '#dddddd');
        document.documentElement.style.setProperty('--text', '#000000');
        document.documentElement.style.setProperty('--comp', '#ff0000');
        document.documentElement.style.setProperty('--header', '#ffffff')
    } else {
        isDark = true
        document.getElementById("dark").className = "fa fa-sun-o"
        document.getElementById("dark").style.transform = "rotate(0deg)"
        document.getElementById("logo").src = "img/YL_Website.png"
        document.documentElement.style.setProperty('--main', '#323044')
        document.documentElement.style.setProperty('--text', '#ffffff')
        document.documentElement.style.setProperty('--comp', '#19EF82')
        document.documentElement.style.setProperty('--header', '#272a32')
    }
};