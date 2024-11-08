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

      // console.log(`\nEmparejando a ${luchador1.nombre} contra ${luchador2.nombre}\n`);
      const ganador = simularBatalla(luchador1, luchador2);
      ganadores.push(ganador);
      console.log(`A ${ganador.nombre} le quedan ${ganador.salud} de salud para su siguiente pelea.\n`);
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

    console.log("   _______                          ");
    console.log("  |__   __|                         ");
    console.log("     | | ___  _ __ _ __   ___  ___  ");
    console.log("     | |/ _ \\| '__| '_ \\ / _ \\/ _ \\ ");
    console.log("     | | (_) | |  | | | |  __/ (_) |");
    console.log("     |_|\\___/|_|  |_| |_|\\___|\\___/ ");
    console.log("                                     ");
    console.log("                                     ");

    console.log("  _____                                ____        _ _ ");
    console.log(" |  __ \\                              |  _ \\      | | |");
    console.log(" | |  | |_ __ __ _  __ _  ___  _ __   | |_) | __ _| | |");
    console.log(" | |  | | '__/ _` |/ _` |/ _ \\| '_ \\  |  _ < / _` | | |");
    console.log(" | |__| | | | (_| | (_| | (_) | | | | | |_) | (_| | | |");
    console.log(" |_____/|_|  \\__,_|\\__, |\\___/|_| |_| |____/ \\__,_|_|_|");
    console.log("                    __/ |                              ");
    console.log("                   |___/                               ");



    let participantes = [...this.luchadores]; // Crear una copia de luchadores
    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);
    let contRonda = 1;

    while (participantes.length > 1) {
      console.log(`*********************************************`);
      console.log(`*                  Ronda ${contRonda}                  *`);
      console.log(`*********************************************`);
      this.resetearHabilidades(participantes); // Reiniciar habilidades para cada ronda
      participantes = this.simularRonda(participantes); // Llamar con this.simularRonda
      contRonda++;
    }

    const campeon = participantes[0];
    console.log(`\n###############################################`);
    console.log(`#                                             #`);
    console.log(`#    ¡¡¡El campeón del torneo es ${campeon.nombre}!!!    #`);
    console.log(`#                                             #`);
    console.log(`###############################################\n\n`);
    return campeon;
  }
}

module.exports = Torneo;
