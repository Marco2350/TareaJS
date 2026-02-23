
function modificarPersona(persona, nuevoNombre) {
  return {
    ...persona, // copia el objeto original
    nombre: nuevoNombre, // cambia el nombre
    edad: persona.edad + 1 // aumenta la edad
  };
}

const persona = { nombre: 'Luis', edad: 30 };

const nuevaPersona = modificarPersona(persona, 'Carlos');

console.log(nuevaPersona);
// { nombre: 'Carlos', edad: 31 }

console.log(persona);
// { nombre: 'Luis', edad: 30 } (no cambia)