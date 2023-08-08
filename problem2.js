function matchFinder(string1, string2) {
    // Check if both inputs are strings
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return " inputs should be strings.";
    }

    // Check for exact match
    if (string1.includes(string2)) {
        return true;
    }

    return false;
}

// Test cases
console.log(matchFinder("john Doe", "oh")); // Output: true
console.log(matchFinder("javaScript", "code")); // Output: false
console.log(matchFinder("peter", "ete"));    // Output: Both inputs should be strings.
console.log(matchFinder("abc", 123));         // Output: Both inputs should be strings.
