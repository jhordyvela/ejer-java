//Verificación de año bisiesto y edad legal:
//Pide el año de nacimiento y determina si es bisiesto. Luego calcula la edad del usuario
//y verifica si es mayor de edad (18+).

let añoNacimiento = 2012;

if (
  (añoNacimiento % 4 === 0 && añoNacimiento % 100 !== 0) ||
  añoNacimiento % 400 === 0
) {
  console.log("El año es bisiesto");
} else {
  console.log("El año no es bisiesto");
}

let añoActual = 2025;
let edad = añoActual - añoNacimiento;

console.log("Edad:", edad);

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
