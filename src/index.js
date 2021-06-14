import populateHomepage from './homepage';
import populateContacts from './contact';
import populateMenu from './menu';

populateHomepage();

const homepage = document.getElementById('Homepage');
homepage.addEventListener('click', populateHomepage);

const menu = document.getElementById('Menu');
menu.addEventListener('click', populateMenu);

const contacts = document.getElementById('Contacts');
contacts.addEventListener('click', populateContacts);