function Persona(nombre, edad) {
	this.nombre = nombre;
	this.edad = edad;;
	Persona.n++;
}

Persona.prototype = {
	resumen: function() {
		return this.nombre + " tiene " + this.edad + " años.";
	}
}

Persona.n = 0;

Persona.num = function() {
	return Persona.n;
}

var Paco = new Persona("Paco", 21);
var Sara = new Persona("Sara", 19);
console.log(Persona.num() + " personas");
