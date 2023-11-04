/*It's time to import our first file! Let's import the ORDER_TYPES we just created into numberOfPizzas.js.
We can use require to pull in the exports from orderType.js:
const ORDER_TYPES = require('./orderTypes');
*/
/*
Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.
The orders will have a type keyword:
const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];
 In this example we would only sum up pizzas from the first order
*/
const ORDER_TYPES = require('./orderTypes');
function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

module.exports = numberOfPizzas;
