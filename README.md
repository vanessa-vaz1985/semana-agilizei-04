# semana-agilizei-04

# Sobre o projeto
    Este projeto foi desenvolvido durante o curso "Semana Agilizei 4.0", ministrado por "Samuel Lucas". 
    Aulas disponíveis até dia 21/11/2021.
    https://agilizeibootcamp.com.br/aulas-semana-agilizei


## Mapa Mental Cypress
    https://github.com/samlucas/cypress-essencial-mindmap

## Conceitos gerais
    NPM: Node Package Manager - Gerenciador de pacotes node. Possui vários comandos:
    init: inicializa um projeto
    install: instala pacotes
    uninstall: desinstala pacotes
    NPX: Node Package Executor
    headless: forma de executar os testes em "background". São executados em um navegador virtual, o qual não é exibido na tela.


# Pré-requisitos para utilizar o Cypress em um projeto
## Instalar o Node.js
    https://nodejs.org/en/download/
## Possuir um editor de texto (nesse projeto foi utilizado o Visual Studio Code - VSCode)
    https://code.visualstudio.com/download

## Alguns comandos interessantes para utilização no VSCode
    control + aspas = abre e fecha o terminal
    control + B = abre e fecha o explorer


# Criando o projeto
## Pelo terminal, aberto no VSCode, acessar o diretório onde deseja criar o projeto. Exemplo:
    cd workspace
## Criar o diretório do projeto
    mkdir semana-agilizei-cypress-04
## Navegar até a pasta do projeto
    cd semana-agilizei-cypress-04
## Solicitar ao VSCode que abra a pasta do projeto
    code .
## Criar um arquivo "package.json" dentro do projeto, antes de instalar o Cypress (nesse caso estamos passando "-y" ou "--yes", pois queremos gerar o arquivo com as respostas padrão):
    npm init -y

# Instalando o Cypress
## Para instalar o cypress com uma versão específica (nesse projeto utilizamos a versão 8.5.0):
    npm install cypress@8.5.0

## Para instalar o cypress com uma versão específica, em Dev Dependecies:
    npm install -D cypress@8.5.0

## Para instalar o cypress com a última versão disponível:
    npm install cypress

# Executando comando para criar a estrutura de pasta inicial do cypress
    npx cypress open

## Sobre as atribuições do comando cypress open:
    Criar a estrutura de pastas padrão (na primeira execução)
    Adicionar o arquivo de configurações cypress.json (na primeira execução)
    Abrir o cypress

# Sobre a estrutura de pastas criada pelo cypress
## fixtures: 
    serve para armazenar arquivos utilizados em mocks.
## integration: 
    serve para armazenar os arquivos de teste.
## plugins: 
    serve para configurar plugins. Todo código armazenado nessa pasta é executado no sistema operacional e não no browser.
## screenshots: 
    serve para armazenar as evidências de execução dos testes.
## support: 
    serve para armazenar arquivos de configurações, utilitários e os comandos customizados.
## cypress.json: 
    nesse arquivo ficam todas as configurações do cypress no projeto.


# Para executar todos os testes em headless
    npx cypress run

# Para executar os testes de uma spec específica em headless
    npx cypress run --spec ".\cypress\integration\1-getting-started\todo.spec.js"


# Aplicação testada nesse projeto
    https://twitter-clone-example.herokuapp.com/


# Boas práticas de testes em javascript
    https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme.md


