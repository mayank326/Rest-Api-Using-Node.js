const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routers/api');

const app=express();

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise=global.Promise;

app.use(bodyParser.json());
app.use('/api',routes);

app.use(function(err,req,res,next){

	//console.log(err.message);
	res.send({error:err.message});
});

app.listen(process.env.port || 4000, function() {

	console.log('Listening for request');
});