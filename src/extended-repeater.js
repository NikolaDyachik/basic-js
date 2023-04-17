const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  let repeatStr = options.repeatTimes || 1;
  let repeatAddition = options.additionRepeatTimes || 1;
  let optionsAddition = options.addition;

  if (typeof str !== "string") {
    str = String(str);
  }

  if (optionsAddition === undefined) {
    optionsAddition = "";
  } else {
    optionsAddition = String(options.addition);
  }

  for (let i = 0; i < repeatStr; i++) {
    res += str;
    for (let j = 0; j < repeatAddition; j++) {
      res += optionsAddition;
      if (j !== repeatAddition - 1) {
        res += options.additionSeparator || "|";
      }
    }
    if (i !== repeatStr - 1) {
      res += options.separator || "+";
    }
  }

  return res;
}

module.exports = {
  repeater,
};
