// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

/** Solution 1 of this problem */
/** Time complexity O(n) */
const vowels_1 = (str) => {
  str = str.toLowerCase();
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") res += 1;
    if (str[i] === "e") res += 1;
    if (str[i] === "i") res += 1;
    if (str[i] === "o") res += 1;
    if (str[i] === "u") res += 1;
  }
  return res;
};

/** Solution 2 of this problem */
/** Time complexity O(n) */
const vowels_2 = (str) => {
  str = str.toLowerCase();
  const vowels = "aeiou".split("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];
      if (char === vowel) {
        count++;
      }
    }
  }

  return count;
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

describe("Vowels", () => {
  it("gets correct vowel count", () => {
    assert.equal(vowels_2("What"), 1);
    assert.equal(vowels_2("Why"), 0);
  });
  it("is case insensitive. vowels('aEiOu') should return 5", () => {
    assert.equal(vowels_2("aEiOu"), 5);
    assert.equal(vowels_2("I am a world-class developer using iterations"), 16);
  });
});

mocha.run();
