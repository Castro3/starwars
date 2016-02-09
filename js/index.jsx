'use strict';

var quotes = [{
    'author': '- Yoda',
    'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
    'author': '- Senator palpatine',
    'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
    'author': '- Count Dooku',
    'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
    'author': '- Darth vader',
    'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
    'author': '- Princess leila',
    'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
    'author': '- Yoda',
    'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
    'author': '- Qui-Gon Jinn',
    'quote': 'Your focus determines your reality'
}, {
    'author': '- Yoda',
    'quote': 'Do. Or do not. There is no try.'
}, {
    'author': '- Obi-Wan-Kenobi',
    'quote': 'In my experience there is no such thing as luck.'
}, {
    'author': '- Yoda',
    'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
    'author': '- Darth Vader',
    'quote': 'The Force is strong with this one.'
}];

var button = document.querySelector('#generateButton');
var authors = [];

function loadAuthors() {
    quotes.forEach(function (result) {
        if (authors.indexOf(result.author.slice(2)) == -1) // if newDog isn't already in the array
        {
            authors.push(result.author.slice(2));
        }
    });
}

loadAuthors();

function replace(name) {
    
}

var ProperListRender = React.createClass({
    displayName: "ProperListRender",
    handleClick: function handleClick() {
        document.getElementById('dropdownMenu1').innerHTML = listValue;
    },
    render: function () {
        return (
            React.createElement("li", null,
                this.props.list.map(function (listValue) {
                    return React.createElement("a", {
                        key:listValue,
                        id: listValue,
                    }, listValue);
                })
            )
        )
    }
});

ReactDOM.render(React.createElement(ProperListRender, {
    list: authors
}), document.getElementById('charList'));


button.addEventListener('click', function onClick() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    ReactDOM.render(
        React.createElement('h1', null, quote.quote),
        document.getElementById('quoteElement')
    );
    ReactDOM.render(
        React.createElement('h1', null, quote.author),
        document.getElementById('authorElement')
    );
    return
});

