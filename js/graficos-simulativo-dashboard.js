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

/*----Desempenho total por mes */
var contextoDesempenhoT = document.getElementById('desempenhoT').getContext('2d');
var desempenhoT = new Chart(
    contextoDesempenhoT, 
    {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 
                    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
            label: 'Desempenho',
            data: [90, 90, 88, 79, 93, 95, 78, 81, 70, 88, 83, 90],
            backgroundColor:
            [
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
                '#1d7fff',
            ],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
});