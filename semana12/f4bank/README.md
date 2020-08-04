# F4BANK - PROOF OF CONCEPT

## Stack

Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e Moment.js
. Além disso, ele segue uma arquitetura baseada em MVC, com 4 camadas
simples:

1. View: responsável pela comunicação com agentes externos
   (como o Frontend)
1. Model: responsável pela representação das nossas entidades
1. Controller: responsável pelo direcionamento das operações
1. Repository: responsável pelas transações com o Banco de dados e validações de dados.

## Sobre

Esse foi um projeto de Backend que utilizei para treinar o uso da arquitetura MVC e alguns dos princípios do SOLID, como Single Responsability Principle e Interface Segregation Principle.
A ideia é organizar transações em um banco de dados (fictício) validando as operações, trabalhando com datas, saldos, transferencias de valores entre entidades e outros conceitos importantes como aplicação de conceitos do paradigma de programação orientada à Objetos.

## Instruções para rodar

As instruções são:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto e receber todas as instruções de uso;
1. `npm run build` para gerar uma versão possível de ser deployada com
   os arquivos transpilados para Javascript
