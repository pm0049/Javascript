function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}

module.exports = addOne;
/*
We have learned to  read from array values using square brackets such as array[0].

Similarly, we can  write new values to those positions using the assignment operator =.

const array = [1,2,3];
array[0] = 5;
console.log(array); // [5,2,3]
 We changed the element in the 0 index of the array by using the assignment operator.
*/
