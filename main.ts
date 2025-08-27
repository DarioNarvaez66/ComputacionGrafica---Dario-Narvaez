const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = 'Hello world';
// 1)
// Estudiante
interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): string;
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matemáticas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogotá',
    pais: 'Colombia',
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  }
};

console.log(estudiante.mostrarInfo());


// Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto: Producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 3500,
  stock: 10,
  mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
  }
};

console.log(producto.mostrarDetalle());


// Película
interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  }
};

console.log(pelicula.reproducir());


// Vehículo
interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}

const vehiculo: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022,
  encender() {
    return `${this.marca} ${this.modelo} está encendido`;
  }
};

console.log(vehiculo.encender());


// Usuario
interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}

const usuario: Usuario = {
  username: 'admin01',
  password: '123456',
  roles: ['admin', 'editor'],
  login() {
    return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
  }
};

console.log(usuario.login());


// 2)
// * Error: no se puede usar true como tipo aislado junto a number y string,debe usarse boolean
// * Corrección:
let myValue: number | string | boolean = 10;
console.log("myValue:", myValue);

// * Error: se debe usar boolean en minúscula, no Boolean con mayuscula inicial
// * Corrección:
let myBoolean: boolean = true;
console.log("myBoolean:", myBoolean);

// * Error: "150" es string, pero la variable está definida como number
// * Corrección:
let healthPoints: number = 150;
console.log("healthPoints:", healthPoints);

// * Error: "otraEtiqueta" no es parte del tipo definido
// * Corrección:
let otherMultipleDataType: number | boolean | "myTag" = "myTag";
console.log("otherMultipleDataType:", otherMultipleDataType);

// * any implícito si no se da tipo
let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

// * Error: las constantes deben inicializarse antes 
// * Corrección:
const myConstant: number = 100;
console.log("myConstant:", myConstant);

// * Error: inferedDataType se infiere como string y luego se intenta asignar number
// * Corrección: se declara unión
let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);

// * Error: boolean solo acepta true/false como valor, no numeros
// * Corrección:
const isActive: boolean = true;
console.log("isActive:", isActive);

// * Error: mixed solo acepta number | string, se asignó boolean que no es valido
// * Corrección:
let mixed: number | string = "texto";
console.log("mixed:", mixed);

// * Error: "while" es una palabra reservada en TS 
// * Corrección:
let whileVar: string = "Hola";
console.log("whileVar:", whileVar);

// * Error: "numer" está mal escrito
// * Corrección: 
let myNumber: number = 10;
console.log("myNumber:", myNumber);

// * Error: el arreglo de números contenía un string, dato no valido para el array definido
// * Corrección:
let numeros: number[] = [1, 2, 3];
console.log("numeros:", numeros);

// * Error: la tupla [string, number] necesita ambos valores
// * Corrección:
let tupla: [string, number] = ["Hola", 123];
console.log("tupla:", tupla);

// * Error: la tupla [string, boolean] se definió con valores en desorden
// * Corrección:
let otraTupla: [string, boolean] = ["Hola", true];
console.log("otraTupla:", otraTupla);

// * Error: texto inferido como string, no se puede asignar null
// * Corrección (asignar null explícitamente):
let texto: string | null = "Hola mundo";
texto = null;
console.log("texto:", texto);

// * Error: "amarillo" no está permitido en el tipo
// * Corrección:
let color: "rojo" | "verde" | "azul" = "rojo";
console.log("color:", color);

// * any permite todo, pero cuidado con métodos
let valor: any = 10;
// * Error: toUpperCase no existe en number
// * Corrección:
valor = "hola";
console.log("valor.toUpperCase():", valor.toUpperCase());

// * Error: las constantes no pueden reasignarse
// * Corrección:
let version: number = 1.0;
version = 2.0;
console.log("version:", version);

// * Error: "apellido" no está declarado en el objeto
// * Corrección: definir interfaz implícita
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

// * Error: undefined no es válido para tipo number
// * Corrección: permitir number | undefined
let edad: number | undefined = undefined;
console.log("edad:", edad);