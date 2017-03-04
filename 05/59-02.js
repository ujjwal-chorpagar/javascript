var person = {
	name: 'Max',
	age: 39,
};

Object.prototype.greet = function() {
	console.log('Hello there, I am' + this.name + '!');
};

var max = Object.create(person);
var anna = Object.create(person);

console.log(anna.__proto__.__proto__== Object.prototype);
