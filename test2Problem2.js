function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return " inputs should be strings.";
    }

    if (string1.includes(string2)) {
        return true;
    }

    return false;
}
console.log(matchFinder("john Doe", "oh"));
console.log(matchFinder("javaScript", "code"));
console.log(matchFinder("peter", "ete"));
console.log(matchFinder("abc", 123)); 