function Paralelepipedo(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}
Paralelepipedo.prototype = {
	area: function(){
		return "El área de la base es: " + this.x*this.y;
	},
	volumen: function(){
		return "El volumen es: " + this.x*this.y*this.z;
	}
}

var para = new Paralelepipedo(1,2,4);
console.log(para.area());
console.log(para.volumen());
