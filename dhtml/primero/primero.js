const elementos = () =>{
    let uno = document.getElementById('bloqueUno');
    let dos = document.getElementById('bloqueDos');
    console.log('cantidad de nodos hijos: ' +(uno.childNodes.length + dos.childNodes.length));
}

const cantidadNodos = () =>{
    let bloqueUno = document.getElementById('bloqueUno');
    let bloqueDos = document.getElementById('bloqueDos');
    console.log('cantidad de elementos empleados: ' + (bloqueUno.children.length + bloqueDos.children.length ));
}