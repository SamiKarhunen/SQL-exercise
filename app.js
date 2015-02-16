var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3000',
  database : 'myynti.sql',
});
 
 
connection.connect();  //yhdistetään mysql:n tietokantaan
 
app.get('/testi', function(req, res) {
        var strQuery = 'select etunimi from Tyontekija';
        var sendThis;
 
        connection.query( strQuery, function(err, rows){
        if(err) {
                throw err;
                //res.send('ongelma');
        }else{
                console.log( rows );
                sendThis = rows;
                res.send(sendThis);
   }    
  });
            
});
 

 
 
var server = app.listen(3000, function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)

    })

