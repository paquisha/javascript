let palabra;
palabra = prompt('ingrese cualquiera de las cuatro palabras a traducir, (casa, mesa, perro, gato):');
switch(palabra){
    case 'casa':
        document.write('house');
        break;
    case 'mesa':
        document.write('table');
        break;
    case 'perro':
        document.write('dog');
        break;
    case 'gato':
        document.write('cat');
        break;
    default:
        document.write('no concide con las indicadas');
}