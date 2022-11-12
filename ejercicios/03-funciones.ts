/*
  ===== Codigo de TypeScript =====
*/

function sumar(a: number, b: number): number{
  return (a + b);
}

const sumarFlecha = (a: number, b: number) => {
  return a + b;
}

function multiplicar( numero: number, otroNumero?:number, base:number = 2):number{
  console.log(otroNumero);
  return numero*base;
}

//const resultado = multiplicar(5,20);

//console.log(resultado);

interface PersonajeLOR{
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar( personaje: PersonajeLOR, curar: number ): void{
  personaje.pv += curar;
}

const nuevoPersonje: PersonajeLOR = {
  nombre: "S",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida: ", this.pv);
  }
}

curar(nuevoPersonje, 20);

nuevoPersonje.mostrarHp();