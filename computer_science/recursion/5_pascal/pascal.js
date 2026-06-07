const pascal = function (num) {
  if (num <= 1) return [1];

  let array = [],
    last = 0;
  const previousRow = pascal(num - 1);

  previousRow.forEach((element, index) => {
    array.push(index == 0 ? element : element + previousRow[index - 1]);
    if (index == previousRow.length - 1) last = element;
  });
  array.push(last);
  return array;
};

// Do not edit below this line
module.exports = pascal;
