window.onload=function(){
    var message = [];
    var socket=io.connect('http://localhost:3000');
    socket.on('connect', function(data){ 
        socket.emit('join', 'pesan dari client');
    });
    var kirim = document.getElementById('idkirim');
    kirim.onclick=function(){
        var text=document.getElementById('idpesan').value;
        socket.emit('send', text);};
}

