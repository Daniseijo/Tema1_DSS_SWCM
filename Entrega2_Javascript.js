// Asignatura: SWCM
// Entrega 2: Javascript
// Nombre: Daniel Sánchez Seijo
// DNI: 52005819J
// Nombre: José Santos Sánchez Sánchez
// DNI: 26256070Y

function pilaLIFO() {
	var _pila = [];
	return {
		reset: function() { _pila = []; },
		push: function(x) { _pila.push(x); },
		pop: function() { return _pila.pop(); }
	};
}

// Programa de prueba
var pila = pilaLIFO();

elemento1='a';
elemento2=undefined;
elemento3=[2,3];

pila.push(elemento1);
pila.push(elemento2);
pila.push(elemento3);

console.log('Elementos introducidos: ' + elemento1 + '; ' + elemento2 + '; ' + elemento3);

prueba1=pila.pop();
prueba2=pila.pop();
prueba3=pila.pop();

console.log('Elementos extraidos (pila LIFO): ' + prueba1 + '; ' + prueba2 + '; ' + prueba3);

if (prueba3==elemento1)
	console.log('Test 1: OK');
else
	console.log('Test 1: NO SUPERADO');
if (prueba2==elemento2)
	console.log('Test 2: OK');
else
	console.log('Test 2: NO SUPERADO');
if (prueba1==elemento3)
	console.log('Test 3: OK');
else
	console.log('Test 3: NO SUPERADO');

if (pila.pop()==undefined)
	console.log('Test 4 (Devuelve undefined con pila vacia): OK');
else
	console.log('Test 4 (Devuelve undefined con pila vacia): NO SUPERADO');
