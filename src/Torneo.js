const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');
const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
    this.luchadores = luchadores;
  }

  /**
   * Reinicia las habilidades de los luchadores
   * @param {Luchador[]} participantes - Array de luchadores participantes
   */
  resetearHabilidades(participantes) {
    participantes.forEach(luchador => {
      if (luchador instanceof Saiyan && luchador.esSuperSaiyan) {
        luchador.revertirTransformacion();
      }
      if (luchador instanceof Earthling && luchador.tecnicaUsada) {
        luchador.tecnicaUsada = false;
      }
      if (luchador instanceof Namekian && luchador.regenerado) {
        luchador.regenerado = false;
      }
    });
  }

  /**
   * Simula una ronda completa de combates.
   * @param {Luchador[]} participantes - Luchadores de esta ronda.
   * @returns {Luchador[]} - Ganadores que avanzan a la siguiente ronda.
   */
  simularRonda(participantes) {
    const ganadores = [];
    mezclarArray(participantes);

    // Emparejamos los luchadores de dos en dos
    while (participantes.length > 1) {
      const luchador1 = participantes.pop();
      const luchador2 = participantes.pop();

      console.log(`\nEmparejando a ${luchador1.nombre} contra ${luchador2.nombre}\n`);
      const ganador = simularBatalla(luchador1, luchador2);
      ganadores.push(ganador);
    }

    return ganadores;
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    // Comprobamos que el número de luchadores sea una potencia de 2
    if (!esPotenciaDeDos(this.luchadores.length)) {
      throw new Error("El número de luchadores debe ser una potencia de 2.");
    }

    let participantes = [...this.luchadores]; // Crear una copia de luchadores
    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);
    let contRonda = 1;

    while (participantes.length > 1) {
      console.log(`\n----- Ronda ${contRonda} -----`);
      this.resetearHabilidades(participantes); // Reiniciar habilidades para cada ronda
      participantes = this.simularRonda(participantes); // Llamar con this.simularRonda
      contRonda++;
    }

    const campeon = participantes[0];
    console.log(`El campeón del torneo es ${campeon.nombre}!\n`);
    return campeon;
  }
}

module.exports = Torneo;
