//Sistema de clasificación de rendimiento:
//Solicita al usuario su nota (0-20) y su asistencia (%). Si la nota es mayor o igual a 11 y
//la asistencia es mayor o igual al 70%, se aprueba. De lo contrario, se desaprueba.
//Además, otorga menciones especiales para notas mayores a 17 con asistencia completa.

let nota = "17";
let asistencia = "100";

if (nota >= 11 && asistencia >= 70) {
  console.log("aprobado");
  if (nota >= 17 && asistencia == 100) {
    console.log("Mención especial");
  }
} else {
  console.log("Desaprobado");
}
