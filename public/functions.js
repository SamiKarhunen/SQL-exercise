function sendTietoo(){
        $.get('/testi', function(data){   // Lähetetään URL serverille
               document.write(data);
        })
}

