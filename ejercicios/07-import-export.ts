/*
  ===== Codigo de TypeScript =====
*/

import { calculaISV, Producto } from './06-desestructuracion-funcion';

const carrito: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 100,
  },
  {
    desc: 'Telefono 2',
    precio: 150,
  },
];

const [total, isv] = calculaISV(carrito);

console.log('Total', total);
console.log('ISV: ', isv);
