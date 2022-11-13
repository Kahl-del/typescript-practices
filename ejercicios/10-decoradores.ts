/*
  ===== Codigo de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'Override';
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';
  imprimir() {
    console.log('Hola Mundo');
  }
}

console.log(MiSuperClase);

const MiClase = new MiSuperClase();
