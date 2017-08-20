const orm = require('../config/orm')();

console.log(' WHAT IS THE ORMMMM', orm);

module.exports = function() {
  const that = {};

  function getAllBurgers() {
    return orm.selectAll();
  }

  that.getAllBurgers = getAllBurgers;
  return that;
}
