const cambio = () =>{
    let h1 = document.getElementById('prueba');
    let cambio = parseInt(h1.childNodes[0].nodeValue);
    let nuevo = cambio + 6;
    console.log(nuevo);
    h1.childNodes[0].nodeValue = nuevo;
}