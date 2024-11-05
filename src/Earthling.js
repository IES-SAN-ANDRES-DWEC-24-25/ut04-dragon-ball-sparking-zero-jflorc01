// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(nombre, velocidad, ataque, defensa, salud){
    
    super(nombre, velocidad, ataque, defensa, salud);
    this.habilidadUsada = false;
    
  }
  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if(!this.habilidadUsada){

      super.ataque *= 1.4;
      this.habilidadUsada = true;

    }
  }

}

module.exports = Earthling;
