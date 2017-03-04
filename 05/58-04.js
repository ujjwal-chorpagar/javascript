var person = {
	name: 'Max',
	age: 29,
};

Object.prototype.greet = function(){
	console.log('Hello there!');
};

var max = Object.create(person);
var anna = object.create(person);
anna.name = 'Anna';

max.greet();
anna.greet();
