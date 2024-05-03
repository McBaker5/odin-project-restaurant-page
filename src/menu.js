import Image from './image.png';

const MenuItem = (title, description, price, calories, image) => {
    price = price.toFixed(2);
    const createDOMElement = () => {
        const containerEl = document.createElement('div');
        containerEl.classList.add('menu-item');

        const titleEl = document.createElement('h2');
        titleEl.textContent = title;

        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = description;

        const imageEl = document.createElement('img');
        imageEl.src = image;

        const nutritionEl = document.createElement('p');
        nutritionEl.classList.add('nutrition');
        nutritionEl.textContent = calories + ' cal';

        const priceEl = document.createElement('h3');
        priceEl.classList.add('price');
        priceEl.textContent = '$' + price;

        containerEl.append(
            titleEl,
            descriptionEl,
            imageEl,
            nutritionEl,
            priceEl
        );
        return containerEl;
    };
    return { createDOMElement };
};

const createMenuSection = (sectionTitle, sectionItems) => {
    const section = document.createElement('div');
    section.classList.add('menu-section');
    const sectionHeader = document.createElement('h1');
    sectionHeader.textContent = sectionTitle;
    const sectionContent = document.createElement('div');
    sectionContent.classList.add('section-content');
    sectionItems.forEach((item) => {
        sectionContent.appendChild(item.createDOMElement());
    });
    section.append(sectionHeader, sectionContent);
    return section;
};

const loadMenu = () => {
    const container = document.getElementById('content');
    container.classList.add('menu-container');

    const sections = [];

    const saladSection = createMenuSection('Salad', [
        MenuItem(
            'Basic Salad',
            'Leaves in a bowl. Good stuff.',
            8.5,
            290,
            Image
        ),
        MenuItem(
            'Advanced Salad',
            "Are these even leaves? You wouldn't know this was a salad if we didn't tell you",
            15,
            540,
            Image
        ),
        MenuItem('Caesar Salad', 'Salad Salad', 5, 1500, Image),
    ]);
    sections.push(saladSection);

    const soupSection = createMenuSection('Soup', [
        MenuItem(
            'Chicken Broth',
            "Make your own soup. I don't care",
            3,
            15,
            Image
        ),
        MenuItem('Tomato Basil Soup', 'Real food', 8, 400, Image),
    ]);
    sections.push(soupSection);

    const sandwichSection = createMenuSection('Sandwich', [
        MenuItem('Club Sandwich', "What's the password?", 9, 600, Image),
        MenuItem('PB&J', 'Pork belly & Jamster', 12.5, 900, Image),
    ]);
    sections.push(sandwichSection);

    container.append(...sections);
};

export { loadMenu };
