var express = require('express');
var handlebars =require('express-handlebars')

var app = express();

app.use(express.static('public'))
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.get('/',function(req,res){
	res.render('home')
})

app.listen(3001)