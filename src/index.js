import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './style.css';

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome()
});
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu()
});
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadAbout()
});

loadHome()