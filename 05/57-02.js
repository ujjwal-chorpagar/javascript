var person = {
	name:'Max',
	age:27,
};

object.prototype.greet = function() {
	console.log('Hello there!');
};

person.greet();
