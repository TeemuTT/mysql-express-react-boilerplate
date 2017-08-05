var express = require('express');
var router = express.Router();
const db = require('../database.js');
var debug = require('debug')('backend:server/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    db.query('select 1 + 1 as solution', (error, results, fields) => {
      if (error) throw error;
      res.send('Database connection successfull!');
    });
  } catch (error) {
    debug('Error connecting to database: ', error)
  }
});

module.exports = router;
