var person = {
	name: 'Max',
	age:29,
};

Object.prototype.greet = function(){
console.log('Hello there, I am' + this.name + '!');
};

var max = Object.create(person);
var anna = Object.create(person);
anna.name = 'Anna';

max.greet();
anna.greet(); 