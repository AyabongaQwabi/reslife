$(ul).children().forEach(function(child){
	var qry = '.dates:nth-of-type('+child+')';
	setTimeout(function(){
		$(qry).animate({width:'0%'});
		console.log(qry)
		alert(qry)
	},3000);
});
alert("hey");
