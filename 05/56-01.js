var person = {
	name: 'Max',
	age: 27,
};

var anotherPerson = Object.create(null);
anotherPerson.name = 'Anna';

console.log(anotherPerson);
