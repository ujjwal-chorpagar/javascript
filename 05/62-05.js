function fn() {
	console.log(this);
}

var obj = {
	obfn: fn
};

obj.obfn()  