var socket=io();

//Escuchar
socket.on('connect', function(){
    console.log("Conectado al servidor");
});

//Escuchar
socket.on('disconnect',function(){
    console.log('Conexión con el servidor perdida');
});

//Enviar información
socket.emit('enviarMensaje',{
    usuario: 'Juan Carlos',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('respuesta server', resp);
});

//Escuchar
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje);
})