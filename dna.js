//Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.

function dnaStr(dna){
    const canonical = ["C", "T", "A", "G"];
    const newString = "";
    
    for (let index = 0; index < dna.length; index++) {

        const canonicalBase = dna [index];
        if (canonical.includes(canonicalBase.toUpperCase())) {
            newString += canonicalBase;
        }
    }
    return newString;
}

module.exports = dnaStr;
