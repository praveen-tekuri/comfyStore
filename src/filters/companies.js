import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const companies = ['all', ...new Set(store.map(product => product.company))]
    const companiesDOM = getElement('.companies');
    companiesDOM.innerHTML = companies.map((company) => {
        return `<button class="company-btn">${company}</button>`
    }).join("");
    companiesDOM.addEventListener('click', function(e){
        if(e.target.classList.contains("company-btn")){
            let newStore = [];
            if(e.target.textContent === 'all'){
                newStore = [...store]
            }else{
                newStore = store.filter((product) => product.company === e.target.textContent)
            }
            display(newStore, getElement('.products-container'), true);
        }
    })
};

export default setupCompanies;
