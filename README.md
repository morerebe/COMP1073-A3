# Assignment 3

## Purpose

This vanilla JavaScript web app displays various daily menus which can be viewed by clicking either the next or previous buttons.  

![Image of app](img/app.JPG)

## Concepts Learned

To create this "Bun on the Run" menu app the following JavaScript concepts were used:
- variables let vs const
- querySelector
- arrays
- embedded objects in arrays
- replacing strings with .textContent
- eventListeners for user interaction
- if else statements
- .length property for page # (menu objects in the array)
- incrementing & decrementing through menu objects
- JSON data


## How I made the web app

1. First I defined a const called menu and assigned it to be an empty array
    ```js
    const menu = []
    ```
    The reason why I did that is because the menus array will eventually be assigned an array of objects where each object represents a daily menu, complete with menu items and prices.

1. Next I set the page variable to equal 0
    ```js
    let page = 0;
    ```
    The reason why I did that is because the page variable represents the Menu # that is selected, 0 is the value of the first menu object in the array. Arrays are counted beginning with 0 (in the first space of the array)


1. Next I defined the variable menuNumber to be the content within the h2 tag with the aside parent element   
    ```js
    const menuNumber = document.querySelector("#aside h2");
    ```
    The reason why I did that is because the string in the h2 tag is what we want to replace with the selected menu in the array.

1. Next I defined a function called display  
    ```js
    function display() {
      menuNumber.textContent = menu[page].title;
      soupName.textContent = menu[page].soup.name;
      soupPrice.textContent = menu[page].soup.price;
        ...etc...
    }
    ```
    This function displays the current menu.  For exammple, it displays the menu title by replacing the string inside the const with the selected const page from the array. The properties are specified using embedded objects.

1. Next I defined a function called getJson which will fetch our menus data in JSON format
    ```js
    async function getMenus() {
      const res = await fetch('https://gist.githubusercontent.com/morerebe/50af605e6ef64a4a0825801594f401e7/raw/0f448c84d31348ae1d00d0a740e58a0525e21ada/menu.json');
      const data = await res.json();
      menu.push(...data);
      display();
    }
    ```
    First I defined a constant called res which is assigned to the retrieved await JSON string.

    Next I defined a const called data which turns the string of JSON data into an object.

    Next I inserted that entire array of objects into our menus array by using the push method to push the data into the array.  

    Next I called the function display to display our current menu passing in the argument of our first menu in our array.

1.  Next I defined a function called previous which takes no parameter but decrements our currentIndex by 1 then calls our display function
    ```js
    function previous() {
      if (page === 0) {
          page = menu.length;
        }
      page = page - 1;
      display();
    }
    ```
    The reason I'm manipulating the value of page is because the function cannot count below zero, the array does not have any negative numbers.

1.  In similar fashion, I also created a function called next with similar logic.
    ```js
    function next() {
      if (page === menu.length - 1) {
        page = 0;
      }
      else {
        page +=1;
      }
      display();
    }
    ```

1.  Next I added some query selectors to both next and previous buttons
    ```js
    const previousButton = document.querySelector("#left");
    const  nextButton = document.querySelector("#right");
    ```
    And then added click event listeners to both next and previous buttons
    ```js
    nextButton.addEventListener('click', next);
    ```
    &&
    ```js
    previousButton.addEventListener('click', previous);
    ```
    The reason for adding click event handlers is so that when the user clicks on either button the corresponding function will run that counts in that direction

1.  Finally, I did not do this part but the init function would be used to initialize the variables so that the default html does not display on load
    ```js
    init();
    ```

# Reflection
## What is the hardest part of creating this web app?
- I was challenged by the next and previous functions the most. Having them count only between 0 & 5 both forward and backwards was difficult to come to a resolution.

## What remaining JS concepts are still kind of foggy?
- I am most challenged by loops and if statements. I feel like the concepts were breezed over in a way that I really struggle to still know how to write them without guidance.

## Deck of cards API (remnant of Assignment 4)
Given the documentation listed here: https://deckofcardsapi.com/ it lists 2 APIs/REST endpoints `Shuffle the Cards` and `Draw a card`.  What would you need to do to draw 1 card?

- 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
