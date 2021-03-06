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

let dataBase = [];

async function getUsers(email) {
    let userEmail = Users.find(search=> search.email === email)
    return userEmail
}
async function getInfos(dataUser) {
    let getZipCode = Infos.find(search => search.email === dataUser.email) 
    return  Object.assign(dataUser,getZipCode)
}
async function getLocations(dataInfos) {
    let dataUser =  Locations.find(search=> search.zipcode === dataInfos.zipcode)
    return Object.assign(dataInfos,dataUser);
}

for (let i = 0; i < Users.length; i++) {
    getUsers(Infos[i].email)
    .then(sendEmail =>getInfos(sendEmail))
    .then(sendInfo=>getLocations(sendInfo))
    .then(sendData=> dataBase.push(sendData))
    .catch(err=>{
        console.log(err)
    })
}

console.log(dataBase)


