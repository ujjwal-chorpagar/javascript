var age = 30;

var person = {
	name: 'Max',
	age:27,
};

var person1 = {
	name: 'Max',
	age: 27,
};

var anotherPerson = new Object();
anotherPerson.name = 'Max';
anotherPerson.agge = 27;
console.log(person1 == person);
 