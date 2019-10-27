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
//find
function find(array,fn,num) {
  for (var i = 0; i < array.length; i++) {
      var k = fn(array[i],num);
      if( k === false && i === array.length-1){
        return "undefined";
      }else if(k != false) {
        return k;
      }

  }
}
function callfn(element,num) {
    if(element > num){
      return element;
    }else{
      return false;
    }
}
//sort
function sort(array,fn) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length-1; j++) {
      let k = fn(array[j],array[j+1]);
      if(k > 0){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
function callfnsort(a,b) {
  return a-b;
}
//fillter
function filter(array, fn) {
  var arr = [];
  for (var i = 0,k=0; i < array.length; i++) {
      let res = fn(array[i],i);
      if(res != -1){
        arr[k] = res;
        k++;
      }
  }
  return arr;
}

function callfnfilter(element, index) {
  if(element.length > 5){
    return element;
  }else{
    return -1;
  }
}
//some
function some(array,fn) {
    for (var i = 0; i < array.length; i++) {
          let k = fn(array[i]);
          if(k === true){
            return true;
          }else if (i === array.length-1 && k === false) {
            return false;
          }
    }
}
function callfnsome(element) {
  return element % 2 === 1;
}
//every
function every(array,fn) {
  for (var elment in array) {
      let el = fn(elment);
      if(el === false){
        return false;
      }
  }
  return true;
}
function callfnevery(element) {
    return element < 9;
}
//let array = [1, 2, 3, 4, 5];
//console.log(every(array, callfnevery));
//do not stack full
var timer;
function asd() {
  console.log("hi");
  clearTimeout(timer);
  timer = setTimeout(asd, 0);
}
asd();
