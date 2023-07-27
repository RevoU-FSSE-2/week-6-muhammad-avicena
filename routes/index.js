var express = require('express');
var router = express.Router();

// All routes
const routes = [
  { path: '/', method: 'GET', description: 'Homepage' },
  { path: '/api/user', method: 'GET', description: 'Get all users' },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', routes: routes });
});

module.exports = router;
