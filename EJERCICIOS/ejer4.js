//Clasificación de productos:
//Pide nombre, precio y categoría (tecnología, alimentos, ropa). Dependiendo de la
//ategoría y precio, aplica diferentes tipos de impuestos y clasificaciones (lujo, básico,
//etc.).

let nombre = "laptop";
let precio = 500;
let categoria = "tecnologia";
let impuesto = 0;
let clasificacion = "";

if (categoria === "tecnologia") {
  impuesto = precio * 0.18;
} else if (categoria === "alimentos") {
  impuesto = precio * 0.08;
} else if (categoria === "ropa") {
  impuesto = precio * 0.12;
} else {
  console.log("Categoría no válida");
}

if (precio > 2000) {
  clasificacion = "Lujo";
} else if (precio >= 500) {
  clasificacion = "Estándar";
} else {
  clasificacion = "Básico";
}

console.log("Producto:", nombre);
console.log("Categoría:", categoria);
console.log("Precio base:", precio);
console.log("Impuesto:", impuesto);
console.log("Precio final:", precio + impuesto);
console.log("Clasificación:", clasificacion);
