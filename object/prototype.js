function Person (name, lastName) {
	this.name = name;
	this.lastName = lastName;
	// this.fullName = () => 'ORIGINAL ' +this.name + ' ' + this.lastName;
}

Person.prototype.fullName = function() {
	return this.name + ' ' + this.lastName;
}

const person = new Person('Le Bron', 'James');

console.log(person)