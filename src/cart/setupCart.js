// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id );
  console.log('item', item);
  if(!item){
    // if item not in the cart then add the product
    let product = findProduct(id);
    product = {...product, amount: 1}
    cart = [...cart, product];
    addToCartDOM(product);
    console.log(cart);
  }else{
    // update the value
    const amount = increseAmount(id);
    const items = [...cartItemDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem('cart', cart);
  openCart();
};

function displayCartItemCount(){
    const amount = cart.reduce((total, cartItem) => {
        return total += cartItem.amount;
    },0)
    cartItemCountDOM.textContent = amount;
}

function displayCartTotal(){
  let total = cart.reduce((total, cartItem) => {
      return total += cartItem.price * cartItem.amount;
  },0)
  cartTotalDOM.textContent = `Total: ${formatPrice(total)}`
}

function displayCartItemsDOM(){
   cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
   })
}

function removeItem(id){
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

function increseAmount(id){
  let newAmount;
  cart = cart.map((cartItem) => {
    if(cartItem.id === id){
      newAmount = cartItem.amount +1;
      cartItem = {...cartItem, amount: newAmount}
    }
    return cartItem;
  })
  return newAmount;
}
function decrementAmount(id){
  let newAmount;
  cart = cart.map((cartItem) => {
    if(cartItem.id === id){
      newAmount = cartItem.amount -1;
      cartItem = {...cartItem, amount: newAmount}
    }
    return cartItem;
  })
  return newAmount;
}



function setupCartFunctionality(){
    cartItemDOM.addEventListener('click', function(e){
       const element = e.target;
       const parent = e.target.parentElement;
       const id = e.target.dataset.id;
       const parentId = e.target.parentElement.dataset.id;

       if(element.classList.contains('cart-item-remove-btn')){
        removeItem(id);
        parent.parentElement.remove()
        // parent.parentElement.parentElement.remove();
       }
       if(parent.classList.contains('cart-item-increase-btn')){
          const newAmount = increseAmount(parentId);
          parent.nextElementSibling.textContent = newAmount;
       }
       if(parent.classList.contains('cart-item-decrease-btn')){
         const newAmount = decrementAmount(parentId);
         if(newAmount === 0){
           removeItem(parentId);
           parent.parentElement.parentElement.remove();
         }
         else{
          parent.previousElementSibling.textContent = newAmount;
         }
       }
       displayCartItemCount();
       displayCartTotal();
      //  setStorageItem('cart', cart);
    })
}

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
}
init();