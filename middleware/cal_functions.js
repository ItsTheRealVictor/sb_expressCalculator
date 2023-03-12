function removeCommas(inStr) {
  return inStr.replaceAll(',', '')
}


function convertQueryToArray(inputString) {
    let result = [];

  for (let i = 0; i < inputString.length; i++) {
    let valToNumber = Number(inputString[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${inputString[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}



module.exports = {
  removeCommas,
  convertQueryToArray,

}





