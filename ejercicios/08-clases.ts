/*
  ===== Codigo de TypeScript =====
*/

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  /*
  public alterEgo: string;
  public edad: number;
  private nombreReal: number;
  */
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'NY USA');
  }

  imprimirNombre() {
    return this.alterEgo + ' ' + this.nombreReal;
  }
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');
console.log(ironman);
