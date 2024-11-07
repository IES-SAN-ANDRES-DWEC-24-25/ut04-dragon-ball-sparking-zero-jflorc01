// src/Saiyan.js

const Luchador = require("./Luchador");


class Saiyan extends Luchador{
  constructor(nombre, velocidad, ataque, defensa, salud){
    
    super(nombre, velocidad, ataque, defensa, salud);
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

      console.log(`¡${this.nombre} Se ha convertido en Super Saiyan!`);
      console.log(`Ahora sus atributos son:\n\t-Ataque: ${this.ataque}\n\t-Velocidad: ${this.velocidad}
        \n\t-Defensa: ${this.defensa}.`);

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

      console.log(`${this.nombre} ya no es Super Saiyan`);
      console.log(`Sus atributos vuelven a la normalidad:\n\t-Ataque: ${this.ataque}\n\t-Velocidad: ${this.velocidad}
        \n\t-Defensa: ${this.defensa}.`);
    }

  }
}

module.exports = Saiyan;