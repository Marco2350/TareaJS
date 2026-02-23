
function combinarListasSinRepetir(lista1, lista2) {
  const combinada = lista1.concat(lista2);

  return combinada.filter((item, index) =>
    combinada.indexOf(item) === index
  );
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

const resultado = combinarListasSinRepetir(lista1, lista2);

console.log(resultado);
// ['manzana', 'pera', 'banana', 'uva', 'sandía']