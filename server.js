const express = require('express');

const app = express();

const PORT = 3000;

//* CONFIG

//* MIDDLEWARE

//* ROUTES

//home
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})




//* LISTEN

app.listen(PORT, () => {
    console.log(`server is running on PORT:${PORT}...`)
})