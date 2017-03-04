function Person(){
	this.name = '';
}

Person.prototype.greet = function() {
	console.log('Hello');
};

var person = new Person();
person.name = 'Max';

person.greet();
