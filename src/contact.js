function importAll(r) {
    let images = {};
    r.keys().map((item, index) => 
                                { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./contacts', false, /\.(png|jpe?g|svg)$/));

function createContacts(){

    const contacts = document.createElement('div');
    contacts.id = 'contacts';

    //addr + manager
    contacts.appendChild(createManagers());
    //apply for jobs
    contacts.appendChild(createCareer());

    return contacts;
}

function createManagers(){
    const managers = document.createElement('div');
    managers.id = 'managers';

    const manager = document.createElement('div');
    manager.classList.add('manager');
    manager.innerHTML = "General Manager: Dmitry. <br> " +
                        "Phone: +7(000)000-00-00 <br>" +
                        "email: dmitry@sovok.su";

    manager.appendChild(createImg('/dist/images/src/contacts/dmitry.jpeg'));

    const headChef = document.createElement('div');
    headChef.classList.add('manager');
    headChef.innerHTML = "Head Chef: Tatyana. <br> " +
                         "Phone: +7(000)000-00-01 <br>" +
                         "email: tatyana@sovok.su";

    headChef.appendChild(createImg('/dist/images/src/contacts/tatyana.jpeg'));
    
    managers.appendChild(manager);
    managers.appendChild(headChef);

    return managers;
}

function createImg(url){
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'a picture of ' + url.replace('./', '').replace('.jpg', '');

    return img;
}

function createCareer(){
    const career = document.createElement('div');
    career.id = 'career';

    career.innerHTML = 'Sovok is a great place to work! <br>' +
                       'At the moment we have following openings: <br>' +
                       'Janitor, schedule: 3 working days/1 day off 9am-9pm, salary: 1000 per month <br>' +
                       'Dishwasher, schedule: 3 working date/ 1 day off 9am-9pm, salary: 950 per month <br>' +
                       'Contact our HR department at dmitry@sovok.su';

    return career;                       
}

function populateContacts(){
    const main = document.getElementById('main');
    //clear main
    main.innerHTML = '';
 
    main.appendChild(createContacts());
}

export default populateContacts;