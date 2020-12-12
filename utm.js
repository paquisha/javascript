//primer ejercicio practicas
let nota1 = prompt('ingrese nota uno: ');
nota1 = parseInt(nota1);
let nota2 = prompt('ingrese nota dos: ');
nota2 = parseInt(nota2);
let nota3 = prompt('ingrese nota tres: ');
nota3 = parseInt(nota3);

let promedio = (nota1 + nota2 + nota3)/3;

if(promedio >= 70 ){
    alert('Alumno Aprobado, promedio: ' + promedio);
}else{
    alert('Alumno reprobado, promedio: ' + promedio);
}

//segundo ejercicio

let contador = 0;
let i = 0;
for(i = 1; i <= 10; i++){
    let edad = prompt('ingrese la edad: ');
    edad = parseInt(edad);
    if(edad >= 18){
        contador++;
    }
}
alert('mayores de edad '+contador);



//ejercicios trabajo autonomo
let uno = prompt('ingrese numero uno: ');
uno = parseInt(uno);
let dos = prompt('ingrese numero dos: ');
dos = parseInt(dos);

let tres = 0;
tres = uno;
console.log(tres);
tres = dos;
console.log(tres);

//segundo ejercicio area de un cilindro
const pi = 3.1416;
let perimetro = prompt('ingrese el perimetro: ' );
perimetro = parseFloat(perimetro);
let altura = prompt('ingrese la altura: ');
altura = parseFloat(altura);

let areaCilindro = (2 * pi * perimetro * altura);
alert('el area del cilindro es: ' + areaCilindro);