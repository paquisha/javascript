function mostrarFechaHora(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1 ;
    let year = today.getFullYear();
    
    if(day < 10){
        day = `0${day}`
    }

    if(month < 10){
        month = `0${month}`
    }

    if(month > 8 && month < 12){
        console.log('Estamos en el ultimo cuatrimestre');        
    }else{
        if(month > 4 && month < 8){
            console.log('Estamos en el segundo cuatrimestre');
        }else{
            console.log('estamos en el primer cuatrimestre');
        }
    }

    today = `${day} / ${month} / ${year}`;
    const formateada = new Date().toDateString();
    console.log('formateada: ' + formateada);
    console.log(`Hoy es  ${today}`);
}

mostrarFechaHora();
