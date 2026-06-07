const permutations = function (arr) {
  if (arr.length <= 1) return [arr];

  let permus = [];
  arr.forEach((el, index) => {
    const sub = arr.slice(0, index).concat(arr.slice(index + 1));
    let res = permutations(sub);
    res.forEach((element) => {
      permus.push([el].concat(element));
    });
  });
  return permus;
};

// Do not edit below this line
module.exports = permutations;
