// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface getCiudadanosLength {
  (ciudadanos: string[]): number;
}

const ciudadGotica: getCiudadanosLength = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface personaInterface {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void;
}

class Persona implements personaInterface {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio(): void{
    console.log(this.nombre)
  }

}