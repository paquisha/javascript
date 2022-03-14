const cambio = () =>{
    let puntero = document.getElementById('parrafo1')
    let padre = puntero.parentNode
    padre.style.fontSize = '40px'
}

const mostrarFilas = () =>{
    let elemento = document.getElementById('elemento1');
    while(elemento != null){
        console.log(elemento.childNodes[0].nodeValue);
        elemento = elemento.nextElementSibling;
    }
}