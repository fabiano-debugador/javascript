const obj = {
	name: "James",
	age: 36
}

const target = {
	names: "Fabiano",
	ages: 32
}

const newObj = Object.assign(target, obj);

console.log(newObj)