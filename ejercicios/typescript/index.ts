//boolean
let muted: boolean = true;
muted: false;

//numeros
let numerador = 42;
let denominador : number = 6;
let resutado = numerador/denominador;

//String
let nombre : string  = 'Horacio';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ['isable', 'Nicol', 'Esther'];
//people.push('Jose')
let peopleAndNumbers: Array < string | number> = [];
peopleAndNumbers.push(1234);
peopleAndNumbers.push("Jorge");

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Verde
//console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin : any = "Joker";
comodin = {type: 'Wildcard'};

//Object
let someObject: object = {type: 'Wildcard'};


