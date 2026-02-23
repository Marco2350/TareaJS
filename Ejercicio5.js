
function eliminarDuplicados(arreglo, propiedad) {
  const valoresVistos = new Set();

  return arreglo.filter(item => {
    if (valoresVistos.has(item[propiedad])) {
      return false;
    }

    valoresVistos.add(item[propiedad]);
    return true; 
  });
}

const elementos = [
 { id: 1, nombre: 'A' },
 { id: 2, nombre: 'B' },
 { id: 1, nombre: 'A' }
];

const resultado = eliminarDuplicados(elementos, 'id');

console.log(resultado);
