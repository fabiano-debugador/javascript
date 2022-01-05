const obj = {
	firstName: "james",  
	lastName: "Ruberley",  
};

// Set one more attribute { firstName: 'james', lastName: 'Ruberley', age: 56 }

const oneMoreAttribute = {...obj, age: 56}

console.log(oneMoreAttribute)