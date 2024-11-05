// src/Luchador.js

class Luchador {
  // Implementa el constructor y los métodos necesarios

  constructor(nombre, velocidad, ataque, defensa, salud) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ataque = ataque;
    this.defensa = defensa;
    this.salud = salud;
  }

  /**
   * Realiza un ataque contra un oponente.
   * @param {Luchador} oponente - El luchador que recibe el ataque.
   * @returns {Object} - Resultado del ataque.
   */
  atacar(oponente) {
    // Decidir si el ataque es esquivado
    // En este caso, la probabilidad de esquivar el ataque es del 20%
    
    // !: Qué devuelve el método?

    let danio;
    
    let rand = Math.random();
    if(rand < 0.2){
      
      console.log(`${oponente.nombre} ha esquivado el ataque!`);
      danio = 0;

    }

    // Calcular daño
    // Asegurar que el daño no sea negativo

    if(oponente.defensa > this.ataque){
    
      danio = 0.2 * this.ataque;
    
    }else{
      
      danio = this.ataque - oponente.defensa;

    }

    // Aplicar daño al oponente

    oponente.recibirDanio(danio);

    // Retornar resultado del ataque
  }

  /**
   * Aplica daño a la salud del luchador.
   * @param {number} danio - Cantidad de daño recibido.
   */
  recibirDanio(danio) {
    
    this.salud -= danio;
    console.log(`${this.nombre} ha recibido ${danio} puntos de daño`);
    console.log(`Salud restante de ${this.nombre}: ${this.salud}`);
    
  }

  /**
   * Verifica si el luchador está vivo.
   * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
   */
  estaVivo() {
    return this.salud > 0;
  }
}

module.exports = Luchador;
