function areStringEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringEqualIgnoreCase('hello', 'Hello'));
console.log(areStringEqualIgnoreCase('world', 'Word'));