import Image from './image.png';

const createHourElement = (day, hours) => {
    const container = document.createElement('div');
    const dayElement = document.createElement('h3');
    const hourElement = document.createElement('p');

    dayElement.textContent = day;
    hourElement.textContent = hours;

    container.appendChild(dayElement);
    container.appendChild(hourElement);

    return container;
};
const buildInformation = () => {
    const container = document.createElement('div');
    container.classList.add('information');

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.appendChild(createHourElement('Sunday', 'Closed')); // make a map for this stuff instead ????
    hours.appendChild(createHourElement('Monday', '12PM - 9PM'));
    hours.appendChild(createHourElement('Tuesday', '12PM - 9PM'));
    hours.appendChild(createHourElement('Wednesday', '12PM - 9PM'));
    hours.appendChild(createHourElement('Thursday', '12PM - 9PM'));
    hours.appendChild(createHourElement('Friday', '12PM - 10PM'));
    hours.appendChild(createHourElement('Saturday', '12PM - 10PM'));

    const location = document.createElement('div');
    location.classList.add('location');
    const locHeader = document.createElement('h2');
    locHeader.textContent = 'Location';
    const locContent = document.createElement('p');
    locContent.textContent = '1234 Road Road Lane';
    location.append(locHeader, locContent);

    container.appendChild(hours);
    container.appendChild(location);

    return container;
};

const loadHome = () => {
    const container = document.getElementById('content');
    container.classList.add('home-container');

    const name = document.createElement('h1');
    name.textContent = 'Good Food Restaurant';

    const images = document.createElement('div');
    images.classList.add('food-pics');
    const image1 = document.createElement('img');
    image1.src = Image;
    const image2 = document.createElement('img');
    image2.src = Image;
    const image3 = document.createElement('img');
    image3.src = Image;
    images.append(image1, image2, image3);

    const review = document.createElement('div');
    review.classList.add('review');
    const reviewContent = document.createElement('p');
    reviewContent.classList.add('review-content');
    reviewContent.textContent =
        "The food here tastes so good its actually unreal. How do they do it? I don't know";
    const reviewAuthor = document.createElement('p');
    reviewAuthor.classList.add('author');
    reviewAuthor.textContent = '- Customer that ate here';
    review.append(reviewContent, reviewAuthor);

    const information = buildInformation();

    container.append(name, images, review, information);
};

export { loadHome };
