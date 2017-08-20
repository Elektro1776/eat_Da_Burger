const express = require('express');
const router = express.Router();
const burgerDb = require('../models/burger')();
console.log(' WHAT IS THE BURGER DB???', burgerDb);
router.get('/', (req, res) => {
  burgerDb.getAllBurgers().then((results) => {
    console.log('WHAT ARE THE BURGERS??', results);
    res.render('home', { title: 'Eat Da Burger', burgers: results});
  })
})

module.exports = router
