var array = [1,2,3,4];

array.unshift('new');
array[array.indexof('new')] = 'old';

console.log(array.map(function(value){
	return value * 2;
}));