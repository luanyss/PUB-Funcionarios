/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'../','../','database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const Funcionarios_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Funcionarios" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "CARGO" varchar(64),
    "SALARIO" varchar(64)
  );`;

const ADD_Funcionarios_DATA = `
INSERT INTO Funcionarios (ID, NOME, EMAIL, CARGO, SALARIO)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', 'barista', '2500'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', 'barista', '2500'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', 'garçom', '2500')
`

function criaTabelaFuncionarios() {
    db.run(Funcionarios_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}


function populaTabelaFuncionarios() {
    db.run(ADD_Funcionarios_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de funcionarios");
    });
}


db.serialize( ()=> {
    criaTabelaFuncionarios();
    populaTabelaFuncionarios();
});