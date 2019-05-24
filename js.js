/**
 * ENUNCIADO:
 * 
 * Boa tarde Galera,

Criei 3 objetos no arquivo em anexo:

•	Users
•	Infos
•	Locations

Como a intenção é treinar Array, Object, Promise e Callback, fiz algumas funções assíncronas no arquivo 
para que vocês  possam utilizar para brincar com o escopo abaixo:

1.	Objetivo final é criar um novo Array de Objetos com todas as informações de cada usuário que estão 
distribuidas nos 3 Objetos que descrevi acima (gender, name, email,zipcode, location, picture).
2.	Não precisa montar tela nenhuma, apenas retornar o array final no console.

Instruções:

1.	Ler o Object Users:
a.	Utilizar a informação email para obter as informações do usuário no Object Infos
i.	Dentro de Infos, utilizar zipcode para obter o endereço do usuário no Object Locations

Fazer a mesma coisa utilizando Promise e depois usando Callback, observando as particularidades e 
dificuldades de usar cada uma em cada cenário.

Funções que retornam User, Locations e Infos de forma assíncrona:
•	getUsers()
•	getInfos()
•	getLocations()

Qualquer dúvida, chama ae.

Grato.

 */

const Users = [
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "rolf",
            "last": "hegdal"
        },
        "email": "rolf.hegdal@example.com"
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "darth",
            "last": "hebras"
        },
        "email": "darth.hebras@example.com",
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "tifal",
            "last": "hood"
        },
        "email": "tifal.hood@example.com"
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "kyle",
            "last": "laurence"
        },
        "email": "kyle.laurence@example.com"
    }
];

const Infos = [
    {
        "zipcode": "24011",
        "email": "rolf.hegdal@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/60.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
        }
    },
    {
        "zipcode": "38930",
        "email": "darth.hebras@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/65.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
        }
    },
    {
        "zipcode": "07645",
        "email": "tifal.hood@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/13.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
        }
    },
    {
        "zipcode": "12210",
        "email": "kyle.laurence@example.com",
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/10.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
        }
    }
]

const Locations = [
    {
        "zipcode": "24011",
        "location": {
            "street": "1403  Goldcliff Circle",
            "city": "Washington",
            "state": "DC"
        }
    },
    {
        "zipcode": "38930",
        "location": {
            "street": "3011  Margaret Street",
            "city": "CROWELL",
            "state": "TX"
        }
    },
    {
        "zipcode": "07645",
        "location": {
            "street": "1752  Wetzel Lane",
            "city": "MONTVALE",
            "state": "NJ"
        }
    },
    {
        "zipcode": "12210",
        "location": {
            "street": "1056  West Virginia Avenue",
            "city": "Albany",
            "state": "NY"
        }
    }
]

async function getUsers(email) {
    let user = Users.find(user=> user.email === email)
    return user
}
async function getInfos(email,obj) {
    let getZip = Infos.find(datos => datos.email === email) 
    return  Object.assign(obj,getZip)
}
async function getLocations(zip,inf) {
    let datosUser =  Locations.find(datos=> datos.zipcode === zip)
    return Object.assign(inf,datosUser);
}

let newArray = [];

for (let i = 0; i < Users.length; i++) {
    getUsers(Infos[i].email).then(datos =>getInfos(datos.email,datos))
    .then(inf=>getLocations(inf.zipcode,inf))
    .then(local=> newArray.push(local))
}

console.log(newArray)

