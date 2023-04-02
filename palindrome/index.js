// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

/** Version 1 of the solutions */
const palindrome_1 = (str) => {
  let arrStr = str.split("");
  let arrStrReverse = str.split("").reverse();

  while (arrStr.length !== 0) {
    if (arrStr.pop().toUpperCase() !== arrStrReverse.pop().toUpperCase()) {
      return false;
    }
  }

  return true;
};

/** Version 2 of the solutions */
const palindrome_2 = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

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

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome_2("bcb"), true);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome_2(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome_2("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome_2("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome_2("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome_2("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome_2("Trunk knurt"), true);
  });
});

mocha.run();
