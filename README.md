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

