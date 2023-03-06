const dnaStr = require("../dna");


// returns a new string with any non-canonical DNA base values removed
test("returns a new string with any non-canonical DNA base values removed",() => {
    expect(dnaStr("CTAGGA")).toBe("CTAGGA");
})

// Make the function case sensitive - meaning c (lower case) should be removed from the string, but C (upper case) is a good value and should remain
test("Make the function case sensitive - meaning c (lower case) should be removed from the string, but C (upper case) is a good value and should remain",() => {
    expect(dnaStr("cCTAGgA")).toBe("cCTAGgA");
})

// If the DNA string is empty, just return an empty string.
test("If the DNA string is empty, just return an empty string.",() => {
    expect(dnaStr("")).toBe("");
}) 