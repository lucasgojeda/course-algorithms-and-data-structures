// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

/** Version 1 of the solution */
const caesarCipher_1 = (str, shift) => {
  let abcArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let charArr = [];

  let res = [];

  /** We map all the chars of the string one by one */
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/!|([0-9])|([\s])/g)) {
      let charIndex;
      /** We get the index of the char in the abcArr */
      charIndex = abcArr.findIndex((e) => e === str[i]);

      /** We get the abecedario since that point */
      charArr = abcArr.slice(charIndex, abcArr.length);

      for (let i = 0; i < shift; i++) {
        if (charArr.length === 1) {
          charArr.shift();
          charArr = [...abcArr];
        } else {
          charArr.shift();
        }
      }

      res.push(charArr[0]);
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
};

/** Version 2 of the solution */
const caesarCipher_2 = (str, shift) => {
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  /** We map all the chars of the string one by one */
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    if (idx === -1) {
      res += char;
      continue;
    }

    const encodedIdx = (idx + shift) % 26;
    res += alphabetArr[encodedIdx];
  }
  return res;
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

describe("caesarCipher()", () => {
  it("shifts letters correctly.", () => {
    assert.equal(caesarCipher_2("abcd", 1), "bcde");
    assert.equal(caesarCipher_2("yz", 1), "za");
    assert.equal(caesarCipher_2("abcd", 100), "wxyz");
  });
  it("does not shift digits or other characters such as '!'.", () => {
    assert.equal(caesarCipher_2("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
  });
});

mocha.run();
