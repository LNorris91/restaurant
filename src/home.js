export default function loadHome() {
    const content = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add("homeDiv");
    const homeTitle = document.createElement('p');
    homeTitle.classList.add('homeTitle');
    homeTitle.textContent = 'YOUR KITCHEN';
    const titleTag = document.createElement('p');
    titleTag.classList.add('titleTag');
    titleTag.textContent = 'the restaurant where you can cook whatever you want';

    homeDiv.appendChild(homeTitle);
    homeDiv.appendChild(titleTag);

    content.appendChild(homeDiv);
}