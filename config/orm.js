const connection = require('./connection')''

const orm = function(){
  const that = {};
  function selectAll() {
    connection.query(`SELECT * FROM burgers_db`, (err, results) => {
      return results;
    })
  }
  function insertOne(burger) {
    connection.query(`INSERT INTO burgers SET ?`, burger, (err, results) => {

    })
  }
  function updateOne(burger) {
    const { burgerId } = burger;
    connection.query('', burgerId, (err, results) => {

    })
  }
  that.selectAll = selectAll;
  that.insertOne = insertOne;
  that.updateOne = updateOne;
  return that;
}

module.exports = orm;
