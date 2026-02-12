//Validación de acceso:
//Solicita usuario, contraseña y rol (admin, editor, visitante). Verifica si las credenciales
//son válidas y muestra los permisos disponibles según el rol. Usa múltiples condicionales
//y lógica anidada.

let usuario = "jhordy";
let password = "12345";
let rol = "visitante"; 

if (usuario === "jhordy" && password === "12345") {
    console.log("Acceso permitido");

    if (rol === "admin") {
        console.log("Permisos todo el sistema");
    } else if (rol === "editor") {
        console.log("Permisos editar ");
    } else if (rol === "visitante") {
        console.log("Permisos solo ver contenido");
    } else {
        console.log("Rol no válido");
    }

} else {
    console.log("Usuario o contraseña incorrectos");
}