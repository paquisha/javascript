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

let dia = prompt('Ingrese dia: ');
let mes = prompt('Ingrese mes: ');
let anio = prompt('Ingrese el año: ');
