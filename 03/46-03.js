var array = [1,2,3,4];

array.unshift('new');
array[array.indexof('new')] = 'old';

var newArray = array.splice(2,2);

console.log(newArray);
console.log(array);