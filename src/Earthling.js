// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(nombre, velocidad, ataque, defensa){
    
    super(nombre, velocidad, ataque, defensa);
    this.tecnicaUsada = false;
    
  }
  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if(!this.tecnicaUsada){

      this.ataque *= 1.4;
      this.tecnicaUsada = true;

      console.log(`¡${this.nombre} usa su técnica para aumentar su ataque!`);
      console.log(`\t-Ataque: ${this.ataque.toFixed(0)}`);

    }
  }

}

module.exports = Earthling;
