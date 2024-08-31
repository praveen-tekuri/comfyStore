## comfyStore (javaScript)

### 30082024
- project setup
    - html - index.html, about.html, products.html, product.html
    - styles.css
    - images
    - src (js files)
        - pages (about.js, products.js, product.js) (for every page) (get modules)
        - index.js for homepage (global & specific imports)
        - filters (companies.js, search.js, price.js)
        - cart (addToCartDOM.js, setupCart.js, toggleCart.js)
        - displayProducts.js
        - fetchProducts.js
        - store.js
        - toggleSidebar.js
        - utils.js
- implementation
    - toggle sidebar
    - toggle cart
    - home page
    - about page
    - featured product in homepage
    - DOMContentLoaded event on window (Once DOM content is loaded, run the callback function)
    - fetch Products (async, fetch)
    - Store Setup (data inside this should be available throughout the applicatin)
       1. if there are multiple pages, better option is fetch the products only in homepage, and pass them into local storage, so we just grab the fetched data from the local storage. 
       2. massage the fetched data, where all the properties would be side by side. (destructure and return it)

### 31082024
- local storage
    - with this setup we can access the data in index / homepage but to get the data in any page, local storage is required
    - localStorage.setItem(name, JSON.stringify(item));
    - JSON.parse(localStorage.getItem(item))
- displaying featured products
    - filtered featured products from the store
    - product id as dynamic that reflects the product
    - data-id attribute 
    - format price
      - the price in this api is in cents ex: 999
      - payment processors like stripe, payapl or whatever, those are looking for the values in the smallest unit for that perticular currency
      - [new Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- getting product page
    - clicking on product's search icon will give the product page along with product id that passed in href.
- add to cart
    - gets the dataset id
        - bubbling once one of the children clicked
        - event.target to get the id (data-id on the product)
        - parentElement
        - classList
        - dataset
    - calls the cartPannel which will show cart items
- products page
    - copy the about.html (nav, heading), it is kind of copy & paste, repeating, unfortunately with vanilla javascript we need to copy & paste.
    - products
        - display all products
        - products.js (global, filter, specific imports)
        - re-using displayProducts.js to display products
        - loading - even we're getting the data from local storage, when we navigate to this page from another page, it will take sometime to to update that. since we use this in the single product because there we will be fetching data.
    - filters (all these fitlers are not combined in this project (need more products to display))
        - search filter
            - get the value from input, keyup event on form
            - convert the product name or property to the lowerCase()
            - if the typing value matched with product name then return that product which startsWith, else display all the products
            - if no matches found, then display the message.
            - form, keyup, input.value, filter, toLowerCase(), startsWith().
        - companies filter
            - setupCompanies
                - iterate the products to get the companies.
                - new Set() data structure to get the unique values in an object
                - spread operator
                - ['all', ...new Set(store.map(product => product.company))]
                - display the unique companies as categories
                - on clicking on company categories, it should display the matched products
                - if the category is all, then display the copied store.
                - bubbling
        - price filter
            - get the price-filter, price-value
            - get the prices from the products, find the max-price, and rounded it up
            - set the price-filter values such as max, value, min
            - set the price-value as max-price
            - input event on price-filter
            - parseInt the input value (price-filter)
            - set the price-value as parsed input value(price-filter)
            - filter the products price and compare with the input value(price-filter); price <= value
            - display the returned result
            - if no products found then display the message
            - Math.max(), Math.ceil, [input Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event), parseInt
- product page
    - clicking on product's search icon should display the product page
    - for each product there is a unique id that we're passing through href, a query parameter with id
    - page setup
        - data-id
        - loading section
    - product.js
        - show the the product when page loades DOMContentLoaded event on window.
        - async function as we're fetching the product
        - hide the loading
        - Fetch product
            - window.location.search to get the product id
            - try catch block, fetch
            - response.status >= 200 && response.status <= 299, if it does not match then render error message
            - destructuring
            - document & page title updated with product name
            - forEach to iterate the colors
            - createElement, appendChild
            - click event on add to cart button, show the cart items, send the productId to the cart. (update the productId)
           
