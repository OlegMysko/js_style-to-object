'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const resultArray = sourceString.split(';');

  for (const element of resultArray) {
    const [key, value] = element.split(':').map((part) => part.trim());

    resultObject[key] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
