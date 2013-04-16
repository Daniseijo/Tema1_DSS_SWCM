// Entrega 1: Javascript
// Asignatura: SWCM
// Nombre: Daniel Sánchez Seijo
// DNI: 52005819J
// Nombre: José Santos Sánchez Sánchez
// DNI: 26256070Y

function Libro(Titulo, autor, ISBN, precio) {
	this.Titulo = Titulo;
	this.autor = autor;
	this.ISBN = ISBN;
	this.precio = precio;
	Libro.catalogo.push(this);
}

Libro.prototype = {
	listar_detalles: function(){
		console.log("Título: " + this.Titulo + "; Autor: " + this.autor + "; ISBN: " + this.ISBN + "; Precio: " + this.precio + "€.");
	},
	precio_rebajado: function(descuento){ // El descuento es en tanto por ciento y redondea a dos decimales.
		this.precio = Math.round(this.precio*(100-descuento))/100;
	}
}

Libro.catalogo = [];

Libro.listar_catalogo = function() {
	for (i in Libro.catalogo)
		Libro.catalogo[i].listar_detalles();
}

// Pequeño programa de prueba
var dumas = new Libro("El Club Dumas", "Arturo Pérez Reverte", "978-84-95501-00-4", 8.61);
var hobbit = new Libro("El Hobbit", "J.R.R. Tolkien", "978-84-450-7141-0", 8.50);

Libro.listar_catalogo();
