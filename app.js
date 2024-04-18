require('dotenv').config(); // instancia para carregar todas as variaveis de ambiente .env

const serialport = require('serialport'); // importando serialport lib
const express = require('express'); // importando express lib
const mysql = require('mysql2'); // importando mysql2 lib

const SERIAL_BAUD_RATE = Number(process.env.BAUD_RATE); // taxa baud do serial
const PORT = process.env.PORT; // porta de execução da API

const INSERT_MODE_ON = true; // modo inserção on true ou false


// ============ ARDUINO SETUP =============
// função que executara tudo sempre que for chamada
const serial = async (valuesDht11Humidity,valuesLm35temperature) => { // recebendo os arrays como parametro quando for chamada
    // criando o pool de conexões 
    let poolDatabase = mysql.createPool({
            host: process.env.DB_HOST, // nome/ip da hospedagem
            user: process.env.DB_USER, // usuario 
            password: process.env.DB_PASSWORD, // senha do usuário
            database: process.env.DB_DATABASE,// nome do banco
            port: process.env.DB_PORT
    }).promise(); // promessa de execução

    const ports = await serialport.SerialPort.list(); // lista todas as portas disponíveis
    const portArduino = ports.find((port) => // buscando uma porta específica 
        port.vendorId == 2341 && port.productId == 43 // onde o vendorID e productID corresponda
    );

    // se não existir a porta, mostre um erro
    if (!portArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    // se a porta estiver disponível
    const arduino = new serialport.SerialPort(
        {
            path: portArduino.path, // onde a porta esta
            baudRate: SERIAL_BAUD_RATE // baud rate do serial
        }
    ); // crie um objeto do Serial

    // abra o modo de leitura do arduino
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });


    // definindo configurações de leitura  (adicionando um leitor)
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => { 
        //console.log(data); // verificando o retorno
        const values = data.split(';'); // quebre o dado a cada ; exemplo (15.00;23.00)  
        const lm35Temperature = parseFloat(values[0]); // values[0] = 23.00
        const dht11Humidity = parseFloat(values[1]); // values[1] = 15.00

        // variável que foi recebida pela função como parametro
        valuesDht11Humidity.push(dht11Humidity); // adicionando ao final do array o novo valor capturado 
        valuesLm35temperature.push(lm35Temperature); // adicionando ao final do array o novo valor captura

        // se o modo de inserção estiver ativo
        if (INSERT_MODE_ON) {


            // execute uma query, um comando sql
            await poolDatabase.execute(
                'INSERT INTO sensorLog (dadoCapturado, dataHora, fkSensor) VALUES (?,now(),1)',
                [dht11Humidity] // parametros que irão substituir os ? (dado individual, não o array)
            );
           // execute uma query, um comando sql
            await poolDatabase.execute(
                'INSERT INTO sensorLog (dadoCapturado, dataHora, fkSensor) VALUES (?,now(),2)',
                [lm35Temperature] // parametros que irão substituir os ? (dado individual, não o array)
            );
            console.log(`valores inseridos no banco: ${dht11Humidity}%, ${lm35Temperature}°C`);
        
        }
        
    });

    // se ao inciar a leitura, capturar um erro, mostre o erro no terminal
    arduino.on('error', (e) => {
        console.error(`Falha no arduino (Erro: ${e}`)
    });
}


// ================ EXPRESS SERVER SETUP =====================
const expressServer = (valuesDht11Humidity,valuesLm35temperature) => { // recebendo os arrays como parametro quando for chamada
    const app = express(); // instancia do express

    // configurando os middleware do servidor express
    app.use((request, response, next) => { 
        response.header('Access-Control-Allow-Origin', '*'); // permite que qualquer domínio * acesse os recursos do servidor
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept'); // quais tipos de headers (metodo get, post etc) mas também o origin, content assim vai
        next(); // chama a próxima função de middleware no ciclo para que seja aplicado em todas as rotas subsequentes
    });


    // abrindo porta
    app.listen(PORT, () => {
        console.log(`API executada com sucesso na porta ${PORT}`);
    });

    // rotas
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valuesDht11Humidity);
    });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valuesLm35temperature);
    });
}


// ==================== função de setup inicial, invocação que antecede tudo EXECUTA UMA ÚNICA VEZ, (gatilho inicial)========================
// função anonima para invocar imediatamente (IIFE) -> definição() então execução();
(async () => {
    const valuesDht11Humidity = []; // instancia do array de valores do dht11 
    const valuesLm35temperature = []; // instancia do array de valores do lm35 

    await serial( valuesDht11Humidity,valuesLm35temperature); // passando para a função serial os arrays vazio 
    expressServer(valuesDht11Humidity,valuesLm35temperature); // passando para a função expressServer os arrays vazio
})
();
