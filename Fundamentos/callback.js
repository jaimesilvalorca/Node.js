// setTimeout( function (){
//     console.log('Hola Mundo')
// }, 1000);


const getUsuarioById =(id, callback) =>{
    const usuario = {
        id,
        nombre:'Jaime'
    }
    setTimeout(()=>{
        callback(usuario)
    },1500)
}


getUsuarioById(10, (usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
},1500)



