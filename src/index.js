import populateHomepage from './homepage';
import populateContacts from './contact';
import populateMenu from './menu';

populateHomepage();

//1) find images of managers Dmitry and Tatiana 
//2) add clearing of nodes/disabling the button/some sort of check
// if the same button is pressed twice in a row 

const homepage = document.getElementById('Homepage');
homepage.addEventListener('click', populateHomepage);

const menu = document.getElementById('Menu');
menu.addEventListener('click', populateMenu);

const contacts = document.getElementById('Contacts');
contacts.addEventListener('click', populateContacts);