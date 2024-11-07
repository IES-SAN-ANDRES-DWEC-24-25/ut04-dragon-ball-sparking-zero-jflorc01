// src/simularBatalla.js

/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
  console.log(
    `\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`
  );

  // Determinar quién ataca primero basado en la velocidad
  // Si la velocidad es igual, elegir al azar
  let atacante;
  let defensor;
  let ganador;

  if (luchador1.velocidad == luchador2.velocidad) {
    let rand = Math.random();

    if (rand < 0.5) {
      atacante = luchador1;
      defensor = luchador2;
    } else {
      atacante = luchador2;
      defensor = luchador1;
    }

    console.log(
      `Ambos luchadores tienen la misma velocidad.\nEn esta ronda ${atacante.nombre} será el más veloz`
    );
  } else if (luchador1.velocidad > luchador2.velocidad) {
    atacante = luchador1;
    defensor = luchador2;
  } else {
    atacante = luchador2;
    defensor = luchador1;
  }

  // Simular turnos hasta que uno de los luchadores pierda

  while (atacante.estaVivo() && defensor.estaVivo()) {

    // Aplicar habilidades especiales al atacante
    if (atacante instanceof Saiyan) {
      if(!atacante.esSuperSaiyan && !atacante.haSidoSuperSaiyan){
          atacante.transformar();
      }else if(atacante.esSuperSaiyan){
          atacante.revertirTransformacion();
      }
    }

    if (atacante instanceof Earthling && !atacante.tecnicaUsada) {
      atacante.usarTecnicaEspecial();
    }

    if (
      atacante instanceof Namekian &&
      !atacante.regenerado &&
      atacante.salud < 50
    ) {
      atacante.regenerarSalud();
    }

    console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);
    atacante.atacar(defensor);

    if (defensor.estaVivo()) {
      console.log(`Es el turno de ${defensor.nombre}.`);

      // Aplicar habilidades especiales al defensor
        if (defensor instanceof Saiyan) {
            if(!defensor.esSuperSaiyan && !defensor.haSidoSuperSaiyan){
                defensor.transformar();
            }else if(defensor.esSuperSaiyan){
                defensor.revertirTransformacion();
            }
        }

      if (defensor instanceof Earthling && !defensor.tecnicaUsada) {
        defensor.usarTecnicaEspecial();
      }

      if (
        defensor instanceof Namekian &&
        !defensor.regenerado &&
        defensor.salud < 50
      ) {
        defensor.regenerarSalud();
      }
      defensor.atacar(atacante);
    } else {
      console.log(`${defensor.nombre} se ha debilitado.`);
    }
  }

  if (atacante.estaVivo()) {
    ganador = atacante;
  } else {
    ganador = defensor;
  }

  console.log(`\n\nEl ganador de la batalla es ${ganador.nombre}!\n\n`);
  return ganador;
}

module.exports = simularBatalla;
