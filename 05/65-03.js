var account = {
	cash: 12000,
	_name: 'Default',
	withdraw: function(amount) {
	this.cash -= amount;
	console.log('Withdrew ' + amount + ', new cash reserve is: ' + this.cash);
	}
};


Object.defineProperty(account, 'name', {
	get: function(){
		return this._name;
	},
	set: function(name){
		if (name == 'Max') {
			this._name = name;
		}
	}
});

console.log(account.name);

account.name = 'ID000-3';

console.log(account.name);
