/*
  ===== Codigo de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anyo: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 170,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anyo: 2015,
  },
};

// Desestructuracion de Objetos
const autor = 'Fulano';
const {
  volumen,
  segundo,
  cancion,
  detalles: { autor: autorDetalle, anyo },
} = reproductor;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('El cancion actual es de: ', cancion);
console.log('El autor de la cancion es: ', autorDetalle);
console.log('El año de la cancion es: ', anyo);

// Desestructuracion de Arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, trunks, vegeta] = dbz;

console.log('Personaje', goku);
console.log('Personaje', vegeta);
console.log('Personaje', trunks);
