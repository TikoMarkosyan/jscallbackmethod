// map

Array.prototype.mymaps = function maps(fn) {
  var arr = [];
    for (var i = 0; i < array.length; i++) {
      arr[i] = fn(array[i],i);
    }
    return arr;
}
//find
Array.prototype.myfind = function myfind(fn) {
  for (var i = 0; i < array.length; i++) {
      var k = fn(array[i]);
      if( k === false && i === array.length-1){
        return "undefined";
      }else if(k != false) {
        return k;
      }

  }
}
//sort
Array.prototype.mysort = function mysort(fn) {
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
//fillter
Array.prototype.myfilter = function myfilter( fn) {
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
//some
Array.prototype.mysome = function mysome(fn) {
    for (var i = 0; i < array.length; i++) {
          let k = fn(array[i]);
          if(k === true){
            return true;
          }else if (i === array.length-1 && k === false) {
            return false;
          }
    }
}
//every
Array.prototype.myevery = function myevery(fn) {
  for (var i = 0; i < array.length; i++) {
      let el = fn(array[i]);
      if(el === false){
        return false;
      }
  }
  return true;
}

let array = [1,2,3,4,5];

let res = array.mysort(function (a,b) {
  return a-b;
});

let res1 = array.myfind(function (element) {
  if(element > 20){
    return element;
  }else{
    return false;
  }
});

let res2 = array.mymaps(function (element,index) {
  return element * index;
});
let res3 = array.myfilter(function (element) {
  if(element > 2){
    return element;
  }else{
    return -1;
  }
});
let res4 = array.mysome(function (element) {
  return element % 2 === 1;
})
let res5 = array.myevery(function (element) {
    return element < 9;
})
console.log(res5);
//console.log(every(array, callfnevery));
//do not stack full
/*
var timer;
function asd() {
  console.log("hi");
  clearTimeout(timer);
  timer = setTimeout(asd, 0);
}
asd();
*/
/*
let obj = {
  a:5,
  m:{
    v:5,
    meth(){

    },
    k:{
      y:444
    }
  },
  c:"tiko"
}
/*
function isobj(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
function copyobj(object) {
  let target = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      if(isobj(object[key])){
        target[key] = copyobj(object[key]);
      }else{
        target[key] = object[key];
      }
    }
  }
  return target;
}

let obj1 = copyobj(obj);

console.log(obj1);
obj1.m.k.y = 1000;
console.log(obj);
*/



//Recursion

function fact(num) {
  if(num <= 1){
    return 1;
  }
  return num * fact(num-1);
}
console.log(fact(5));
function range(x,y) {
      if(x+1 >= y){
        return [x];
      }
    var arr = range(x+1,y);
    arr.push(x);
    return arr;
}
console.log(range(2,10));
function sum(arr) {
  if(arr.length === 1){
    return arr[0];

  }
  var res = arr.shift() +sum(arr);
  return res;

}
console.log(sum([1,2,3,4,5,6]));
function exponent(num,i) {
  if(i === 0){
    return 1;
  }
var ress =  num * exponent(num,i-1);
return ress;
}
console.log(exponent(4,2));
function fibanachi(count) {
  if(count === 1){
    return [0,1];
  }
  var res  = fibanachi(count -1);
  res.push(res[res.length-1]+res[res.length-2]);
  return res;
}
console.log(fibanachi(8));
function even(num) {
  var res = num / 2;
  if(res === 1){
    return "true";
  }else if(res < 1){
    return "false"
  }
  res = even(res);
  return res;
}
console.log(even(9));
Array.prototype.binnarySearch = function binnarySearch(num) {
  var midel = parseInt(this.length / 2);
  if(this[midel] === num){
    return midel;
  }else if(this[midel] < num){
    return midel + this.slice(midel,this.length).binnarySearch(num);
  }else{
    return  this.slice(0,midel).binnarySearch(num);
  }
}
var arr = [34,7,23,32,5,62];
function margesort(arr) {
    if(arr.length <= 1){
      return arr;
    }
    const middel = Math.floor(arr.length/2);
    const left = arr.slice(0, middel);
    const right = arr.slice(middel);
    return marge(margesort(left),margesort(right));
}
function marge(left,rigth) {
  var res = [];
  while (left.length > 0 && rigth.length > 0) {
      if(left[0] <= rigth[0]){
        res.push(left.shift());
      }else{
        res.push(rigth.shift());
      }
  }
  return res.concat(left).concat(rigth);
}
console.log(margesort(arr));
function gcd(num1, num2) {
  if(num1 === num2){
    return num1;
  }
    if(num1 > num2){
      num1 = num1 - num2;
    }else{
      num2= num2 - num1;
    }
    var res = gcd(num1,num2);
    return res
  }
console.log(gcd(1098,69));
