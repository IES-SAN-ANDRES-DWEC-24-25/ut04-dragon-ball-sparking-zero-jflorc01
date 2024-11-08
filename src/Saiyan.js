// src/Saiyan.js

const Luchador = require("./Luchador");


class Saiyan extends Luchador{
  constructor(nombre, velocidad, ataque, defensa){
    
    super(nombre, velocidad, ataque, defensa);
    this.esSuperSaiyan = false;
    this.haSidoSuperSaiyan = false;
    
  }
  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if(!this.esSuperSaiyan && !this.haSidoSuperSaiyan){
      
      this.ataque *= 1.5;
      this.velocidad *= 1.3;
      this.defensa *= 1.2;
      this.esSuperSaiyan = true;
      this.haSidoSuperSaiyan = true;

      console.log(`\n¡${this.nombre} Se ha convertido en Super Saiyan!`);
      console.log(`Ahora sus atributos son:\n\t-Ataque: ${this.ataque.toFixed(0)}\n\t-Velocidad: ${this.velocidad.toFixed(0)}`);
      console.log(`\t-Defensa: ${this.defensa.toFixed(0)}.\n`);

    }

  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    
    if(this.esSuperSaiyan){
      this.ataque /= 1.5;
      this.velocidad /= 1.3;
      this.defensa /= 1.2;
      this.esSuperSaiyan = false;

      console.log(`\n${this.nombre} ya no es Super Saiyan`);
      console.log(`Sus atributos vuelven a la normalidad:\n\t-Ataque: ${this.ataque.toFixed(0)}\n\t-Velocidad: ${this.velocidad.toFixed(0)}`);
      console.log(`\t-Defensa: ${this.defensa.toFixed(0)}.\n`);
    }

  }
}

module.exports = Saiyan;