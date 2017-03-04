var person = {
	name: 'Max',
	age: 27,
};

Object.prototype.greet = function() {
	console.log('Hello there!');
};

var max = Object.create(person);
console.log(max.name);
