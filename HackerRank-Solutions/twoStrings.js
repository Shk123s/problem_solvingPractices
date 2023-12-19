function twoStrings(s1, s2) {
    const charSet = new Set();

    // Store characters from the first string in a set
    for (let i = 0; i < s1.length; i++) {
       console.log( charSet.add(s1.charAt(i)))
    }

    // Check if any character from the second string exists in the set
    for (let j = 0; j < s2.length; j++) {
        if (charSet.has(s2.charAt(j))) {
            // console.log(charSet.has(s2.charAt(j)))
            return "YES";
        }
    }

    return "NO";
}

console.log(twoStrings("hello", "world")); // Output: "YES"
