
function promedioPonderado(notas) {
  let sumaValores = 0;
  let sumaPesos = 0;

  notas.forEach(nota => {
    sumaValores += nota.valor * nota.peso;
    sumaPesos += nota.peso;
  });

  return sumaValores / sumaPesos;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

const resultado = promedioPonderado(notas);
console.log(resultado);