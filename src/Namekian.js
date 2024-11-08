// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
  constructor(nombre, velocidad, ataque, defensa){
    
    super(nombre, velocidad, ataque, defensa);
    this.regenerado = false;
    
  }
  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
   if(!this.regenerado && this.salud < 50){
    this.setSalud(this.salud + 30);
    this.regenerado = true;

    console.log(`¡${this.nombre} regeneró su salud!`);
    console.log(`\t-Salud: ${this.salud.toFixed(0)}`);

   }
  }
}

module.exports = Namekian;
