

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuarios = {
        1: "Juan",
        2: "María"
      };

      if (usuarios[id]) {
        resolve({ id, nombre: usuarios[id] });
      } else {
        reject("Usuario no encontrado");
      }
    }, 3000);
  });
}

obtenerUsuario(1)
  .then(usuario1 => {
    return obtenerUsuario(2)
      .then(usuario2 => ({ usuario1, usuario2 }));
  })
  .then(({ usuario1, usuario2 }) => {
    console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
  })
  .catch(error => console.log(error));