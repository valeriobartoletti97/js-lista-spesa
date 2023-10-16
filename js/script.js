let productsBought = [];
let objects;
while (objects != 'stop') {
    objects = prompt('Inserisci i prodotti da acquistare e scrivere "stop" una volta terminata la lista')
    productsBought.push(objects)   
}
productsBought.pop()
console.log(productsBought)

for (let i = 0; i < productsBought.length; i++){
    const myDiv = document.createElement('div');
    const print = document.getElementById('print');
    myDiv.innerHTML = productsBought[i];
    print.append(myDiv);
}


