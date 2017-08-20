const connection = require('./connection');

const orm = function(){
  const that = {};
  function selectAll() {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM burgers`, (err, results) => {
          if (err) reject(err);

           resolve(results);
        })

      })
  }
  function insertOne(burger) {
    return new Promise((resolve, reject) => {
      let query = connection.query(`INSERT INTO burgers SET ?`, burger, (err, results) => {
        if (err) reject(err);

        resolve(results);
      })
    })
  }
  function updateOne(burger) {
    const { burgerId } = burger;
    return new Promise((resolve, reject) => {
      let query = connection.query("UPDATE `burgers_db`.`burgers` SET devoured='1' WHERE id= ? ",[burger], (err, results, fields) => {
        if (err) reject(err);
        resolve(results);
      });
    })
  }
  that.selectAll = selectAll;
  that.insertOne = insertOne;
  that.updateOne = updateOne;
  return that;
}

module.exports = orm;
