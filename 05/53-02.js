var age = 30;

var person = {
	name: 'Max',
	age: 27,
	details: {
	hobbies: ['Sports', 'Cooking'],
	location: 'Germany'
	},
	greet: function() {
	console.log('Hello, I am' + this.age + ' years old');
	}
};

person.greet();
