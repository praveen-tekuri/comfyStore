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
    - copy the about.html (nav, heading), it is kind of copy & paste, repeating, unfortunately with vanilla javascript we need to copy & paste as much as we can.
    - 