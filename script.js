// STEP 1 - Define your page variable
// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above
// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable
// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale
// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.
// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.

const menu = [];

//https://gist.githubusercontent.com/morerebe/50af605e6ef64a4a0825801594f401e7/raw/0f448c84d31348ae1d00d0a740e58a0525e21ada/menu.json;


let page = 0;

const menuNumber = document.querySelector("aside h2");
const soupName = document.querySelector("#soup h1");
const soupPrice = document.querySelector("#soup p");
const saladName = document.querySelector("#salad h1");
const saladPrice = document.querySelector("#salad p");
const lighterfareName = document.querySelector("#lighterfare h1");
const lighterfarePrice = document.querySelector("#lighterfare p");
const entreeName = document.querySelector("#entree h1");
const entreePrice = document.querySelector("#entree p");

const previousButton = document.querySelector("#left");
const  nextButton = document.querySelector("#right");


async function getMenus() {
  const res = await fetch('https://gist.githubusercontent.com/morerebe/50af605e6ef64a4a0825801594f401e7/raw/0f448c84d31348ae1d00d0a740e58a0525e21ada/menu.json');
  const data = await res.json();
  menu.push(...data);
  display();
}

function display(todaysmenu) {
  menuNumber.textContent = menu[page].title;
  soupName.textContent = menu[page].soup.name;
  soupPrice.textContent = menu[page].soup.price;
  saladName.textContent = menu[page].salad.name;
  saladPrice.textContent = menu[page].salad.price;
  lighterfareName.textContent = menu[page].lighterFare.name;
  lighterfarePrice.textContent = menu[page].lighterFare.price;
  entreeName.textContent = menu[page].entree.name;
  entreePrice.textContent = menu[page].entree.price;
}

nextButton.addEventListener('click', next);

getMenus();

function next() {
  if (page === menu.length - 1) {
    page = 0;
  }
  else {
    page +=1;
  }
  display();
}

previousButton.addEventListener('click', previous);
getMenus();

function previous() {
  if (page === 0) {
      page = menu.length;
    }
  page = page - 1;
  display();
}
