/*Sometimes it's necessary to edit the values in an object!
We can edit the value directly, similar to the syntax for retrieving values:
const person = {
    name: "James",
    age: 22
}
person.name = "Sally";
person["age"] = 30;
console.log( person.name ); // Sally
console.log( person.age ); // 30
*/
/*
We can also remove keys completely:
const person = { 
    name: "Bob"
}
delete person.name;
console.log( person.name ); // undefined
*/
/*DELETE SECRET KEY FUNCTION
function removeSecret(object) {
    delete object.secret;
}
module.exports = removeSecret;
*/
