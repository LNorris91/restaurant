export default function loadMenu() {
    const content = document.querySelector('#content');
    content.classList = "menuContent";

    const menuDiv = document.createElement('div');
    menuDiv.classList = "menuDiv";

    const menuTitle = document.createElement('p');
    menuTitle.classList = "menuTitle";
    menuTitle.textContent = "YOUR KITCHEN MENU";

    let MenuItems = [
        {
            name: "-Cook a Meal-",
            description: "You're an adult, get creative",
            price: "$ a little time and effort"
        },
        {
            name: "-Order In-",
            description: "Feeling lazy? Low on groceries? We've all been there. Order something in",
            price: "$ ever increasing price"
        },
        {
            name: "-Eat Out-",
            description: "Treat yourself to an experience and let a stranger not only cook your food, but bring it to you, and clean up after you",
            price: "$ the most expensive, and don't forget to tip"
        }
    ];

    let menu = document.createElement('div')
    menu.classList = "menu";

    for (let item of MenuItems){
        let option = document.createElement('div')
        option.classList = "item"
        let n = document.createElement('div');
        n.textContent = item.name;
        n.classList = "n"
        let d = document.createElement('div');
        d.textContent = item.description;
        d.classList = "d"
        let p = document.createElement('div');
        p.textContent = item.price;
        p.classList = "p"

        option.appendChild(n);
        option.appendChild(d);
        option.appendChild(p);

        menu.appendChild(option)
    }

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(menu);
    content.appendChild(menuDiv);
}