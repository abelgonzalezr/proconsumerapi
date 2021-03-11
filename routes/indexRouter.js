const express = require('express');
const pjson = require('../package.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    version: pjson.version,
    name: pjson.name
  }).status(200);
});

module.exports = router;
