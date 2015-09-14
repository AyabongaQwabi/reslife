var express = require('express');
var handlebars =require('express-handlebars')

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
	res.render('events')
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