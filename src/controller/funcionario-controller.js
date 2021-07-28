const Funcionarios= require("../models/FuncionariosModel");
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

  /*app.post("/users", async (req, res) => {
    const { nome, email, senha } = req.body;
    let newUser = new User(nome, email, senha);
    try {
      await userBanco.insertUser(newUser);
      res.status(201).json({
        message: "Usuário inserido com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao inserir usuario",
        serverLog: err.message,
        error: true,
      });
    }
  });

  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await userBanco.deleteUser(id);
      res.status(200).json({
        message: "Usuário deletado com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao deletar usuario",
        serverLog: err.message,
        error: true,
      });
    }
  });

  app.put("/users/:id", async (req, res) => {
    const { nome, email, senha } = req.body;

    const { id } = req.params;

    try {
      await userBanco.updateUser(id, nome, email, senha);
      res.status(200).json({
        message: "Usuário atualizado com sucesso",
        error: false,
      });
    } catch (err) {
      res.status(500).json({
        message: "Erro ao atualizar o  usuário",
        serverLog: err.message,
        error: true,
      });
    }
  });  */
};
