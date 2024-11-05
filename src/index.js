// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Saiyan("Sai1", 75, 85, 83, 100),
    new Namekian("Nam1", 75, 85, 83, 100),
    new Earthling("Ear1", 75, 85, 83, 100),
    new Earthling("Ear2", 89, 78, 75, 110)
];

// Crear y iniciar el torneo

let torneo = new Torneo(luchadores);
let ganador = torneo.iniciar;
