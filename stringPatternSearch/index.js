// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

/** Solution 1 of the problem */
/** Time complexity O(n) */
const stringPatternSearch_1 = (text, pattern) => {
  let counter = 0;
  let patternAcc = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    patternAcc.push(char);

    if (patternAcc.length > text.length) {
      patternAcc.shift();
    }

    if (patternAcc.join("") === pattern) {
      counter += 1;
      patternAcc = [patternAcc[patternAcc.length - 1]];
    }
  }
  return counter;
};

/** Solution 2 of the problem */
/** Time complexity O(n^m) */
const stringPatternSearch_2 = (text, pattern) => {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];
      if (patternChar !== text[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
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

describe("stringPatternSearch()", () => {
  it("works.", () => {
    assert.equal(stringPatternSearch_2("lollipop", "lol"), 1);
    assert.equal(stringPatternSearch_2("lolol", "lol"), 2);
  });
});

mocha.run();
