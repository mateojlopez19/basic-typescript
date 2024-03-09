//datos primitivos
let estudiasteJavascript: boolean = true;

if(estudiasteJavascript){
  console.log("puedes continuar viendo el curso")
}else{
  console.log("orimero debes ver el curso de javascript")
}

let interMiami: number = 11
let dallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

function juego(equipo1:number, equipo2:number, juegaMessi:boolean): void {
  if (juegaMessi) {
    equipo1 +=  messi
  }
  if (equipo1 > equipo2) console.log("inter miami team win");
  if (equipo1 == equipo2) console.log("Hay empate");
  if (equipo1 < equipo2) console.log("dallas team win");
}
juego(interMiami, dallas, juegaMessi)


//any   cambiar any por el tipado correspondiente
let miVariableAny: any = "hola" 
miVariableAny = 4567890
console.log(miVariableAny);


//arreglo
let misNumeros: number[] = [34, 56, 78]
let misCadenas: string[] = ['HTML','css', 'javascript']
console.log(misNumeros)


//objeto literal
let persona = {
  nombre: 'mateo', 
  apellidos: ['jurado', 'lope<'], 
  edad: 23,
  tomaCafe: true
}

persona = {
  nombre: 'jose', 
  apellidos: ['jurado', 'lope<'], 
  edad: 23,
  tomaCafe: false
}
console.log(persona)


//tipando las propiedades de un literal object 
type Personaje ={
  nombre: string;
  apellidos: string[];
  edad: number;
  tomoCafe?: boolean | null;
};
let otroPersonaje: Personaje= {
  nombre:'Juan',  
  apellidos:['Lopez', 'Gonzalez'],
  edad: 30, 
  tomoCafe: null
}
console.log(otroPersonaje)


//interfaces  
interface Rectangulo {
  base:number;
  altura:number;
}
function areaRectangulo({base,altura}:Rectangulo){
  return (base*altura)/2  
}
const rectangulo:{base:10 , altura:5}= {base:10 , altura:5}
console.log(`El area del rectangulo es ${areaRectangulo(rectangulo)}`)


//clases   en typescript se utiliza la palabra reservada class para crear una clase
class Pelicula{ //implementamos la interfaz personaje a esta clase
  _nombre?: string;
  protagonistas: string[] ;
  actores: string[];

  constructor(nombre:string, protagonistas:string[], actores:string[]){
    this._nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }

  proyectar(){
    console.log(`El nombre de la pelicula es: ${this._nombre}`)
  }
}

const pelicula = new Pelicula('rapido y furioso', ['kendri', 'vin diesel'], ['kendri', 'vin diesel', 'toreto'])
const  pelicula2 = new Pelicula('La vida es bella', ['Leonardo DiCaprio','Marlon Brando'], ['Johnny Depp'])

console.log(pelicula)
pelicula.proyectar()
pelicula2.proyectar()


//genericos y clase para un sorteo  
class Sorteo<T>{
  private numeroSorteado?: T;

  constructor(private  nombre: string){
  }

  setNumeroSorteado(numero:T){
    this.numeroSorteado = numero;
  }

  getNumeroSorteado(){
    return this.numeroSorteado;
  }

  public sortear(): string{
    return `el ticket para ${this.nombre} es el ${this.numeroSorteado}`
  }
}
let miSorteo = new Sorteo<number>('mateo jl');
miSorteo.setNumeroSorteado(11)

console.log(miSorteo.sortear())


