function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please enter strings.";
    }
    for (let i = 0; i < string1.length; i++) {
        if (string1.slice(i, i + string2.length) === string2) {
            return true;
        }
    }
    return false;
}
const string1 = "This is a string.";
const string2 = "is";

const result = matchFinder(string1, string2);

console.log(result); 
console.log(typeof string1)
console.log(typeof string2)
