const React = require('react');

function New () {
    return(
        <div>
            <h1>Add a Pokemon!</h1>
            <form action='/pokemon' method='POST'>
                <p>
                    Name: <input type='text' name='name'/>
                </p>
                <p>
                    Image Url: <input type='text' name='img'/>
                </p>
                <input type='submit' value='add'/>
            </form>
        </div>
    )
}

module.exports = New;