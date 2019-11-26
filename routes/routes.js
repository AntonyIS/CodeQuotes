module.exports = function(app, db){

// index page
app.get('/', function(req, res){
	res.send("hello world")
});

// /api/quotes :RETRIEVE
app.get('/api/quotes', function(req, res){
	 let sql = "SELECT * FROM `quotes`";
	db.query(sql, function(error, results, fields){
		if(error)
		{
			throw error;
		}
		res.send(JSON.stringify({"status": 200, "error": null,"response":results}));
	});
	
});
// /api/quotes/ID :RETRIEVE
app.get('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id;
	
	let sql = "SELECT `id`, `author`, `quote`, `date` FROM `quotes` WHERE id='"+quoteId+" '";

	db.query(sql, function(error, result){
		if(error)
		{
			throw error;
		}
		else
		{
			res.send(result);
		}
	});
	

});

// /api/quotes/ :CREATE
app.post('/api/quotes/', function(req, res){
	
		
	let author = req.body.author;
	let quote = req.body.quote;
	

	let sql = "INSERT INTO `quotes`(`id`, `author`, `quote`, `date`) VALUES (NULL,' "+ author +" ',' "+ quote +"','"+ new Date() +" ')";

	db.query(sql, function(error, result){
		if(error)
		{
			throw error;
		}
		else{
			res.send(JSON.stringify({"status": 200, "error": null,"response":result}));
		}
	});
	
	
});

app.put('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id;
	
	let author = req.body.author;
	let quote = req.body.quote;
	
	let sql = "UPDATE `quotes` SET `author`=' "+author+" ',`quote`=' "+quote+" ' WHERE id=' "+quoteId+" '";

	db.query(sql, function(error, result){
		if(error)
		{
			throw error;
		}
		else
		{
			res.send(result);
		}
	});

});

app.delete('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id;
	
		
	let sql = "DELETE FROM `quotes` WHERE id=' "+quoteId+" '";

	db.query(sql, function(error, result){
		if(error)
		{
			throw error;
		}
		else
		{
			res.send("Record delete successfuly");
		}
	});

});

// end of file
}