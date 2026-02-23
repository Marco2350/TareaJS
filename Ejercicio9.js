
function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 3000); 
  });
}

cargarDatos().then(mensaje => {
  console.log(mensaje);
});