const express = require('express');

//data
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
    res.send('Welcome to the Pokemon App!')
});

//index
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
});


//show
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
})


//* LISTEN

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}...`)
})