# telzir-servidor
    A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado FaleMais. 
 
    Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino.

    Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos). 
 
    A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação.

## Configurar o ambiente

Após clonar o repositório é necessário baixar as dependências do projeto, para isso basta executar o comando abaixo:

> `npm install`

## Executando localmente

Agora que obtemos nossas depedências podemos executar a API, iremos usar o seguinte comando para executar localmente:

> `node index.js`

A API estará ativa em:

> `http://localhost:3000`

## Executando testes

Para executar os testes unitários execute o script no terminal:

> `npm run test`
