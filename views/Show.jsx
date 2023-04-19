const React = require('react')

function Show(props) {
    const {pokemon} = props;
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt={`This is a pic of ${pokemon.name}`} width='250px'></img>
            <a href='/pokemon'>Back</a>
        </div>
    )
}

module.exports = Show;