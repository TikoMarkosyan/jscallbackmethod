// map
function maps(array,fn) {
  var arr = [];
    for (var i = 0; i < array.length; i++) {
      arr[i] = fn(array[i],i);
    }
    return arr
}
function fn(element, index) {
  return element  * 2;
}
let array = [1, 4, 9, 16];
console.log(maps(array,fn));
