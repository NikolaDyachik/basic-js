const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = "";
  let a = str.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      count++;
    } else {
      result += count > 1 ? count + a[i] : a[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
