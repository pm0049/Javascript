/*
Array of Objects
Things get really interesting when we start to put objects inside arrays and vice-versa!
Let's take our team example again:
*/
const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};
const teams = [team1, team2, team3];
for(let i = 0; i < teams.length; i++) {
    console.log(teams[i].name); 
}
/*
Your Goal: Accumulate the Pizza Orders
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside:

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
*/
function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        total += orders[i].pizzas;
    }
    return total;
}
module.exports = numberOfPizzas;
