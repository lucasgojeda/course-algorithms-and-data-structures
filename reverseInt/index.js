// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

/** Version 1 of the solution */
const reverseInt_1 = (n) => {
  if (n.toString().split("").includes("-")) {
    let arr = n.toString().split("").reverse();
    if (typeof arr !== Array) arr = [...arr];
    arr.unshift("-");
    arr.pop();
    return Number(arr.join(""));
  } else {
    return Number(n.toString().split("").reverse().join(""));
  }
};

/** Version 2 of the solution */
const reverseInt_2 = (n) => {
  let reverse = parseInt(n.toString().split("").reverse().join(""));
  return n < 0 ? reverse * -1 : reverse;
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

describe("Integer Reversal", () => {
  it("reverseInt() works on positive numbers", () => {
    assert.equal(reverseInt_2(3), 3);
    assert.equal(reverseInt_2(13), 31);
    assert.equal(reverseInt_2(100), 1);
    assert.equal(reverseInt_2(1408), 8041);
  });

  it("reverseInt() works on negative numbers numbers", () => {
    assert.equal(reverseInt_2(-3), -3);
    assert.equal(reverseInt_2(-13), -31);
    assert.equal(reverseInt_2(-100), -1);
    assert.equal(reverseInt_2(-1408), -8041);
  });
});

mocha.run();
