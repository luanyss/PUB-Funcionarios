class FuncionariosDAO {
  constructor(db) {
    this.db = db;
  }

  getAllFuncionarios() {
    return new Promise((resolve, reject) => {
      this.db.all("Select * from Funcionarios", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  getFuncionarios(id) {
    return new Promise((resolve, reject) => {
      this.db.get("Select * from Funcionarios where id = ?", id, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  insertFuncionarios(funcionarios) {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO Funcionarios(nome, email, cargo, salario) VALUES (?,?,?,?)`,
        Object.values(funcionarios),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  deleteFuncionarios(funcionariosId) {
    return new Promise((resolve, reject) => {
      this.db.run(`delete from Funcionarios where id = ?`, funcionariosId, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  updateFuncionarios(id, nome, email, cargo, salario) {
    if (nome || email || cargo || salario) {
      let virgula = false
      let newArray = []
      let sql = 'UPDATE Funcionarios SET '
      if(nome){
        sql = sql + ' NOME = ?'
        virgula = true
        newArray.push(nome)
      }
      if(email){
        if(virgula)
          sql = sql  +',EMAIL = ?'
        else{
          sql = sql  +'EMAIL = ?'
          virgula = true
        }
        newArray.push(email)
      }
      if(cargo){
        if(virgula)
          sql = sql  +',CARGO = ?'
        else{
          sql = sql  +'CARGO = ?'
          virgula = true
        }
        newArray.push(cargo)
      }

      if(salario){
        if(virgula)
          sql = sql  +',SALARIO = ?'
        else{
          sql = sql  +'SALARIO = ?'
          virgula = true
        }
        newArray.push(salario)
      }

      sql = sql + 'WHERE id = ?'
      newArray.push(id)
      return new Promise((resolve, reject) => {
        this.db.run(sql, newArray, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
    else
    throw new Error('Nenhum atributo (Nome, email, cargo, salario) enviado')
  }
}

module.exports = FuncionariosDAO;
