function Person() {
	this.name = 'Max';
	this.greet = function() {
	console.log('Hello, I am ' + this.name);
	}
}

Person.prototype.greet = function() {
	console.log('Hello');
};

var person = new Person();

person.greet();
