// Entrega 1.3
// Asignatura: SWCM
// Nombre: Daniel Sánchez Seijo
// DNI: 52005819J
// Nombre: José Santos Sánchez Sánchez
// DNI: 26256070Y

var fs = require('fs');
var wc = require('./wordcount');

if (process.argv.length != 3){
	console.log('syntax: "node wordcount <file>"');
	process.exit()
}

fs.readFile(
	process.argv[2],
	'utf8',
	function(err, data) {
		console.log('Caracteres: ' + wc.count(data).caracteres());
		console.log('Palabras: ' + wc.count(data).palabras());
		console.log('Frases: ' + wc.count(data).frases());
	}
);
