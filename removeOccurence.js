// given an array of integers
// find all occurrences of num and remove them
function removeOccurrences(array, num) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }
}

module.exports = removeOccurrences;
/*
Modifying the Array
We'll need a method to remove elements from an array. Luckily, we have such a method. It's called splice!
We're using the splice function with two arguments.

The first argument is the starting index where we'd like to start the removal of elements.

The second argument is the number of elements we'd like to remove beginning at the starting index. In this case we're removing a single element starting at the index of the element we'd like to remove.
*/
