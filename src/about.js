const loadAbout = () => {
    const container = document.getElementById('content');
    container.classList.add('about-container');

    const blurb = document.createElement('p');
    blurb.textContent = 'What do you put on this screen?';

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact');
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact';
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    const phoneSection = document.createElement('div');
    const phoneHeader = document.createElement('h3');
    phoneHeader.textContent = 'Phone';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123-456-7890';
    phoneSection.append(phoneHeader, phoneNumber);

    const emailSection = document.createElement('div');
    const emailHeader = document.createElement('h3');
    emailHeader.textContent = 'Email';
    const emailInfo = document.createElement('p');
    emailInfo.textContent = 'fake@email.com';
    emailSection.append(emailHeader, emailInfo);

    contactContent.append(phoneSection, emailSection);
    contactSection.append(contactHeader, contactContent);

    container.append(blurb, contactSection);
};

export { loadAbout };
