const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));


app.get('/', function( request, response ){
	response.render( 'index' ); 
});

app.get('/cats', function( request, response ){
	response.render( 'cats' ); 
});
app.get('/cars', function( request, response ){
	response.render( 'cars' ); 
});
app.get('/cars/new', function( request, response ){
	response.render( 'newcars' ); 
});

app.listen(8080, function(){
    console.log('Hello')
})

