// Entrega 1: Javascript
// Daniel Sánchez Seijo
// SWCM

function Libro(Titulo, autor, ISBN, precio) {
	this.Titulo = Titulo;
	this.autor = autor;
	this.ISBN = ISBN;
	this.precio = precio;
	Libro.catalogo.push(this);
}

Libro.prototype = {
	listar_detalles: function(){
		return "Título: " + this.Titulo + "; Autor: " + this.autor +
		"; ISBN: " + this.ISBN + "; Precio: " + this.precio + "€.";
	},
	precio_rebajado: function(descuento){ // El descuento es en tanto por ciento y redondeado a dos decimales.
		this.precio = Math.round((this.precio-((descuento/100)*this.precio))*100)/100;
	}
}

Libro.catalogo = [];

Libro.listar_catalogo = function() {
	for (i in Libro.catalogo)
		console.log(Libro.catalogo[i].listar_detalles());
}

// Pequeño programa de prueba
var dumas = new Libro("El Club Dumas", "Arturo Pérez Reverte", "978-84-95501-00-4", 8.61);
var hobbit = new Libro("El Hobbit", "J.R.R. Tolkien", "978-84-450-7141-0", 8.50);

Libro.listar_catalogo();