export default function loadAbout() {
    const content = document.querySelector('#content');
    content.classList = 'aboutContent';

    const aboutDiv = document.createElement('div');
    aboutDiv.classList = "aboutDiv";

    const aboutUs = document.createElement("h1")
    aboutUs.textContent = "ABOUT US";
    const p1 = document.createElement("p");
    p1.textContent = "Not much to say. This is your kitchen. Who are you? Maybe it's time you took a hard look in the mirror asked yourself, \"who am I?\"";

    const hours = document.createElement("h1")
    hours.textContent = "HOURS";
    const p2 = document.createElement("p");
    p2.textContent = "24/7";

    const contact = document.createElement("h1")
    contact.textContent = "CONTACT";
    const p3 = document.createElement("p");
    p3.textContent = "1-800-talktoyourself";

    aboutDiv.appendChild(aboutUs);
    aboutDiv.appendChild(p1);
    aboutDiv.appendChild(hours);
    aboutDiv.appendChild(p2);
    aboutDiv.appendChild(contact);
    aboutDiv.appendChild(p3);

    content.appendChild(aboutDiv);
}