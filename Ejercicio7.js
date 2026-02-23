function contarPalabras(palabras) {
  const contador = {};

  palabras.forEach(palabra => {
    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  });

  return contador;
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

const resultado = contarPalabras(palabras);

console.log(resultado);
// { hola: 3, adiós: 1, gracias: 2 }