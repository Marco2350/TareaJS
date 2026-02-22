

const datos = [
 { categoria: 'fruta', nombre: 'manzana' },
 { categoria: 'verdura', nombre: 'zanahoria' },
 { categoria: 'fruta', nombre: 'banana' },
 { categoria: 'verdura', nombre: 'lechuga' },
 { categoria: 'verdura', nombre: 'Apio' }, 
 { categoria: 'verdura', nombre: 'Cebola' }
];

const agruparPorPropiedad = (arreglo, propiedad) => {
  const resultado = {};

  arreglo.forEach(elemento => {
    const clave = elemento[propiedad];

    if (!resultado[clave]) {
      resultado[clave] = [];
    }

    resultado[clave].push(elemento);
  });

  return resultado;
};

  console.log(agruparPorPropiedad(datos, 'categoria'));
