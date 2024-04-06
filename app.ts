function areStringEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStringEqualIgnoreCase('hello', 'Hello'));
console.log(areStringEqualIgnoreCase('world', 'Word'));