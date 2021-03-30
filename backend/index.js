const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const article = require('./model/Article.js');
const utilisateurs = require('./model/Utilisateur.js')

const secret = 'thisismysecret';
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

const jwtStrategy = new JwtStrategy(jwtOptions, async function(payload, next) {
    // usually this would be a database call:
    const user = users.find(user => user.email === payload.user)

    if (user) {
        next(null, user)
    } else {
        next(null, false)
    }
})

passport.use(jwtStrategy)

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;

app.get('/', async function (req, res) {
    try {
        const response=await article.findAll().then(function (reponse){
            console.log(reponse.data);
            res.send(reponse.data);
        });
    }catch (e) {
        console.log(e) ;
    }
});
app.post('/show', function (req, res) {
    let titre=req.body.titre;
    article.findArticleByTitre(titre)
        .then((response) => {
            if(response.status!=200){
                res.status(401).json({ error: 'Mauvais titre' })
            }
            res.json(response.data)
        })
});
app.post('/new',  function (req, res) {
    let newArticle=req.body;
    console.log(newArticle);
    article.newArticle(newArticle.titre, newArticle.contenue, newArticle.auteur);
    res.json(newArticle);
});
app.post('/update', async function (req, res) {
    let articleUpdate = req.body
    await article.updateArticle(articleUpdate.titre, articleUpdate.contenue, articleUpdate._id)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.status(401).json({error: err})
        })
});
app.post('/delete', async function (req, res) {
    let articleDelete=req.body
    console.log(articleDelete)
    await article.deleteArticle(articleDelete._id)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            res.status(401).json({error: err})
        })
});
app.post('/compte/inscription', function (req, res) {
    let user=req.body
    console.log(user)
    utilisateurs.newUser(user.mail, user.password)
    res.json(user)
});
app.post('/compte/connect', async function (req, res) {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        res.status(401).json({ error: 'Email or password was not provided.' })
        return
    }

    const user=(await utilisateurs.findUser(email)).data
    console.log(user[0])

    if (!user || user[0].password !== password) {
        res.status(401).json({ error: 'Email / password do not match.' })
        return
    }

    const userJwt = jwt.sign({ user: user[0].mail }, secret)
    res.json({ jwt: userJwt })
});

app.get('/user', function (req, res) {
    let token = req.headers.token; //token
    console.log(token)
    jwt.verify(token, secret, async function (err, decoded) {
        if (err){
            res.status(401).json({ error: 'unauthorized.' })
            return
        }
        console.log(decoded.user)
        await utilisateurs.findUser(decoded.user).then(function (reponse) {
            console.log(reponse.data)
            res.send(reponse.data[0])
        })

    })
})

app.listen(PORT, function() {
    console.log('Serveur démarré sur le port '+PORT+'!');
})
