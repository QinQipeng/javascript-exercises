const isObject = (value) => typeof value === "object" && value !== null;

const totalIntegers = function(object) {
  let count = 0;

  if(!isObject(object)) {
    return;
  }

  Object.values(object).forEach((el) => {
    if(Number.isInteger(el)) count++;
    else if(isObject(el)) count += totalIntegers(el)
  })

  return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
