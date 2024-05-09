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
                            label: 'Quantidade de problemas',
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
                    fill: true,
                    data: [5013.24, 4751.85, 4955.41, 5472.14, 4875.27, 5129.92],

                    backgroundColor: [
                       '#33BE33AA',
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
        
/* Registros d Alerts*/

var RegistroA = document.getElementById('RegistroA').getContext('2d');
var valor = 
    new Chart(RegistroA,     
        {

            type: 'line',
            data: {
                labels: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'
                  ],
                datasets: [
                    {
                        label: 'Fazenda X',
                        data: [1,5,0,0,9,3,2,7,11,3,2,8],
                        borderWidth: 3,
                        pointRadius: 0,
                        backgroundColor: "#ff110082",
                        borderColor: "#ff6384"
                    },
                    {
                        label: 'Fazenda Y',
                        data: [0,3,4,3,6,4,8,2,1,7,6,4],
                        borderWidth: 3,
                        pointRadius: 0,
                        backgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgb(75, 192, 192)'
                        
                    }
                ]

            // type: 'radar',
            // data: {
            //     labels: [
            //         'Janeiro',
            //         'Fevereiro',
            //         'Março',
            //         'Abril',
            //         'Maio',
            //         'Junho',
            //         'Julho',
            //         'Agosto',
            //         'Setembro',
            //         'Outubro',
            //         'Novembro',
            //         'Dezembro'
            //       ],
            //       datasets: [
            //         {
            //             label: 'Fazenda A',
            //             data: [5,8,0,9,2,12,3,0,1,7,5,1],
            //             fill: true,
            //             backgroundColor: '#000729',
            //             borderColor: 'rgb(255, 99, 132)',
            //             pointBackgroundColor: 'rgb(255, 99, 132)',
            //             pointBorderColor: '#fff',
            //             pointHoverBackgroundColor: '#fff',
            //             pointHoverBorderColor: 'rgb(255, 99, 132)'
            //           },
            //         {
            //         label: 'Fazenda X',
            //         data: [5,1,0,9,2,7,3,0,1,7,2,1],
            //         fill: true,
            //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
            //         borderColor: 'rgb(255, 99, 132)',
            //         pointBackgroundColor: 'rgb(255, 99, 132)',
            //         pointBorderColor: '#fff',
            //         pointHoverBackgroundColor: '#fff',
            //         pointHoverBorderColor: 'rgb(255, 99, 132)'
            //       }, {
            //         label: 'Fazenda Y',
            //         data: [11,3,1,0,7,2,4,9,0,0,1,2],
            //         fill: true,
            //         backgroundColor: 'rgba(54, 162, 235, 0.2)',
            //         borderColor: 'rgb(54, 162, 235)',
            //         pointBackgroundColor: 'rgb(54, 162, 235)',
            //         pointBorderColor: '#fff',
            //         pointHoverBackgroundColor: '#fff',
            //         pointHoverBorderColor: 'rgb(54, 162, 235)'
            //       }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });