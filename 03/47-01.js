var array = [1,2,3,4];

array.unshift('new');
array[array.indexof('new')] = 'old';

console.log(array.filter(function(value){
	return value > 2;
}));