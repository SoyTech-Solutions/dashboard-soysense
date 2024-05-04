var tituloCritico = document.querySelector('#critico-titulo');
var tituloDesempenho = document.querySelector('#desempenho-titulo');

setInterval(() => {

    // ----------crítico
    let minTemp = 31;
    let maxTemp = 37;
    
    let critico = parseInt(Math.random() * (maxTemp - minTemp) + minTemp);
    
    tituloCritico.innerHTML = `${critico}°C`;


    // -----------desempenho
    let minDes = 95;
    let maxDes = 100;
        
    let desempenho = parseInt(Math.random() * (maxDes - minDes) + minDes);
    tituloDesempenho.innerHTML = `${desempenho}%`;

}, 1000);