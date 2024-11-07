// src/Torneo.js

const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos, mezclarArray } = require('./utils');

class Torneo {
  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores - Array de luchadores participantes.
   */
  constructor(luchadores) {
    this.luchadores = luchadores;
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    let participantes ; // Copiar el array de luchadores
    mezclarArray(participantes);
    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);
    let contRonda = 0;
    // Simular rondas hasta que quede un solo luchador
    

    const campeon = participantes[0];
    console.log(`El campeón del torneo es ${campeon.nombre}!\n`);
    return campeon;
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
}

module.exports = Torneo;
