// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Saiyan("Goku", 90, 110, 80),
    new Namekian("Piccolo", 85, 95, 90),
    new Earthling("Krillin", 80, 70, 60),
    new Earthling("Tien", 85, 75, 70),
    new Saiyan("Vegeta", 92, 120, 85),
    new Namekian("Dende", 70, 60, 100),
    new Earthling("Yamcha", 77, 80, 65),
    new Saiyan("Gohan", 80, 90, 75),
    // new Saiyan("Test", 81, 90, 75)

];

// Crear y iniciar el torneo

let torneo = new Torneo(luchadores);
let ganador = torneo.iniciar();
