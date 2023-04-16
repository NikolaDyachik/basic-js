const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    return arr.map((value, index, array) => {
      if (
        value != "--discard-next" &&
        value != "--discard-prev" &&
        value != "--double-next" &&
        value != "--double-prev"
      ) {
        return value;
      }
      if (value === "--discard-next") {
        array.splice(index - 1, 2);
      }
      if (value === "--discard-prev") {
        array.splice(index, 2);
      }
      if (value === "--double-next") {
        value = array[index + 1];
      }
      if (value === "--double-prev") {
        value = array[index - 1];
      }
    });
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
