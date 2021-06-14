//import all images from menu folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => 
                                { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('./menu', false, /\.(png|jpe?g|svg)$/));

//images

function createMenu(){
    const menu = document.createElement('div');
    menu.id = 'menu';

    const mainDishes = [
        ['Borshcht', '../dist/images/src/menu/borshcht.jpeg', '3.50'],
        ['Kharcho', '../dist/images/src/menu/kharcho.jpeg', '3.25'],
        ['Shchi', '../dist/images/src/menu/shchi.jpeg', '3.00']
    ];

    const secondaryDishes = [
        ['Grechka with sausages', '../dist/images/src/menu/grechka.jpeg', '1.50'],
        ['Rozhki with chicken meat', '../dist/images/src/menu/rozhki.jpeg', '1.25'],
        ['Perlovka with mushrooms', '../dist/images/src/menu/perlovka.jpeg', '0.75']
    ];

    const desserts = [
        ['Pirozhki sladkie (with jam)', '../dist/images/src/menu/pierogi1.jpeg', '1.00'],
        ['Pirozhki (cabbage and potatoes)', '../dist/images/src/menu/pierogi2.jpeg', '0.80'],
        ['Blini (pancakes)', '../dist/images/src/menu/pancakes.jpeg', '0.50']
    ];

    const drinks = [
        ['vodka', '../dist/images/src/menu/vodka.jpeg', '0.33'],
        ['kompot (berry drink)', '../dist/images/src/menu/kompot.jpeg', '0.15'],
        ['black tea', '../dist/images/src/menu/tea.jpeg', '0.05']
    ];

    menu.appendChild(createCourse('firstCourse', 'the main Course', mainDishes));
    menu.appendChild(createCourse('secondCourse', 'the second Course', secondaryDishes));
    menu.appendChild(createCourse('desserts', 'desserts', desserts));
    menu.appendChild(createCourse('drinks', 'drinks', drinks));

    return menu;
}

function createCourse(courseId, courseName, dishes){
    const course = document.createElement('div');
    course.id = courseId;
    course.classList.add('course');

    const courseHeader = document.createElement('span');
    courseHeader.innerHTML = `Comrade, our choices for the ${courseName} are:`;
    
    course.appendChild(courseHeader);

    //dishes
    for(let i=0; i<3; i++){
        course.appendChild(createDish(dishes[i]));
    }

    return course;
}

//after the break
//1) write the logic for switching between tabs
//2) style the menu and contact pages

function createDish(dishInfo){
    const dish = document.createElement('div');
    dish.id = dishInfo[0];

    const dishDescr = document.createElement('div');
    dishDescr.classList.add('dish');
    //name + price
    dishDescr.innerHTML = dishInfo[0] + '.<br> The price is: '+ dishInfo[2]+'$!';
    //img
    const dishImg = document.createElement('img');
    dishImg.src = dishInfo[1];
    dishImg.alt = 'a picture of: ' + dishInfo[0];
    dishImg.classList.add('dishPic');

    dish.appendChild(dishDescr);
    dish.appendChild(dishImg);

    return dish;
}

function populateMenu(){
   const main = document.getElementById('main');
   //clear main
   main.innerHTML = '';

   main.appendChild(createMenu());
}

export default populateMenu


