var express = require('express');
var router = express.Router();
var db = require("./db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	 db.query('select * from tw where id = 1', function (err, rows) {
        if (err) {
        	console.log("111");
            res.render('index', {title: 'count 24', datas: []});  // this renders "views/users.html"
        } else {
        	console.log(rows);
            res.render('index', {title: 'count 24', datas: rows});
        }
    })
  /*res.render('index', { title: 'Express' });*/
});

module.exports = router;
