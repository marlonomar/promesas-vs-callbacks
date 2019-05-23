
const getanombre = async()=>{

   return new Promise ((resolve,reject)=>{
       setTimeout(() => {
           resolve('marlon')
       }, 3000);
   })
   
}


const saludar = async()=>{

    let nombre =await getanombre();

    return `hola como estas ${nombre}`
}

saludar().then(mensaje=>{
    console.log(mensaje)
})

