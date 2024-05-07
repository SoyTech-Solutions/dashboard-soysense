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

/* Fazendas com problemas */

var FazendasProblemas = document.getElementById('FazendasProblemas').getContext('2d');
var Problemas =
    new Chart(FazendasProblemas,        
                {
                    type: 'pie',
                    data: {
                        labels: ['Fazenda1', 'Fazenda2', 'Fazenda3'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3],
        
                            backgroundColor: [
                               '#8B008B',
                               '#00008B',
                               '#1E90FF',
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

/* Valor recuperado no mês */

var valorRecuperado = document.getElementById('valorRecuperado').getContext('2d');
var valor = 
    new Chart(valorRecuperado,        
        {
            type: 'line',
            data: {
                labels: ['Novembro/2023','Dezembro/2023','Janeiro/2024', 'Fevereiro/2024', 'Março/2024', 'Abril/2024'],
                datasets: [{
                    label: 'Valor em R$',
                    data: [5013.24, 4751.85, 4955.41, 5472.14, 4875.27, 5129.92],

                    backgroundColor: [
                       '#33BE33',
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
        
