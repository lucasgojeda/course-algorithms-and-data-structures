// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

/** Version 1 of the solution */
const capitalize_1 = (str) => {
  const strArr = str.split(" ");
  let res = "";

  for (let i = 0; i < strArr.length; i++) {
    const newStr =
      strArr[i].substring(0, 1).toUpperCase() +
      strArr[i].substring(1, strArr[i].length).toLowerCase();
    res = res ? res + " " + newStr : newStr;
  }

  console.log(res);
  return res;
};

/** Version 2 of the solution */
const capitalize_2 = (str) => {
  const arrOfWords = str.split(" ");
  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  console.log(arrOfWordsCased.join(" "));
  return arrOfWordsCased.join(" ");
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

describe("Capitalization", () => {
  it("capitalizes the first letter of each word", () => {
    assert.equal(capitalize_2("I'm a little tea pot"), "I'm A Little Tea Pot");
  });
  it("lowercases the rest of the word", () => {
    assert.equal(capitalize_2("sHoRt AnD sToUt"), "Short And Stout");
  });
});

mocha.run();
