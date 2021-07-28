const Funcionario= require("../models/FuncionariosModel");
const FuncionariosDAO = require("../DAO/FuncionariosDAO");
module.exports = (app, db) => {
  let funcionariosBanco = new FuncionariosDAO(db);

  app.get("/funcionarios", async (req, res) => {
    try {
      let resposta = await funcionariosBanco.getAllFuncionarios();
      res.json({ result: resposta });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/funcionarios/:id", async (req, res) => {
    const { id } = req.params;
    try {
      if (parseInt(id)) {
        let resposta = await funcionariosBanco.getFuncionarios(id);
        if (resposta) res.json(resposta);
        else {
          throw new Error("Nenhum funcionario encontrado");
        }
      } else {
        throw new Error("é esperado um ID tipo INT, tente novamente");
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/funcionarios", async (req, res) => {
    const { nome, email, cargo, salario } = req.body;
    let newFuncionario = new Funcionario(nome, email, cargo, salario);
    try {
      await funcionariosBanco.insertFuncionarios(newFuncionario);
      res.status(201).json({
        message: "Funcionario inserido com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao inserir funcionario",
        serverLog: err.message,
        error: true,
      });
    }
  });

  app.delete("/funcionarios/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await funcionariosBanco.deleteFuncionarios(id);
      res.status(200).json({
        message: "Funcionario deletado com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao deletar funcionario",
        serverLog: err.message,
        error: true,
      });
    }
  });

  app.put("/funcionarios/:id", async (req, res) => {
    const { nome, email, cargo, salario } = req.body;

    const { id } = req.params;

    try {
      await funcionariosBanco.updateFuncionarios(id, nome, email, cargo, salario);
      res.status(200).json({
        message: "Funcionario atualizado com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao atualizar o  funcionario",
        serverLog: err.message,
        error: true,
      });
    }
  }); 
};
