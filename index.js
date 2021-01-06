// SOLUTION

function wordToBin(str) {
    const array = str.split('').map((char) => {
        return char.charCodeAt().toString(2).padStart(8, 0);
    })
    return array;
}

// METHODS

// split() Split a string into an array of substrings.
// map() Return an array with the square root of all the values in the original array.
// charCodeAt() return the Unicode of the first character in a string (the Unicode value for "H").
// toString() convert a number to a string.
// padStart() method pads a string with another string.
