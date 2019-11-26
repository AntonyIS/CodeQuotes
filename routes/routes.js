module.exports = function(app, db){

// index page
app.get('/', function(req, res){
	res.send("hello world")
});

// /api/quotes :RETRIEVE
app.get('/api/quotes', function(req, res){
	db.connect(function(err){
		if(err)
		{
			console.log("Somethig went wrong with")
		}

	

		let sql = "SELECT * FROM `quotes`";

		db.query(sql, function(err, results){
			if(err)
			{
				throw err;
			}
			else{
				res.send(results);
			}
		});
	
		
	});
});
// /api/quotes/ID :RETRIEVE
app.get('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id
	db.connect(function(err){
		if(err)
		{
			console.log("Somethig went wrong with")
		}
		let sql = "SELECT `id`, `author`, `quote`, `date` FROM `quotes` WHERE id='"+quoteId+" '";

		db.query(sql, function(err, result){
			if(err)
			{
				throw err;
			}
			else
			{
				res.send(result);
			}
		});
	});

});

// /api/quotes/ :CREATE
app.post('/api/quotes/', function(req, res){
	db.connect(function(err){
		if(err)
		{
			console.log("Somethig went wrong with")
		}

		
		let author = req.body.author;
		let quote = req.body.quote;
		

		let sql = "INSERT INTO `quotes`(`id`, `author`, `quote`, `date`) VALUES (NULL,' "+ author +" ',' "+ quote +"','"+ new Date() +" ')";

		db.query(sql, function(err, result){
			if(err)
			{
				throw err;
			}
			else{
				res.send("Data added successfuly");
			}
		});
	
		
	});
	
	
});
// /api/quotes/id :UPDATE

app.put('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id
	db.connect(function(err){
		if(err)
		{
			console.log("Somethig went wrong with")
		}
		let author = req.body.author;
		let quote = req.body.quote;
		
		let sql = "UPDATE `quotes` SET `author`=' "+author+" ',`quote`=' "+quote+" ' WHERE id=' "+quoteId+" '";

		db.query(sql, function(err, result){
			if(err)
			{
				throw err;
			}
			else
			{
				res.send(result);
			}
		});
	});

});
// /api/quotes/ :DELETE
app.delete('/api/quotes/:id/', function(req, res){
	let quoteId = req.params.id
	db.connect(function(err){
		if(err)
		{
			console.log("Somethig went wrong with")
		}
		
		
		let sql = "DELETE FROM `quotes` WHERE id=' "+quoteId+" '";

		db.query(sql, function(err, result){
			if(err)
			{
				throw err;
			}
			else
			{
				res.send("Record delete successfuly");
			}
		});
	});

});

// end of file
}