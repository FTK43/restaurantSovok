function createheader() {
    const header = document.createElement('header');
    header.classList.add('header');

    //to do - add nav
    const navbar = document.createElement('nav');
    navbar.classList.add('nav');

    navbar.appendChild(createButton('Homepage'));
    navbar.appendChild(createButton('Menu'));
    navbar.appendChild(createButton('Contacts'));

    header.appendChild(navbar);

    return header;
}

function createButton(buttonId){
    
    const newButton = document.createElement('button');
    newButton.name = 'tabs';
    newButton.id = buttonId;
    newButton.innerHTML = buttonId;

    return newButton;
}

function createFooter(){
    const footer = document.createElement('footer');
    
    const version = document.createElement('span');
    const copyright = document.createElement('span');
    const year = document.createElement('span');

    version.innerHTML = '0.0.1';
    copyright.innerHTML = '(c) FTK records';
    year.innerHTML = getCurrentDate()

    footer.appendChild(version);
    footer.appendChild(copyright);
    footer.appendChild(year);

    return footer;
}

function getCurrentDate(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
    return today.toString();
}


function createMain(){
    
    let main;

    if(document.body.contains(document.getElementById('main'))) {
       main = document.getElementById('main');
       main.innerHTML = '';
    } else {
       main = document.createElement('div');
       main.classList.add('div');
       main.id = 'main';
    }

    main.appendChild(createh1());
    main.appendChild(createInfo());
    main.appendChild(createAddress());

    return main;
}

function createh1() {
    const h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.innerHTML = '☭ Welcome to our restaurant ☭';

    return h1;
}

function createInfo(){
    const infoParagraph = document.createElement('p');
    infoParagraph.classList.add('p');
    infoParagraph.id = 'about';

    infoParagraph.innerHTML = 
      'Sovok restaurant is simply the best! <br> <br>' +
      'We offer everything that you need to feel ' +
      'nostalgic about the late great Soviet Union. <br> <br>' +
      'And if you don\'t know what it was like, <br>' +
      'you surely will now! <br> <br>' +
      
      'Thanks for the visit, hope you like it and see you soon!';

    return infoParagraph;
}

function createAddress(){
    const address = document.createElement('p');
    address.id = 'address';

    address.innerHTML = 
    'Our restaurant is located on <br>' +
    '127001, Soviet Union, Year 1982, <br>' + 
    'Planet Earth, Soviet Universe';

    return address;
}

function populateHomepage() {
    
    const content = document.getElementById('content');
    //header & footer
    if(!document.body.contains(document.getElementById('main'))){
        content.appendChild(createheader());
        content.appendChild(createFooter());
    }
    //main info
    content.appendChild(createMain());
    
};

export default populateHomepage;