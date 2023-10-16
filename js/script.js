let productsBought = [];
let objects
while (objects != 'stop') {
    objects = prompt('Inserisci i prodotti da acquistare e scrivere "stop" una volta terminata la lista')
    productsBought.push(objects)   
}
productsBought.pop()
console.log(productsBought)


