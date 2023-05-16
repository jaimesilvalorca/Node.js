const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },

]

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id ${id}`);
    });

}

const getInfoUsario = async () => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id)

        return `el salario dle empleado: ${empleado} es de: ${salario}`
    }catch(error){
        return error
    }

}

// getInfoUsario(id);
// .then(msg => {
    
    
//     console.log(msg)
// })

// const id = 1