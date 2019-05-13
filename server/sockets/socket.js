const {io}=require('../server');


io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect',()=>{
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje',(mensaje, callback)=>{
        //console.log(mensaje);

        if(mensaje.usuario){
            callback({
                respuesta: 'Todo ha salido bien'
            });
        }else{
            callback({
                respuesta: 'Todo ha salido fatal'
            });
        }
    })
});