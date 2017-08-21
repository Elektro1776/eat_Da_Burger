const express = require('express');
const orm = require('../config/orm')();
console.log(' WHAT IS ORM', orm);
const router = express.Router();

router.post('/api/createBurger', (req, res) => {
  orm.insertOne(req.body).then((response) => {
    console.log(' SAVED TO DB: ', response);
    res.redirect('/');
  }).catch((err) => {
    console.log('What is the errr', err);
    res.sendStatus(500);
  })
})
router.put('/api/devourBurger', (req,res) => {
  orm.updateOne(req.body.id).then((response) => {
    res.sendStatus(200)
  }).catch((err) => {
    res.sendStatus(500)
  })
});

module.exports = router;
