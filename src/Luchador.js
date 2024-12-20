// src/Luchador.js

class Luchador {
  // Implementa el constructor y los métodos necesarios

  constructor(nombre, velocidad, ataque, defensa) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ataque = ataque;
    this.defensa = defensa;
    this.salud = 100;
  }

  setSalud(salud){

    if(salud < 0){
      this.salud = 0;
    }else{
      this.salud = salud;
    }

  }

  /**
   * Calcula si el ataque será esquivado o no
   * @returns {Boolean} - 'true' si esquiva el ataque y 'false' si no.
   */
  ataqueEsquivado(){

    return Math.random() < 0.2;

  }
  /**
   * Realiza un ataque contra un oponente.
   * @param {Luchador} oponente - El luchador que recibe el ataque.
   * @returns {Object} - Resultado del ataque.
   */
  atacar(oponente) {
    // Decidir si el ataque es esquivado
    // En este caso, la probabilidad de esquivar el ataque es del 20%

    let danio;

    if(this.ataqueEsquivado()){
      
      console.log(`${oponente.nombre} ha esquivado el ataque!`);
      danio = 0;
      return{
        danio: danio,
        mensaje: `${oponente.nombre} esquivó el ataque de ${this.nombre}!`,
        oponente: oponente
      };

    }

    // Calcular daño
    // Asegurar que el daño no sea negativo

    if(oponente.defensa > this.ataque){
    
      danio = 0.1 * this.ataque;
    
    }else{
      
      danio = this.ataque - oponente.defensa;

    }

    // Aplicar daño al oponente

    oponente.recibirDanio(danio);

    return{
      danio: danio,
      mensaje: `${this.nombre} ataca a ${oponente.nombre} y causa ${danio.toFixed(0)} de daño.`,
      oponente: oponente
    };

    // Retornar resultado del ataque
  }

  /**
   * Aplica daño a la salud del luchador.
   * @param {number} danio - Cantidad de daño recibido.
   */
  recibirDanio(danio) {
    
    this.setSalud(this.salud - danio);
    console.log(`${this.nombre} ha recibido ${danio.toFixed(0)} puntos de daño`);
    console.log(`Salud restante de ${this.nombre}: ${this.salud.toFixed(0)}`);
    
  }

  /**
   * Verifica si el luchador está vivo.
   * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
   */
  estaVivo() {
    return (this.salud > 0);
  }
}

module.exports = Luchador;
