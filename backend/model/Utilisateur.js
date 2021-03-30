const axios = require('axios')

function findUser (email) {
    const url = 'https://heroku-0b49.restdb.io/rest/utilisateur'
    const config = {
        params : { q : {
            mail: email
            }
        },//pour faire des recherche query
        headers: {
            'x-apikey': 'b7c485043b0f7b0890f2ac3883d8fc42593ef'
        }
    }
    return axios.get(url, config)
}

function findAll () {
    const url = 'https://heroku-0b49.restdb.io/rest/utilisateur'
    const config = {
        params: {

        },
        headers: {
            'x-apikey': 'b7c485043b0f7b0890f2ac3883d8fc42593ef'
        }
    }
    return axios.get(url, config)
}

function newUser(mail, password){
    axios.post('https://heroku-0b49.restdb.io/rest/utilisateur', {
        mail: mail,
        password: password
    },{
        params : { 'nom' : 'jeremy' },//pour faire des recherche query
        headers : { 'x-apikey' : 'b7c485043b0f7b0890f2ac3883d8fc42593ef' }
    })
}

module.exports = {
    findUser:findUser,
    newUser:newUser,
    findAll:findAll
}