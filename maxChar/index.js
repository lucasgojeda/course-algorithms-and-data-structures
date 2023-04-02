// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

/** Version 1 of the solution */
const maxChar_1 = (str) => {
  let objTable = {};
  let res = null;
  for (let i = 0; i < str.length; i++) {
    if (!objTable[str[i]]) {
      objTable[str[i]] = 1;
      if (!res) res = { value: objTable[str[i]], name: str[i] };
    } else {
      objTable[str[i]] += 1;

      if (res.value < objTable[str[i]]) {
        res = { value: objTable[str[i]], name: str[i] };
      }
    }
  }
  return res.name;
};

/** Version 2 of the solution */
const maxChar_2 = (str) => {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = "";

  /** Fill out character count object */
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }

  return maxChar;
};

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar_2("a"), "a");
    assert.equal(maxChar_2("test"), "t");
    assert.equal(maxChar_2("I loveeeeee noodles"), "e");
    assert.equal(maxChar_2("1337"), "3");
  });
});

mocha.run();
