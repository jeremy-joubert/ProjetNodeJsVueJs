const axios = require('axios')

function findAll () {
    const url = 'https://heroku-0b49.restdb.io/rest/articles'
    const config = {
        params: {

        },
        headers: {
            'x-apikey': 'b7c485043b0f7b0890f2ac3883d8fc42593ef'
        }
    }
    return axios.get(url, config)
}

function newArticle(titre, contenu, email){
    axios.post('https://heroku-0b49.restdb.io/rest/articles', {
        titre: titre,
        contenue: contenu,
        auteur: email
    },{
        headers : { 'x-apikey' : 'b7c485043b0f7b0890f2ac3883d8fc42593ef' }
    })
}

function updateArticle(titre, contenu, id) {
    return axios.patch('https://heroku-0b49.restdb.io/rest/articles/'+id, {
        titre: titre,
        contenue: contenu,
    }, {
        data: id,
        headers: {'x-apikey': 'b7c485043b0f7b0890f2ac3883d8fc42593ef'}
    })
}

function findArticleByTitre (titre) {
    const url = 'https://heroku-0b49.restdb.io/rest/articles'
    const config = {
        params : { q : {
                titre: titre
            }
        },//pour faire des recherche query
        headers: {
            'x-apikey': 'b7c485043b0f7b0890f2ac3883d8fc42593ef'
        }
    }
    return axios.get(url, config)
}

function deleteArticle(_id) {
    return axios.delete('https://heroku-0b49.restdb.io/rest/articles/'+_id, {
        data: _id,
        headers : { 'x-apikey' : 'b7c485043b0f7b0890f2ac3883d8fc42593ef' }
    })
    
}

module.exports = {
    findAll:findAll,
    newArticle:newArticle,
    updateArticle:updateArticle,
    findArticleByTitre:findArticleByTitre,
    deleteArticle:deleteArticle
}
