const { wordpicker, theWord, updateTriesDisplay } = require("./script")


test('should have a word at the start of the game', () => {
    expect(wordpicker(["vis"])).toEqual("vis")
});

test('should have a word at the start of the game', () => {
    const wordList = [
        "vis",
        "toeter",
        "developer",
        "telefoon",
        "moeder",
        "snoer",
        "geeuw"
    ];
    expect(typeof wordpicker(wordList)).toBe("string")
});


// checken of een letter voorkomt in het woord
test('checks if char exists in a word', () => {
    expect(theWord(['w', 'o', 'r', 'd'], 'r')).toBe("_ _ r _")
});


// checken of een letter voorkomt in het woord
test('checks if char excits in a word', () => {
    expect(theWord(['w', 'o', 'r', 'd'], 'e')).toBe("_ _ _ _")
});


// updaten van het aantal pogingen van de gebruiker
// test('shoud update the remain game play', () => {
//     expect(updateTriesDisplay(1)).toEqual(4)
    // expect(updateTriesDisplay(2)).toEqual(3)
// });

