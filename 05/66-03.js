var person = {
	name: 'max',
	age: 78,
	greet: function() {
	console.log('Hello');
	}
}
for (var field in person) {
	console.log(person[field]);
}