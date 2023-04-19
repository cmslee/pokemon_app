const React = require('react');

function PokemonIndex (props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };

    const {pokemon} = props;

    return (
        <div style={myStyle}>
            <h1>All the Pokemon</h1>
            {pokemon.map((mon, i) => {
                return(
                    <ul>
                        <li key={pokemon[i]}>
                            <a href={`/pokemon/${i}`}>{mon.name.charAt(0).toUpperCase()+mon.name.slice(1)}</a>
                        </li>
                    </ul>
                )     
            })}
        </div>
    )
}


module.exports = PokemonIndex;