import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';
import './reset.css';
import './style.css';

const clearContent = () => {
    const container = document.getElementById('content');
    container.replaceChildren();
    container.classList = [];
};

const homeButton = document.getElementById('Home');
homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
});

const menuButton = document.getElementById('Menu');
menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

const aboutButton = document.getElementById('About');
aboutButton.addEventListener('click', () => {
    clearContent();
    loadAbout();
});

loadHome();
