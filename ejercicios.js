//operciones matematicas
// let num1 = prompt('Ingrese numero uno');
// num1 = parseInt(num1);
// let num2 = prompt('Repta numero dos');
// num2 = parseInt(num2);

// let suma, resta, multiplicacion, division;


// if(num1 > num2){
//     suma = num1 + num2;
//     resta = num1 - num2;
//     document.write('la suma es: ' + suma);
//     document.write('<br>');    
//     document.write('la resta es: ' + resta);  
// }else{
//     multiplicacion = num1 *  num2;
//     division = num1 / num2;
//     document.write('la multiplicacion es: ' + multiplicacion);
//     document.write('<br>');
//     document.write('la division es: ' + division);
// }

//notas
// let nota1 = prompt('Ingrese primera nota: ');
// nota1 = parseInt(nota1);
// let nota2 = prompt('Ingrese segunda nota: ');
// nota2 = parseInt(nota2);
// let nota3 = prompt('Ingrese tercera nota: ');
// nota3 = parseInt(nota3);
// let suma = nota1 + nota2 + nota3;
// promedio = suma / 3;
// if(promedio >= 4){
//     document.write("regular: " + promedio);
// }else{
//     document.write("reprobado: " + promedio);
// }

//dos o mas digitos
// let  num = prompt('Ingrese numero por favor: ');
// num = parseInt(num);
// if(num >= 10){
//     document.write('tiene dos cifras: ' + num);
// }else{
//     document.write('solo tiene una cifra: ' + num);
// }

//Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);
// if(num1 > num2){
//     document.write('Este es mayor: ' + num1);
// }else{
//     if(num2 > num3){
//         document.write('Este es el mayor: ' + num2);
//     }else{
//         document.write('Este es el mayor: ' + num3);
//     }
// }

//Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
// let num = prompt("Ingrese numero: ");
// num = parseInt(num);
// if(num > 0 ){
//     document.write(num + ' Es positivo');
// }else{
//     if(num < 0){
//         document.write(num +' Es negativo');
//     }else{
//         document.write(num + ' Es cero');
//     }
// }

//Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.
// let num = prompt('Ingrese numero ');
// num = parseInt(num);
// if(num < 10){
//     document.write(num + ' Tiene una cifra');
// }else{
//     if(num < 99){
//         document.write(num + ' Tiene dos cifras');
//     }else{
//         document.write(num + ' Tiene tres cifras');
//     }
// }

//De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel superior: Porcentaje>=90%.
// Nivel medio: Porcentaje>=75% y <90%.
// Nivel regular: Porcentaje>=50% y <75%.
// Fuera de nivel: Porcentaje<50%.
// let nombre = prompt('Ingrese nombre: ');
// let totalPreguntas = prompt('Ingrese cantidad total de preguntas: ');
// totalPreguntas = parseInt(totalPreguntas);
// let correctas = prompt('Ingrese la cantidad de preguntas correctas: ');
// correctas = parseInt(correctas);
// let porcentaje = correctas * 100 /totalPreguntas;
//     if(porcentaje < 50){
//         document.write('Fuera de nivel, lo sentimos '+ nombre + ' tu porcentaje es: ' + porcentaje);
//     }else{
//         if(porcentaje >=  50 && porcentaje < 75){
//             document.write('Nivel regular, lo sentimos '+ nombre + ' tu porcentaje es: ' + porcentaje);
//         }else{
//             if(porcentaje >= 75 && porcentaje < 90){
//                 document.write('Nivel medio '+ nombre + ' tu porcentaje es: ' + porcentaje);
//             }else{
//                 document.write('Nivel Superior, Excelente '+ nombre + ' tu porcentaje es: ' + porcentaje);
//         }
//     }
// }

//Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año)
// let dia = prompt('Ingrese dia: ');
// dia = parseInt(dia);
// let mes = prompt('Ingrese mes: ');
// mes = parseInt(mes);
// let anio = prompt('Ingrese el año: ');
// if(dia == 25 && mes == 12){
//     document.write(dia + "-" + mes + "-" + anio + " " + "es navidad");
// }else{
//     document.write(dia + "-" + mes + "-"+ anio + " " +"no es navidad");
// }

//Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples)
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);

// if(num1 == num2 && num1 == num3){
//     document.write('son iguales');
//     let suma = (num1 + num2) * num3;
//     document.write('el resultado es: ' + suma);
// }else{
//     document.write('no son iguales');
// }

//Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda ' Todos los números son menores a diez'.
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);
// if(num1 < 10 && num2 < 10 && num3 < 10){
//     document.write('son menores a 10');
// }else{
//     document.write('son mayores a 10');
// }

//Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
//Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
// let x = prompt('Ingrese cordenada x: ');
// x = parseInt(x);
// let y = prompt('Ingrese coordenada y: ');
// y = parseInt(y);
// if(x > 0 && y > 0){
//     document.write('primer cuadrante');
// }else{
//     if(x < 0 && y > 0){
//         document.write('segundo cuadrante');
//     }else{
//         if( x < 0 && y < 0){
//             document.write('tercer cuadrante');
//         }else{
//             document.write('cuarto cuadrante');
//         }
//     }
// }

//De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
// a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
// c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
// let nombre = prompt('Ingrese nombre: ');
// let sueldo = prompt('Ingrese sueldo: ');
// sueldo = parseInt(sueldo);
// let antiguedad = prompt('Ingrese los años de antiguedad: ');
// antiguedad = parseInt(antiguedad);
// if(sueldo >= 500){
//     document.write(nombre + ' su sueldo es: ' + sueldo);
// }else{
//     if(sueldo < 500 && antiguedad >= 10){
//         let total = 20 * sueldo / 100;
//         let sueldoTotal = sueldo + total;
//         document.write(nombre + ' sueldo mensual: ' + sueldoTotal);
//     }else{
//         if(sueldo < 500 && antiguedad < 10){
//             let total = 5 * sueldo / 100;
//             let sueldoTotal = sueldo + total;
//             document.write(nombre +  ' sueldo mensual: ' + sueldoTotal);
//         }
//     }
// }

//Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.
// let num1 = prompt('Ingrese numer uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);
// if(num1 < 10 || num2 < 10 || num3 < 10){
//     if(num1 < 10){
//         document.write(num1 + ' Es menor a diez');
//     }else{
//         if(num2 < 10){
//             document.write(num2 + ' Es menor a diez'); 
//         }else{
//             document.write(num3 + ' Es menor a diez');
//         }
//     }
// }

//Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
// let item = prompt('Ingrese alguna de estas palabras (casa, mesa, perro, gato)');
// switch(item){
//     case 'casa': 
//         document.write('House');
//         break;
//     case 'mesa': 
//         document.write('table');
//         break;
//     case 'perro':
//         document.write('Dog');
//         break;
//     case 'gato':
//         document.write('Cat');
//         break;
//     default:
//         document.write('palabra no identificada');

// }

//Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).
// var x;
// x=1;
// while (x<=25)
// {
//   //document.write(x);
//   document.write('<br>');
//   x=x+1;
//   let multi = x * 11;
//   document.write(multi);

// }


//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.
// var x;
// x = 0;
// while(x <= 500){
//     document.write(x);
//     document.write('<br>');
//     x = x + 8;

// }


//Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
let x = 0;
let notas;
let sumaMas = 0;
let sumaMenos = 0;
while(x <10){
    nota = prompt('Ingrese Nota: ');
    nota = parseInt(nota);
    if(nota >= 7){
        sumaMas = sumaMas + 1;                                         
    }else{
        sumaMenos = sumaMenos + 1;
    }
    x = x + 1;
}
document.write('total de estudiantes con mayor o igual a 7 : ' + sumaMas);
document.write('<br>');
document.write('Cantidad de alumnos con notas menores a 7:'+sumaMenos);

