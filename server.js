const express = require('express');

//data
const pokemon = require('./models/pokemon');

const app = express();
const PORT = 3000;

//* CONFIG

//* MIDDLEWARE

//* ROUTES

//home
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});

//index
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
});



//* LISTEN

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}...`)
})