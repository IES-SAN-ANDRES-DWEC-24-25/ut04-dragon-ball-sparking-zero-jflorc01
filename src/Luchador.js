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

      let aleat = Math.floor(Math.random() * 100) + 1;
      let esquiva;
      let ataqRealizado = false;

      if(this.velocidad >= oponente.velocidad && aleat > 25){

        esquiva = false; 

      }else if(this.velocidad < oponente.velocidad && aleat > 75){

        esquiva = false;

      }else{

        esquiva = true;
      
      }
      // Calcular daño
      
      if(!esquiva){

        oponente.recibirDanio(this.ataque);
        ataqRealizado = true;

      }

      if(ataqRealizado){

        let result;

        if(oponente.estaVivo() - ){

          result = this.nombre + "ha atacado ";
        }

      }

      // Asegurar que el daño no sea negativo
      
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {

      // Si tiene más defensa, el ataque será muy pequeño

      if(this.defensa > danio){

        this.salud -= (danio * 0.2);

      }else{

        let aux = danio - this.defensa;
        this.salud -= aux;

      }

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
  