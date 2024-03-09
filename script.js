"use strict";
//datos primitivos
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("puedes continuar viendo el curso");
}
else {
    console.log("orimero debes ver el curso de javascript");
}
let interMiami = 11;
let dallas = 11;
let messi = 1;
let juegaMessi = true;
function juego(equipo1, equipo2, juegaMessi) {
    if (juegaMessi) {
        equipo1 += messi;
    }
    if (equipo1 > equipo2)
        console.log("inter miami team win");
    if (equipo1 == equipo2)
        console.log("Hay empate");
    if (equipo1 < equipo2)
        console.log("dallas team win");
}
juego(interMiami, dallas, juegaMessi);
//any   cambiar any por el tipado correspondiente
let miVariableAny = "hola";
miVariableAny = 4567890;
console.log(miVariableAny);
//arreglo
let misNumeros = [34, 56, 78];
let misCadenas = ['HTML', 'css', 'javascript'];
console.log(misNumeros);
//objeto literal
let persona = {
    nombre: 'mateo',
    apellidos: ['jurado', 'lope<'],
    edad: 23,
    tomaCafe: true
};
persona = {
    nombre: 'jose',
    apellidos: ['jurado', 'lope<'],
    edad: 23,
    tomaCafe: false
};
console.log(persona);
let otroPersonaje = {
    nombre: 'Juan',
    apellidos: ['Lopez', 'Gonzalez'],
    edad: 30,
    tomoCafe: null
};
console.log(otroPersonaje);
function areaRectangulo({ base, altura }) {
    return (base * altura) / 2;
}
const rectangulo = { base: 10, altura: 5 };
console.log(`El area del rectangulo es ${areaRectangulo(rectangulo)}`);
//clases   en typescript se utiliza la palabra reservada class para crear una clase
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this._nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectar() {
        console.log(`El nombre de la pelicula es: ${this._nombre}`);
    }
}
const pelicula = new Pelicula('rapido y furioso', ['kendri', 'vin diesel'], ['kendri', 'vin diesel', 'toreto']);
const pelicula2 = new Pelicula('La vida es bella', ['Leonardo DiCaprio', 'Marlon Brando'], ['Johnny Depp']);
console.log(pelicula);
pelicula.proyectar();
pelicula2.proyectar();
//genericos y clase para un sorteo  
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumeroSorteado(numero) {
        this.numeroSorteado = numero;
    }
    getNumeroSorteado() {
        return this.numeroSorteado;
    }
    sortear() {
        return `el ticket para ${this.nombre} es el ${this.numeroSorteado}`;
    }
}
let miSorteo = new Sorteo('mateo jl');
miSorteo.setNumeroSorteado(11);
console.log(miSorteo.sortear());
