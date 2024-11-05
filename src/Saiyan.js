// src/Saiyan.js


class Saiyan {
  constructor(nombre, velocidad, ataque, defensa, salud){
    
    super(nombre, velocidad, ataque, defensa, salud);
    this.habilidadUsada = false;
    
  }
  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if(!this.habilidadUsada){
      
      super.ataque *= 1.5;
      super.velocidad *= 1.3;
      super.defensa *= 1.2;
      this.habilidadUsada = true;

    }

  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    
    super.ataque /= 1.5;
    super.velocidad /= 1.3;
    super.defensa /= 1.2;

  }
}

module.exports = Saiyan;