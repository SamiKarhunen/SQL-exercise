var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test1234',
  database : 'myynti',
});
 
 
connection.connect();  //yhdistetään mysql:n tietokantaan
 
app.get('/testi', function(req, res) {
var strQuery = 'select * from Tyontekija';
var sendThis;
connection.query( strQuery, function(err, rows, resp){
console.log( rows );
sendThis = rows //JSON.stringify(rows);
res.send(sendThis);
});
});

app.get('/toka', function(req, res) {
  var strQuery = 'SELECT Tyontekija.etunimi,Tyontekija.sukunimi,Tyontekija.titteli,Tyontekija.puhelinnumero,Tyontekija.toimipaikka,toimipiste.osoite FROM Tyontekija, toimipiste WHERE Tyontekija.toimipaikka ="1" AND Tyontekija.toimipaikka=toimipiste.ID ORDER BY etunimi, sukunimi, osoite';
  var sendThis;
  connection.query (strQuery, function(err, rows, resp){
    console.log(rows);
    sendThis = rows
    res.send(sendThis);
  });
});
 
app.get('/kolmas', function(req, res) {
  var strQuery = 'SELECT Tyontekija.etunimi,Tyontekija.sukunimi,Tyontekija.titteli,Tyontekija.puhelinnumero,Tyontekija.toimipaikka,toimipiste.osoite FROM Tyontekija, toimipiste WHERE Tyontekija.toimipaikka ="2" AND Tyontekija.toimipaikka=toimipiste.ID ORDER BY etunimi, sukunimi, osoite';
  var sendThis;
  connection.query (strQuery, function(err, rows, resp){
    console.log(rows);
    sendThis = rows
    res.send(sendThis);
  });
});
 
app.get('/neljas', function(req, res) {
  var strQuery = 'SELECT Tyontekija.etunimi,Tyontekija.sukunimi,Tyontekija.titteli,Tyontekija.puhelinnumero,Tyontekija.toimipaikka,toimipiste.osoite FROM Tyontekija, toimipiste WHERE Tyontekija.toimipaikka ="3" AND Tyontekija.toimipaikka=toimipiste.ID ORDER BY etunimi, sukunimi, osoite';
  var sendThis;
  connection.query (strQuery, function(err, rows, resp){
    console.log(rows);
    sendThis = rows
    res.send(sendThis);
  });
});

app.get('/viides', function(req, res) {
  var strQuery = 'SELECT ostotapahtuma.ajankohta, ostotapahtuma.asiakastieto, asiakastieto.etunimi, asiakastieto.sukunimi, asiakastieto.henkilotunnus FROM ostotapahtuma, asiakastieto WHERE ostotapahtuma.ajankohta<20150101 AND ostotapahtuma.asiakastieto=asiakastieto.henkilotunnus';
  var sendThis;
  connection.query (strQuery, function(err, rows, resp){
    console.log(rows);
    sendThis = rows
    res.send(sendThis);
  });
});




  
var server = app.listen(3000, '127.0.0.1', function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)

    })

