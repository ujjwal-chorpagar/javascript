function fn() {
	console.log(this);
}

var obj = {
	obfn: fn
};

var person ={
	name: 'Max'
}
obj.obfn.apply(person, ['Hello']); 