var express = require('express');
var handlebars =require('express-handlebars')
 var bodyParser = require('body-parser')
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
app.use(bodyParser.urlencoded({ extended: false }))
            app.use(bodyParser.json())
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
		connection.query('select * from event_type',function(err,eventTypes){
			events.forEach(function(event){
				console.log('\n\nREMOVING CAHRS:'+event.image)
				event.image = event.image.replace("`","'")
				event.image = String(event.image)
				console.log('\n\nNOW :'+event.image)
			})
			res.render('events',{events:events ,eventTypes:eventTypes})
			console.log('EVENTS:'+JSON.stringify(events));
		})
	})
})
app.post('/events/new',function(req,res){

		console.log('\n\n Form:'+JSON.stringify(req.body))

})
app.get('/jobs',function(req,res){
	var connection = mysql.createConnection(dbOptions)
	connection.connect();
	connection.query('select * from job_articles',function(err,jobs){
			res.render('jobs',{jobs:jobs})
			console.log('\n\nJOBS:'+JSON.stringify(jobs));
	})

})

app.get('/sports',function(req,res){
	res.render('sports')
})

app.get('/participate',function(req,res){
	res.render('participate')
})

app.listen(3001)