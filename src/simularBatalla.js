// src/simularBatalla.js

/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
function simularBatalla(luchador1, luchador2) {
    console.log(`\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`);
    
    // Determinar quién ataca primero basado en la velocidad
    // Si la velocidad es igual, elegir al azar
    let atacante;
    let defensor;

    if(luchador1.velocidad == luchador2.velocidad){
      
      let rand = Math.random();

      if(rand < 0.5){
        
        atacante = luchador1;
        defensor = luchador2;

      }else{

        atacante = luchador2;
        defensor = luchador1;

      }
    }else if(luchador1.velocidad > luchador2.velocidad){

      atacante = luchador1;
      defensor = luchador2;

    }else{

      atacante = luchador2;
      defensor = luchador1;

    }
  
    // Simular turnos hasta que uno de los luchadores pierda
   
    while(atacante.estaVivo() && defensor.estaVivo()){

      console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);
      atacante.atacar(defensor);
      
      if(defensor.estaVivo()){
        console.log(`Es el turno de ${defensor.nombre}.`);
        defensor.atacar(atacante);
      }else{
        console.log(`${defensor.nombre} se ha debilitado.`);
      }

    }
    
    if(atacante.estaVivo()){
      const ganador = atacante;
    }else{
      const ganador = defensor;
    }
  
    console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return ganador;
  }
  
  module.exports = simularBatalla;
  