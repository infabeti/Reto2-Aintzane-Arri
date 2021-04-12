

/* ---------  Inicializar valores ---------------------*/
let totalCarrito=0;
let productos = [];

let hamburguesa = new Object({
	nombre: "hamburguesa",
	cantidad: 2,
	precio:6,
	desc: "Lechuga, tomate y queso"
});

let pizza = new Object({
	nombre: "pizza",
	cantidad: 10,
	precio:18,
	desc: "Mozzarela, tomate y jamón"
});

let menu = new Object({
	nombre: "menu",
	cantidad: 10,
	precio:15,
	desc: "Menú de hamburguesa"
});


let menuDia = new Object({
	nombre: "menú del día",
	cantidad: 20,
	precio:18,
	desc: "Primero, segundo, postre"
});


let casera = new Object({
	nombre: "comida casera",
	cantidad: 5,
	precio:20,
	desc: "consultar"
});


let ensalada = new Object({
	nombre: "ensalada",
	cantidad: 5,
	precio:12,
	desc: "ensalada mixta"
});

/*
let pintxo = new Object({
	nombre: "pintxo",
	cantidad: 5,
	precio:2,
	desc: "Pincho de calamar"
});

let pintxo2 = new Object({
	nombre: "pintxo2",
	cantidad: 1,
	precio:2,
	desc: "Pincho de jamón"
});

let refresco = new Object({
	nombre: "refresco",
	cantidad: 2,
	precio:2,
	desc: "Coca-Cola"
});

let cafe = new Object({
	nombre: "cafe",
	cantidad: 50,
	precio:1.5,
	desc: "Café con leche"
});

let tortilla = new Object({
	nombre: "tortilla",
	cantidad: 2,
	precio:2,
	desc: "Pincho de tortilla"
});
*/
/* Añadir producto ------------------------------------------- */

  function addProduct(product) {
	  
	if (product.cantidad>0){

		if(sessionStorage.getItem('compra')==undefined){
			sessionStorage.setItem('compra', JSON.stringify(new Array()));
		}

		product.cantidad--;
		
		let arrayCompras=JSON.parse(sessionStorage.getItem('compra'));
		arrayCompras.push(product);
		sessionStorage.setItem('compra', JSON.stringify(arrayCompras));		

		totalCarrito = totalCarrito + product.precio; 

  		recalcularTotales(product);
		console.log('añado producto al carrito');
		refrescarCabecera();
  }else{
	  alert("No quedan unidades en stock");
  }
}

function borrar (){
	sessionStorage.clear();
	refrescarCarrito();
}

function comprar(){
	//if(){ //Hay que comprobar que el ususario esta logeado
	alert("¡Compra realizada con éxito!");
	borrar();}


// Calculos 

function refrescarCabecera(){
	if(JSON.parse(sessionStorage.getItem("compra"))!=null){
	var longitud = JSON.parse(sessionStorage.getItem("compra"));
   document.getElementById('numTotalProductos').innerHTML = longitud.length;}
}

function refrescarCarrito (){
   refrescarCabecera ();
   crearCesta();
	if(JSON.parse(sessionStorage.getItem("compra"))!=null){
  		 document.getElementById('precioTotalProductos').innerHTML = sessionStorage.getItem('monto');
	}else {
		document.getElementById('precioTotalProductos').innerHTML = 0;
	}
}

function recalcularTotales (){
	sessionStorage.setItem('monto', totalCarrito);

}

/* Mostrar en cesta producto ---------------------------------------------------------- */
  function crearCesta() {
	var element = document.getElementById("listaCesta");

	var items = JSON.parse(sessionStorage.getItem("compra"));
	if (items!=undefined){
	for (var i = 0; i < items.length; i++) {
		var itemLi = document.createElement("li");
		itemLi.className = "list-group-item d-flex justify-content-between lh-condensed";
		var itemDiv = document.createElement("div");
		var itemH6 = document.createElement("h6");
		itemH6.className = "my-0";
		var itemH6Text = document.createTextNode(items[i].nombre);
		itemH6.appendChild(itemH6Text);
		var itemSmall = document.createElement("small");
		itemSmall.className = "text-muted";
		var itemH6SmallText = document.createTextNode(items[i].desc);
		itemSmall.appendChild(itemH6SmallText);
		var itemSpan = document.createElement("span");
		itemSpan.className = "text-muted";
		var itemSpanText = document.createTextNode(items[i].precio);
		itemSpan.appendChild(itemSpanText);
		
		element.appendChild(itemLi);
		itemLi.appendChild(itemDiv);
		itemLi.appendChild(itemSpan);
		itemDiv.appendChild(itemH6);
		itemDiv.appendChild(itemSmall);
	}
	var itemLi = document.createElement("li");
	itemLi.className = "list-group-item d-flex justify-content-between";
	var itemSpan = document.createElement("span");
	var itemSpanText = document.createTextNode('Total');
	itemSpan.appendChild(itemSpanText);
	var itemStrong = document.createElement("strong");
	var itemStrongText = document.createTextNode(JSON.parse(sessionStorage.getItem("monto")));
	itemStrong.appendChild(itemStrongText);
		
	element.appendChild(itemLi);
	itemLi.appendChild(itemSpan);
	itemLi.appendChild(itemStrong);}
}


/*
module.exports = {
	addProduct : addProduct,
	borrar : borrar,
	comprar : comprar,
	refrescarCabecera : refrescarCabecera,
	refrescarCarrito : refrescarCarrito,
	recalcularTotales : recalcularTotales,
	crearCesta : crearCesta
}*/