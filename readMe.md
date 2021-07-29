# PUB - Funcionarios

Projeto de fim do módulo 4 da Resilia Educação. Consiste na criação de uma API REST utilizando os verbos HTTP e contendo todas as operações de CRUD que retorna informações do portifólio de um Pub.

<h2>Informações Gerais</h2>

Foi utilizado para esse projeto:

Node.js com o framework Express, Git, DAO e além do VSCODE como editor de código. 

<h2>Bibliotecas externas</h2>

Outras bibliotecas utilizadas nesse projeto foram:

Jest - para garantir a correção de qualquer código JavaScript

Supertest - para rodar testes de rota.

Nodemon - para recarregar automaticamente o servidor durante o desenvolvimento.

Insomnia
<h2>Banco de dados</h2>
A estrutura de banco de dados utilizada foi o Sqlite3.

<h2>Iniciando o projeto</h2>
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.


* Clone o repositório em sua máquina

  git clone https://github.com/luanyss/PUB-Funcionarios.git

* Acesse a pasta criada

  cd Pub-FuncionariosAPI

* Instale os pacotes

  npm install

* Para iniciar os projetos use o comando abaixo

  npm run start

A porta padrão é a 3056. Caso queira alterá-la, procure a linha 21 em //Listen do arquivo server.js e altere o número 3056 para sua porta de preferência.

Populando o banco de dados
Caso queira, foi disponibilizado um arquivo que popula o banco de dados criado com quadro instâncias. Para rodá-lo, em uma nova janela no terminal/Powershell, ainda dentro do diretório do projeto, rode o seguinte comando:

npm run seed

<h2>Estrutura da API</h2>
A API é do tipo Restful, contendo assim, os quatro verbos HTTP: GET, POST, PUT e DELETE. Ao iniciar o arquivo em sua máquina, a url base será http://localhost:{porta}, onde {porta} deve ser substituido pela porta escolhida, por padrão será a 3056. As rotas abaixo deverão estar sempre prescindidas por essa url.

<h3>Resumo das rotas</h3>
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

* GET: URL_BASE/funcionarios
* GET: URL_BASE/funcionarios/{id}
* GET: URL_BASE/funcionarios/tag/{tag}
* POST: URL_BASE/funcionarios
* PUT: URL_BASE/funcionarios/{id}
* DELETE: URL_BASE/funcionarios/{id}

<h3>Retornando os Funcionários</h3>

```
        GET: URL_BASE/funcionarios

        RESPOSTA

{
  "result": [
    { 
      "ID": 1,
      "NOME": "Eugênio Oliveira",
      "EMAIL": "eugenio.oliveira@bol.com.br",
      "CARGO": "barista",
      "SALARIO": "2500"
    },

    {
      "ID": 2,
      "NOME": "Olívia Ribeiro",
      "EMAIL": "olivia.ribeiro@gmail.com",
      "CARGO": "garçom",
      "SALARIO": "3500"
    },
    {
      "ID": 4,
      "NOME": null,
      "EMAIL": null,
      "CARGO": "garçom",
      "SALARIO": "3500"
    },
    {
      "ID": 5,
      "NOME": null,
      "EMAIL": null,
      "CARGO": null,
      "SALARIO": null
    },
    {
      "ID": 6,
      "NOME": "Laila Faria Lima",
      "EMAIL": "laila_fl@yahoo.com",
      "CARGO": "garçom",
      "SALARIO": "2500"
    }
  ]
} 
} 


        GET: URL_BASE/funcionarios/{id}

        Resposta para id = 2:

{
  "result": [
    {
  "ID": 2,
  "NOME": "Olívia Ribeiro",
  "EMAIL": "olivia.ribeiro@gmail.com",
  "CARGO": "garçom",
  "SALARIO": "3500"
}
  ],
  "count": 1
}
        
}
        Inserindo novo Funcionarios
        POST: URL_BASE/funcionarios

Modelo a ser utilizado no body, no formato JSON:

{
  "nome": "Laila Faria Lima",
  "email": "laila_fl@yahoo.com",
  "cargo": "garçom",
  "salario": "2500"
}
    Resposta:

{
  "message": "Funcionario inserido com sucesso",
  "error": false
}

    DELETE: URL_BASE/portfolio/{id} 

    Resposta: 
 {
  "message": "Funcionario deletado com sucesso",
  "error": false
}
```

<h3>Testes unitários</h3>

Para o funcionamento dos testes, é necessário que o banco de dados esteja populado. Para isso, antes de iniciar os testes, rode:

iniciando o nodemon em modo desenvolvedor
<blockquote>npm run dev</blockquote>


<blockquote>npm run star</blockquote>

E depois rode os testes com:

<blockquote>npm run test</blockquote>
