// Entrega 1.3
// Asignatura: SWCM
// Nombre: Daniel Sánchez Seijo
// DNI: 52005819J
// Nombre: José Santos Sánchez Sánchez
// DNI: 26256070Y

exports.count = function (data) {
	return {
		caracteres: function() { return (data.match(/[\wáéíóúñ -.,;:¿?¡!\n\r\f\v\t]/gi) || []).length; },
		palabras: function() { return (data.match(/[\wáéíóúñ]+(-[\n\r\f\v\t]*[\wáéíóúñ]+)*/gi) || []).length; },
		frases: function() { return (data.match(/[\wáéíóúñ ,]+(-[\n\r\f\v\t]*[\wáéíóúñ ,]+)*/gi) || []).length; }
	};
}
