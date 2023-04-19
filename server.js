require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

//data
const Mon = require('./models/Mon');
const pokemon = require('./models/pokemon');

const app = express();
const PORT = 3000;

//* CONFIG
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//* MIDDLEWARE
app.use(express.urlencoded({extended: false}))

//* ROUTES

//home
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Pokemon App!</h1>
        <a href='/pokemon'>Enter...</a>
    `)
});

//index
app.get('/pokemon', (req, res) => {
    Mon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    });
});

//post
app.post('/pokemon', (req, res) => {
    console.log(req.body);
    Mon.create(req.body, (error, createdMon) => {
        res.redirect('/pokemon')
    })
})

//new or create
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})


//show
app.get('/pokemon/:id', (req, res) => {
    //?this code is how to have it display according to id from array
    // res.render('Show', {pokemon: pokemon[req.params.id]});
    Mon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    });
})


//* LISTEN

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}...`);
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})