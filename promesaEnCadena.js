const empleados = [
    {nombre:"marlon",id:1},
    {nombre:"jose",id:2},
    {nombre:"carmen",id:3}
]

const salarios = [
    {id:1,salario:3000},
    {id:2,salario:2000},

]


const getEmpleado = (id)=>{

    return new Promise ((resolve,reject)=>{
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if(empleadoDB){
            resolve(empleadoDB);
        }
        else{
            reject(`no existe un empleado con id ${id}`);
        }
    })
}

const getSalario= (empleado)=>{
    return new Promise ((resolve,reject)=>{
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if(salarioDB){
            resolve({
                nombre: empleado.nombre,
                salario : salarioDB.salario,
                id : empleado.id
            });
        }
        else{
            reject(`no existe un salario para ${empleado.nombre}`);
        }
    })
}


getEmpleado(3).then(empleado =>{
    return getSalario(empleado)
}).then(res=>{
    console.log(`el salario de ${res.nombre} es de ${res.salario}`)
}).catch(err=>{
    console.log(err)
})

