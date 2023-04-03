// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

/** Version 1 of the solution */
const anagrams_1 = (stringA, stringB) => {
  const cleanstringA = stringA
    .trim()
    .replace(/([!])|(\s+)/g, "")
    .toLowerCase();
  const cleanstringB = stringB
    .trim()
    .replace(/([!])|(\s+)/g, "")
    .toLowerCase();

  if (cleanstringA.length !== cleanstringB.length) return false;

  for (let i = 0; i < cleanstringB.length; i++) {
    if (!cleanstringA.includes(cleanstringB[i])) return false;
  }

  return true;
};

/** Version 2 of the solution */
const anagrams_2 = (stringA, stringB) => {
  const cleanstringA = stringA
    .trim()
    .replace(/([!])|(\s+)/g, "")
    .toLowerCase();
  const cleanstringB = stringB
    .trim()
    .replace(/([!])|(\s+)/g, "")
    .toLowerCase();

  if (cleanstringA.length !== cleanstringB.length) return false;

  let charCountObjA = {};
  let charCountObjB = {};

  for (let i = 0; i < cleanstringA.length; i++) {
    const charA = cleanstringA[i];
    const charB = cleanstringB[i];

    charCountObjA[charA] = charCountObjA[charA] + 1 || 1;
    charCountObjB[charB] = charCountObjB[charB] + 1 || 1;
  }

  for (let i = 0; i < cleanstringA.length; i++) {
    const charA = cleanstringA[i];
    if (charCountObjA[charA] !== 1 || charCountObjB[charA] !== 1) return false;
  }

  return true;
};

/** Version 3 of the solution */
const anagrams_3 = (stringA, stringB) => {
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length !== stringB.length) return false;

  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];
    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];

    if (!stringACharCount[bChar]) {
      return false;
    } else {
      stringACharCount[bChar]--;
    }
  }

  return true;
};

/** Version 3 of the solution */
const anagrams_4 = (stringA, stringB) => {
  stringA = stringA
    .toLowerCase()
    .replace(/[\W_]+/g, "")
    .split("")
    .sort()
    .join("");
  stringB = stringB
    .toLowerCase()
    .replace(/[\W_]+/g, "")
    .split("")
    .sort()
    .join("");
  return stringA === stringB;
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

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams_4("earth", "heart"), true);

    assert.equal(anagrams_4("love", "meow"), false);
    assert.equal(anagrams_4("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams_4("HEART", "earth"), true);
    assert.equal(anagrams_4("heart", "EARTH"), true);

    assert.equal(anagrams_4("love", "meow"), false);
    assert.equal(anagrams_4("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams_4("heart!", " earth"), true);

    assert.equal(anagrams_4("love", "meow"), false);
    assert.equal(anagrams_4("lol", "lolc"), false);
  });
});

mocha.run();
