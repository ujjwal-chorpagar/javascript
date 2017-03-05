function Person() {
	this.name = 'Max';
}

Person.prototype.greet = function() {
	console.log('Hello');
};

Person.prototype.name = 'Anna';

var person = new Person();

console.log(person.name);