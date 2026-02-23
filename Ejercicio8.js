

function filtrarDisponibles(productos, categoriaBuscada) {
  return productos.filter(producto =>
    producto.categoria === categoriaBuscada && producto.stock > 0
  );
}

const productos = [
 { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
 { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
 { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'electrónica');

console.log(resultado);