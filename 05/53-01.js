var person = {
	name: 'Max',
	age: 27,
	details: {
	hobbies: ['Sports','Cooking'],
	location: 'Germany',
},
	greet: function() {
	console.log('Hello!');	
	}
};

person.name = 'Anna';

console.log(person);