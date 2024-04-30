var umidCard = document.querySelector('#umid-card');
var tempCard = document.querySelector('#temp-card');


/* -- lm35Temperatura */
var contextoLm35Temperatura = document.getElementById('lm35Temperatura').getContext('2d');
var lm35Temperatura = new Chart(
    contextoLm35Temperatura,
    {
        type: 'line',
        data: {
            datasets: [{
                label: 'Temperatura',
                type: 'line',
                borderColor: ['#ffd902'],
                backgroundColor: ['#ffe13588']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatura'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);

/* -- qtd lm35 */
var contextoQtdLm35 = document.getElementById('qtdLm35').getContext('2d');
var qtdLm35 = new Chart(
    contextoQtdLm35,
    {
        type: 'pie',
        data: {
            datasets: [{
                label: 'Umidade',
                type: 'line',
                borderColor: ['#45b3e7'],
                backgroundColor: ['#45b4e794']
            }],
            labels: [
                'Ativos',
                'Inativos',
              ],
              datasets: [{
                data: [10, 1],
                backgroundColor: [
                  '#337AB7',
                  '#D9534F',
                ],
                hoverOffset: 2
              }]
        },
    }
);



/* -- dht11Umidade -- */
var contextoDht11Umidade = document.getElementById('dht11Umidade').getContext('2d');
var dht11Umidade = new Chart(
    contextoDht11Umidade,
    {
        type: 'line',
        data: {
            datasets: [{
                label: 'Umidade',
                type: 'line',
                borderColor: ['#45b3e7'],
                backgroundColor: ['#45b4e794']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Umidade',

                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    }
);
/* -- qtd dht11 */
var contextoQtdDht11 = document.getElementById('qtdDht11').getContext('2d');
var qtdDht11 = new Chart(
    contextoQtdDht11,
    {
        type: 'pie',
        data: {
            datasets: [{
                data: [9, 11],
                backgroundColor: [
                    '#D9534F', // Cor para os sensores inativos
                    '#337AB7', // Cor para os sensores ativos
                ],
                hoverOffset: 2
            }],
            labels: [
                'Inativos', // Rótulo para os sensores inativos
                'Ativos',   // Rótulo para os sensores ativos
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Status dos Sensores'
            }
        }
    }
);



var paginacao = {};
var tempo = {};
function obterDados(grafico, endpoint) {
    var http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3300/sensores/' + endpoint, false);
    http.send(null);
    var valores = JSON.parse(http.responseText);
    if (paginacao[endpoint] == null) {
        paginacao[endpoint] = 0;
    }
    if (tempo[endpoint] == null) {
        tempo[endpoint] = 0;
    }
    // Exibir à partir do último elemento exibido anteriormente
    var ultimaPaginacao = paginacao[endpoint];
    paginacao[endpoint] = valores.length;
    var valores = valores.slice(ultimaPaginacao);
    valores.forEach((valor) => {
        //Máximo de 60 itens exibidos no gráfico
        if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
            grafico.data.labels.shift();
            grafico.data.datasets[0].data.shift();
        }

        grafico.data.labels.push(`${horas}:${minutos}`);
        grafico.data.datasets[0].data.push(parseFloat(valor));
        grafico.update();
    })
    
}


setInterval(() => {
    obterDados(lm35Temperatura, 'lm35/temperatura');
    obterDados(dht11Umidade, 'dht11/umidade');
}, 1000);

