var express = require('express');
var handlebars =require('express-handlebars')
var mysql = require('mysql')
myConnection = require('express-myconnection');
            //database = require('./database');
            var dbOptions = {
                host : "localhost",
                user : "root",
                password : "theaya5379",
                port : 3306,
                database : "reslife"

            }


var app = express();

app.use(express.static('public'))
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/',function(req,res){
	res.render('home')
})

app.get('/login',function(req,res){
	res.render('login')
})

app.get('/events',function(req,res){
	var connection = mysql.createConnection(dbOptions)
	connection.connect();
	connection.query('select * from event',function(err,events){
			res.render('events',{events:events})
			console.log('EVENTS:'+JSON.stringify(events));
	})

})

app.get('/jobs',function(req,res){
	res.render('jobs')
})

app.get('/sports',function(req,res){
	res.render('sports')
})

app.get('/participate',function(req,res){
	res.render('participate')
})

app.listen(3001)