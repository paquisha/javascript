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
// let x = 0;
// let notas;
// let sumaMas = 0;
// let sumaMenos = 0;
// while(x < 10){
//     nota = prompt('Ingrese Nota: ');
//     nota = parseInt(nota);
//     if(nota >= 7){
//         sumaMas = sumaMas + 1;
//     }else{
//         sumaMenos = sumaMenos + 1;
//     }
//     x = x + 1;
// }
// document.write('total de estudiantes con mayor o igual a 7 : ' + sumaMas);
// document.write('<br>');
// document.write('Cantidad de alumnos con notas menores a 7:'+sumaMenos);

//Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
// let x = 0;
// let promedio = 0;
// while(x <= 5){
//     let altura = prompt('Ingrese la altura: ');
//     altura = parseInt(altura);
//     promedio = promedio + altura;
//     console.log(promedio);
//     x = x + 1;
// }
// let prom = promedio/5;
// document.write('el tama;o promedio es: ' + prom);


//En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
// var cont1=0;
// var cont2=0;
// var total=0;
// var sueldo;
// var x=0;
// while (x<5)
// {
//   sueldo=prompt('Ingrese el sueldo','');
//   sueldo=parseInt(sueldo);
//   if (sueldo<=300)
//   {
//     cont1=cont1+1;
//   }
//   else
//   {
//     cont2=cont2+1;
//   }
//   total=total+sueldo;
//   x=x+1;
// }
// document.write('Cantidad de empleados que cobran 300 o menos:'+cont1);
// document.write('<br>');
// document.write('Cantidad de empleados que cobran más de 300:'+cont2);
// document.write('<br>');
// document.write('Gastos en sueldos en la empresa:'+total);

//Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)
// let x = 0;
// let acumulador = 0;
// let serie = 5;
// while(x < 20){
//     acumulador = acumulador + serie;
//     document.write(''+ acumulador + ' - ');
//     x = x + 1;
// }

//Mostrar los múltiplos de 10 hasta el valor 1500.
//Debe aparecer en pantalla 10 - 20 -30 etc.
// let contador = 0;
// let acumulador = 0;
// let serie = 10;
// while(contador < 150){
//     acumulador = acumulador + serie;
//     document.write(acumulador + ' - ');
//     contador = contador + 1;
// }


//Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
//Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

// let x1 = 0;
// let lista1 = 0;
// let lista2 = 0;
// let x2 = 0;
// while(x1 < 3){
//     let numero = prompt('ingrese numeros');
//     numero = parseInt(numero);
//     lista1 = lista1 + numero;
//     x1 = x1 + 1;
// }
// document.write('lista 1 suma: ' + lista1);
// document.write('<br>');

// while(x2 < 3){
//     let numero2 = prompt('ingrese numeros');
//     numero2 = parseInt(numero2);
//     lista2 = lista2 + numero2;
//     x2 =  x2 + 1;
// }
// document.write('lista 2 suma: ' + lista2);
// document.write('<br>')

// if(lista1 > lista2 ){
//     document.write('Lista uno es mayor ' + lista1);
// }else{
//     document.write('lista 2 es mayor ' + lista2);
// }

//Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
//Emplear el operador "%" en la condición de la estructura condicional.
//	if (valor%2==0)
//El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.

// let contador = 0;
// let par = 0;
// let impar = 0;
// let acumulador = 0;
// while(contador < 5){
//     let numeros = prompt('Ingrese valores: ');
//     numeros = parseInt(numeros);
//     if(numeros%2 == 0){
//         par = par + 1;
//     }else{
//         impar = impar + 1;
//     }
//     contador = contador + 1;
// }
// document.write('cantidad de pares: ' + par);
// document.write('<br>');
// document.write('cantidad de impares: ' + impar);

//Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
// a) De cada triángulo la medida de su base, su altura y su superficie.
// b) La cantidad de triángulos cuya superficie es mayor a 12.
// let base;
// let altura;
// let superficie;
// let contador2 = 0;
// for(let i = 1; i <= 3; i++){
//     base = prompt('Ingrese la base');
//     base = parseInt(base);
//     altura = prompt('Ingrese la altura');
//     altura = parseInt(altura);
//     superficie = base * altura/2;
//     if(superficie > 12){
//         contador2++;
//     }
//     document.write('triangulo Nro: ' + i + '<br>');
//     document.write('Base: '+ base + '<br>');
//     document.write('Altura: ' + altura + '<br>');
//     document.write('Superficie: ' + superficie + '<br>');
// }
// document.write('la cantidad de triangulos con superficie mayor a 12: ' + contador2);

//Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
// let contador = 0;
// let contador2 = 0;
// let acumulador = 0;
// let suma;
// for(contador = 1; contador <= 10; contador++){
//     let numero = prompt('Ingrese numeros: ');
//     numero = parseInt(numero);
//     if(contador > 5){
//         console.log(numero);
//         acumulador = acumulador + numero;  
       
//     }
//     document.write('los numeros son: ' + numero + '<br>');
    
// }
// document.write('la suma de los ultimos 5 numeros es: '+ acumulador);

//Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).

// let contador;
// let tabla = 5;
// let resultado;
// for(contador = 1; contador <= 12; contador++){
//     resultado = contador * tabla;
//     document.write(contador +' * '+ tabla +' = '+ resultado +'<br>');        
// }

//Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
//Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

// let contador = 0;
// let resultado;
// let tabla = prompt('ingrese la tabla de multiplicar');
// tabla = parseInt(tabla);
// if(tabla > 10){
//     document.write('solo puede ser valores del 1 al 10:')
// }else{
//     for(contador = 1; contador <=12; contador++){
//         resultado = contador * tabla;
//         document.write(tabla + ' * ' + contador + ' = ' + resultado + '<br>');
//     }
// }


// Realizar un programa que lea los lados de 4 triángulos, e informar:
// a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
// b) Cantidad de triángulos de cada tipo.
// c) Tipo de triángulo del que hay menor cantidad.

// let contador = 0;
// let contador2 = 0;
// let contador3 = 0;
// let acumulador = 0;
// let lado;
// let lado2;
// let lado3;
// for(let i = 1; i <= 4; i++){
//    lado = prompt('Ingrese primer lado: ');
//    lado = parseInt(lado);
//    lado2 = prompt('ingrese segundo lado: ');
//    lado2 = parseInt(lado2);
//    lado3 = prompt('Ingrese tercer lado: ');
//    lado3 = parseInt(lado3);
//    if(lado == lado2 && lado == lado3){
//       document.write('es un triangulo equilatero.<br>');
//       contador++;
//    }else{
//       if(lado == lado2 || lado == lado3 || lado2 == lado3){
//          document.write('es un Triangulo isoceles.<br>');
//          contador2++;
//       }else{
//          document.write('es un triangulo escaleno.<br>');
//          contador3++;
//       }
//    }
// }
// document.write('<br>');
// document.write('cantidad de triangulos equilateros: ' + contador +'<br>');
// document.write('cantidad de triangulos isoceles: ' + contador2 + '<br>');
// document.write('Cantidad de trinagulos escalenos: ' + contador3 + '<br>');
// if(contador < contador2 && contador < contador3){
//    document.write('Se ingresaron menos triangulos equilateros');
// }else{
//    if(contador2<contador3){
//       document.write('Se ingresaron menos triangulos isoceles');
//    }else{
//       document.write('Se ingresaron menos tringualos escalenos');
//    }
// }


//Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.

// let contador = 0;
// let num = prompt('ingrese la cantidad de cordenadas deseadas: ');
// num = parseInt(num);
// let acumuladorUno = 0;
// let acumuladorDos = 0;
// let acumuladorTres = 0;
// let acumuladorCuatro = 0;

// for(contador = 1; contador <= num; contador++){
//    let x = prompt('Ingrese la cordenada en x: ');
//    x = parseInt(x);
//    let y = prompt('Ingrese coordenada en y: ');
//    y = parseInt(y);
//    if(x > 0 && y > 0){
//       acumuladorUno++;
//    }else{
//       if(x < 0 && y > 0){
//          acumuladorDos++;
//       }else{
//          if(x < 0 && y < 0){
//             acumuladorTres++;
//          }else{
//             if(x > 0 && y < 0){
//                acumuladorCuatro++;
//             }            
//          }
//       }
//    }
// }
// document.write('cantidad de cordenadas en el primer cuadrante : ' +acumuladorUno + '<br>');
// document.write('cantidad de cordenadas en el segundo cuadrante : ' +acumuladorDos + '<br>');
// document.write('cantidad de cordenadas en el tercer cuadrante : ' +acumuladorTres + '<br>');
// document.write('cantidad de cordenadas en el cuarto cuadrante : ' +acumuladorCuatro);

//Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a) La cantidad de valores negativos ingresados.
// b) La cantidad de valores positivos ingresados.
// c) La cantidad de múltiplos de 15.
// d) El valor acumulado de los números ingresados que son pares.
// let contador = 0;
// let contadorPositivo = 0;
// let contadorNegativo = 0;
// let contadorMultiplos = 0;
// let contadorPares = 0
// for(contador = 1; contador <= 10; contador++){
//    let numero = prompt('ingrese numero: ');
//    numero = parseInt(numero);
//    if(numero < 0){
//       contadorNegativo++;
//    }else{
//       if(numero > 0){
//          contadorPositivo++;
//       }
//    }
//    if (numero%15==0 && numero!=0)
//    {
//       contadorMultiplos++;
//    }
//    if (numero%2==0)
//    {
//       contadorPares=contadorPares+numero;
//    }
// }
// document.write('la cantidad de numeros negativos es: ' + contadorNegativo + '<br>');
// document.write('la cantidad de numeros positivos es: ' + contadorPositivo + '<br>');
// document.write('la cantidad de multiplos de 15 es: ' + contadorMultiplos + '<br>');
// document.write('valor acumulado de numeros pares: ' + contadorPares + '<br>');

//Se cuenta con la siguiente información:
// Las edades de 5 estudiantes del turno mañana.
// Las edades de 6 estudiantes del turno tarde.
// Las edades de 11 estudiantes del turno noche.
// Las edades de cada estudiante deben ingresarse por teclado.
// a) Obtener el promedio de las edades de cada turno (tres promedios).
// b) Imprimir dichos promedios (promedio de cada turno).
// c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
// let i = 0;
// let suma1 = 0;
// let edad;
// for(i = 1; i <= 5; i++){
//    edad = prompt('ingrese la edad de los estudiantes de turno de la ma;ana: ');
//    edad = parseInt(edad);
//    suma1 = suma1 + edad;
// }
// let suma2 = 0;
// for(i = 1; i <= 6; i++){
//    edad = prompt('ingrese la edad de los estidiantes del turno de la tarde: ');
//    edad = parseInt(edad);
//    suma2 = suma2 + edad;
// }
// let suma3 = 0;
// for(i = 1; i <= 11; i++){
//    edad = prompt('ingrese la edad de los estudiantes del turno de la noche: ');
//    edad = parseInt(edad);
//    suma3 = suma3 + edad;
// }
// let promedioUno = suma1 / 5;
// let promediDos = suma2 / 6;
// let promedioTres = suma3 / 11;

// document.write('promedio de edades de alumnos del turno de la ma;ana: ' + promedioUno + '<br>');
// document.write('promedio de edades de estudiantes del turno de la tarde: ' + promediDos + '<br>');
// document.write('promedio de edades de estudiantes del turno de la noche: ' + promedioTres + '<br>');
// if(promedioUno > promediDos && promedioUno > promedioTres){
//    document.write('el turno de la ma;ana tiene un promedio mayor de edades' + promedioUno + '<br>');
// }else{
//    if(promediDos > promedioTres){
//       document.write('el turno de la tarde tiene mayor promedio de edades: ' + promediDos + '<br>');
//    }else{
//       document.write('el turno de la noche tiene mayor promedio de edades: ' + promedioTres + '<br>');
//    }
// }


//Elaborar una función a la cual le enviemos tres enteros y muestre el menor
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);

// valoresNumeros(num1, num2, num3);

// function  valoresNumeros(x1, x2, x3){

//     if(x1 < x2 && x1 < x3){
//         document.write('numero uno es el menor: ' + x1);
//     }else{
//         if( x2 < x3){
//             document.write('numero dos es menor: ' + x2);
//         }else{
//             document.write('numero tres es menor: ' +x3);
//         }
//     }
// }


//Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);

// ordenados(num1, num2, num3);

// function ordenados(x1, x2, x3){
//     if(x1 < x2 && x1 < x3){
//         document.write(x1 + ' ');
//         if(x2 < x3){
//             document.write(x2 + ' ' +x3);
//         }else{
//             document.write(x3 + ' ' +x2);
//         }
//     }else if(x2 < x3){
//         document.write(x2 + ' ');
//         if(x1 < x3){
//             document.write(x1 + ' ' + x3);
//         }else{
//             document.write(x3 + ' ' + x1);
//         }
//     }else{
//         document.write(x3 + ' ');
//         if(x1 < x2){
//             document.write(x1 + ' ' + x2);
//         }else{
//             document.write(x2 + ' ' + x1);
//         }
//     }
// }

//Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);

// ordenados(num1, num2, num3);
// function ordenados(x1, x2, x3){
//     if(x1 > x2 && x1 > x3){
//         return document.write('El mayor es: ' + x1);
//     }else{
//         if(x2 > x3){
//             return document.write('El mayor es: ' + x2);
//         }else{
//             return document.write('El mayor es: ' + x3);
//         }
//     }    
// }

//Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.
// let lado = prompt('Ingrese un lado del cuadrado: ');
// lado = parseInt(lado);

// perimetroCuadrado(lado);


// document.write('Lado del cuadrado: ' + lado + '<br>');


// function perimetroCuadrado(num){
//     let operacion = num * 4;
//     return document.write('El perimetro es: ' + operacion + '<br>');
// }

//Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos.
// let variable = prompt('Ingrese la variable: ');
// variable = parseInt(variable);

// digitos(variable);

// function digitos(x1){
//     if(x1 < 10){
//         return document.write('Tiene un digito: ' + x1);
//     }else if(x1 < 99){
//         return document.write('Tiene dos digitos: ' + x1)
//     }else if(x1 < 999){
//         return document.write('Tiene tres digitos: ' + x1);
//     }else if(x1 < 9999){
//         return document.write('Tiene cuatro digitos: ' + x1);
//     }else if(x1 < 99999){
//         return document.write('Tiene cinco digitos: ' + x1);
//     }else{
//         return document.write('Solo hasta 5 cifras');
//     }
// }


//Elaborar una función que reciba tres enteros y retorne el promedio.
// let nota1 = prompt('Ingrese nota uno: ');
// nota1 = parseInt(nota1);
// let nota2 = prompt('Ingrese nota dos: ');
// nota2 = parseInt(nota2);
// let nota3 = prompt('Ingrese nota tres: ');
// nota3 = parseInt(nota3);

// promedio(nota1, nota2, nota3);

// function promedio(x1, x2, x3){
//     let promedio = (x1 + x2 + x3)/3;
//     return document.write('El promedio es: ' + promedio);
// }

//Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
// let num1 = prompt('Ingrese numero uno: ');
// num1 = parseInt(num1);
// let num2 = prompt('Ingrese numero dos: ');
// num2 = parseInt(num2);
// let num3 = prompt('Ingrese numero tres: ');
// num3 = parseInt(num3);
// let num4 = prompt('Ingrese numero cuatro: ');
// num4 = parseInt(num4);
// let num5 = prompt('Ingrese numero cinco: ');
// num5 = parseInt(num5);

// suma(num1, num2, num3, num4, num5);

// function suma(x1,x2,x3,x4,x5){
//     let suman = x1 + x2 + x3 + x4 + x5;
//     return document.write('La suma es: ' + suman);
// } 


//programacion orientada a objetos
//Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.
// let fecha = new Date();
// let mes = fecha.getMonth();
// if(mes < 4){
//     document.write('estamos en el primer cuatrimestre del año');
// }else if(mes < 8){
//     document.write('estamos en el segundo cuatrimestre');
// }else{
//     document.write('estamos en el tercer cuatrimestre');
// }

//Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
// El valor acumulado de todos los elementos del vector.
// El valor acumulado de los elementos del vector que sean mayores a 36.
// Cantidad de valores mayores a 50.

// let elementos;
// elementos = new Array(8);
// cargar(elementos);
// calcularAcumulado(elementos);
// mayoresTreintaSeis(elementos);
// mayoresCincuenta(elementos);

// function cargar(elementos){
//     let f;
//     for(f = 0; f < elementos.length; f++){
//         let v;
//         v = prompt('Ingrese elementos: ');
//         elementos[f] = parseInt(v);
//     }     
// }

// function calcularAcumulado(elementos){
//     let total = 0;
//     let f;
//     for(f = 0; f < elementos.length; f++){
//         total = total + elementos[f];
//     }
//     document.write('Listado de elementos: <br>');
//     for(f = 0; f < elementos.length; f ++){
//         document.write(elementos[f] + '<br>');
//     }
//     document.write('Suma de los valores: ' + total + '<br>');
// }

// function mayoresTreintaSeis(elementos){
//     let total = 0;
//     let f;
//     for(f = 0; f < elementos.length; f++){
//         if(elementos[f] > 36){
//             total = total + elementos[f];
//         }        
//     }
//     document.write('suma de elementos mayores a 36: ' + total + '<br>');
// }

// function mayoresCincuenta(elementos){
//     let total = 0;
//     let f;
//     for(f = 0; f < elementos.length; f++){
//         if(elementos[f] > 50){
//             total++;
//         }
//     }
//     document.write('cantidad de elementos mayores a 50: ' + total + '<br>');
// }

//Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
// El tamaño del vector es a elección.

// let vec1;
// vec1=new Array(5);
// let vec2;
// vec2=new Array(5);
// let vecsuma;
// vecsuma=new Array(5);
// cargarVectores(vec1,vec2);
// sumarVectores(vec1,vec2,vecsuma);
// imprimirVector(vecsuma);

// function cargarVectores(vec1, vec2){
//     let f;
//     for(f = 0; f < vec1.length; f++){
//         let valor;
//         valor = prompt('Ingrese elementos primer vector: ');
//         vec1[f] = parseInt(valor);
//     }
//     for(f = 0; f < vec2.length; f++){
//         let valor;
//         valor = prompt('Ingrese elementos del segundo vector: ');
//         vec2[f] = parseInt(valor);
//     }
// }

// function sumarVectores(vec1, vec2, vecsuma){
//     let f;
//     for(f = 0; f < vecsuma.length; f++){
//         vecsuma[f] = vec1[f] + vec2[f];
//     }
// }

// function imprimirVector(vecsuma){
//     let f;
//     for(f = 0; f < vecsuma.length; f++){
//         document.write(vecsuma[f] + ' '); 
//     }
// }

//Confeccionar un programa que permita cargar un valor comprendido entre 1 y 10. Luego generar un valor aleatorio entre 1 y 10, mostrar un mensaje con el número sorteado e indicar si ganó o perdió:

// let num = prompt('Ingrese un valor entre 1 y 10');
// num = parseInt(num);
// let aleatorio = parseInt(Math.random()*10)+1;
// if(num == aleatorio){
//     document.write('Numero sorteado es: ' + aleatorio + '<br>');
//     document.write('numero ingresado por el usaurio es: ' + num);
// }else{
//     document.write('Lo siento el numero sorteao fue: ' + aleatorio + '<br>');
//     document.write('Opcion ingresada es: ' + num)
// }

//Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.
// let num = prompt('Ingrese numero: ');
// num = parseInt(num);

// let elevado = Math.pow(num, 3);
// document.write('numero elevado: ' + elevado);

//Ingresar por teclado un valor y luego mostrar la raiz cuadrada de dicho valor;
// let num = prompt('Ingrese numero: ');
// num = parseInt(num);

// let raiz = Math.sqrt(num);
// document.write('La raiz cuadra es: ' + raiz);