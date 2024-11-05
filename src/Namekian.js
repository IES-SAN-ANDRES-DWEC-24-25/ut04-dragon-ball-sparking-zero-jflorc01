// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian {
  constructor(nombre, velocidad, ataque, defensa, salud){
    
    super(nombre, velocidad, ataque, defensa, salud);
    this.habilidadUsada = false;
    
  }
  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
   if(!this.habilidadUsada && super.salud < 50){
    super.setSalud(super.salud + 30);
    this.habilidadUsada = true;
   }
  }
}

module.exports = Namekian;
