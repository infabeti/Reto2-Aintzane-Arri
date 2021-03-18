function producto(opciones){
	var opciones = opciones || {};
	this.nombre=options.nombre || comida;
	this.cantidad=options.cantidad || 5;
	this.decrecer=opciones.decrecer || 1;
	this.vender=function(){
		this.cantidad-=this.decrecer;
		if(this.cantidad>0){
			console.log("Se ha agotado este producto");
		}
	}
}	

var hamburguesa = new producto({
	nombre: "hamburguesa",
	inventario: 2,
	precio:6
});

var pizza = new producto({
	nombre: "pizza",
	inventario: 20,
	precio:20
});

var menu = new producto({
	nombre: "menu",
	inventario: 10,
	precio:12
});

var pintxo = new producto({
	nombre: "pintxo",
	inventario: 5,
	precio:2
});

var pintxo2 = new producto({
	nombre: "pintxo2",
	inventario: 1,
	precio:2
});

var refresco = new producto({
	nombre: "refresco",
	inventario: 2,
	precio:1.7
});

var cafe = new producto({
	nombre: "cafe",
	inventario: 10,
	precio:1.5
});

var tortilla = new producto({
	nombre: "tortilla",
	inventario: 2,
	precio:1
});

