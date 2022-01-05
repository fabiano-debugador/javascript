const obj = {
	nome: "james",
	idade: "36"
}

const newObj = Object.entries(obj);

// return a new array [ [ 'nome', 'james' ], [ 'idade', '36' ] ]
console.log(newObj);