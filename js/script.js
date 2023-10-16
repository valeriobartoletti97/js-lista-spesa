const buttonEl = document.querySelector('.btn-success');
let data = document.getElementById('data');

let productsBought = [];

buttonEl.addEventListener('click', function(){
    let products = data.value;
    let i = 0 
    productsBought.push(products)
    if (products === 'stop'){
        
    }
    /* while(products === 'stop'){
        productsBought.push(products);
        i++;
    } */
    console.log(productsBought)
})


