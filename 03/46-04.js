var array = [1,2,3,4];

array.unshift('new');
array[array.indexof('new')] = 'old';

var newArray = array.slice(2,4);

console.log(newArray);
console.log(array);
