const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  console.log(`First name: ${req.body.firstname}`);
  console.log(`Last name: ${req.body.lastname}`);
  res.send('POST received!');
});

module.exports = router;
