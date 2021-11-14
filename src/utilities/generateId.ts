/**
 * Generates unique id.
 * @param ids Parameter that contains array of existing ids.
 */
const generateId = (ids: string[]): string => {
  // Pattern: AB1234

  let arrayOfChars = [];
  for (let i = 0; i < 2; i++) {
    const charNumberRange = Math.ceil(Math.random() * 25 + 65);
    arrayOfChars.push(String.fromCharCode(charNumberRange));
  }
  for (let g = 0; g <= 3; g++) {
    const digitRange = Math.ceil(Math.random() * 9 + 48);
    arrayOfChars.push(String.fromCharCode(digitRange));
  }

  const id = arrayOfChars.join("");

  const isSame = ids.some((el) => el === id);

  return isSame ? generateId(ids) : id;
};

export default generateId;
