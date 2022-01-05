class person {

	constructor(nome) {
		this.nome = nome;
	}

sayYourName ()  {
		if (!this.nome || typeof(this.nome) !== 'string') {
			throw new Error('não é string')
		}
		console.log(this.nome)
	}
}

try {
	const obj = new person("Fabiano Henrique");
	obj.sayYourName()
} catch (error) {
	console.log(error)
}