      
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return false; 
    }
    const similarElement = string1.indexOf(string2) !== -1
    return  similarElement;
}
console.log(matchFinder("john Doe", "oh"));
console.log(matchFinder("javaScript", "code"));
console.log(matchFinder("peter", "ete"));
console.log(matchFinder("abc", 123));       
console.log(matchFinder("abc", ""));       
