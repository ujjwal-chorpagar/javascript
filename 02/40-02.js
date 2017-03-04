var test = 'Global Scope';

function localScope(){
	var test = 'Local Scope';
	console.log(test);
}


localScope();
console.log(test);