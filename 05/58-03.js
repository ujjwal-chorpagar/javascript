var person = {
	name: 'Max',
	age: 29,
};

Object.prototype.greet = function(){
	console.log('Hello there!');
};

var max = Object.create(person);
max.greet();
