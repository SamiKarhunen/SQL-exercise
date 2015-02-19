function sendTietoo(){
	$.get('/testi', function(data){  
        var tieto = data
        var x;
        for ([x] in tieto){// Lähetetään URL serverille
               document.write("<br>" + data[x].etunimi + " " + data[x].sukunimi);
           }
       });
    }

function tokaFunktio(){
	$.get('/toka', function(data){
		var tieto = data
		var x;
		var out = "";
		for ([x] in tieto) {
			out += "<br>" + data[x].etunimi + " " + data[x].sukunimi + " " + data[x].titteli + " " + data[x].puhelinnumero + "";
		document.getElementById("toka").innerHTML = out;
		document.getElementById("toka").style.display = 'block';
	          }
	});
}

function kolmasFunktio(){
	$.get('/kolmas', function(data){
		var tieto = data
		var x;
		var out = "";
		for ([x] in tieto) {
			out += "<br>" + data[x].etunimi + " " + data[x].sukunimi + " " + data[x].titteli + " " + data[x].puhelinnumero + "";
		document.getElementById("kolmas").innerHTML = out;
		document.getElementById("kolmas").style.display = 'block';
	          }
	});
}

function neljasFunktio(){
	$.get('/neljas', function(data){
		var tieto = data
		var x;
		var out = "";
		for ([x] in tieto) {
			out += "<br>" + data[x].etunimi + " " + data[x].sukunimi + " " + data[x].titteli + " " + data[x].puhelinnumero + "";
		document.getElementById("neljas").innerHTML = out;
		document.getElementById("neljas").style.display = 'block';
	          }
	});
}

function viidesFunktio(){
	$.get('/viides', function(data){
		var tieto = data
		var x;
		var out = "";
		for ([x] in tieto) {
			out += "<br>" + data[x].etunimi + " " + data[x].sukunimi + " " + data[x].ajankohta + "";
		document.getElementById("viides").innerHTML = out;
		document.getElementById("viides").style.display = 'block';
	          }
	});
}




function piilotaToka() {
    document.getElementById("toka").style.display = 'none';
}

function piilotaKolmas() {
    document.getElementById("kolmas").style.display = 'none';
}

function piilotaNeljas() {
    document.getElementById("neljas").style.display = 'none';
}

function piilotaViides() {
    document.getElementById("viides").style.display = 'none';
}
