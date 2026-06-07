const isPrimitive = (val) => val !== Object(val);

const contains = function(obj, target) {
    if(isPrimitive(obj) || Array.isArray(obj))
        return Object.is(obj,target);

    let result = false
    Object.values(obj).forEach(vals => {
        result = result || contains(vals, target)
    })

    return result
};
  
// Do not edit below this line
module.exports = contains;
