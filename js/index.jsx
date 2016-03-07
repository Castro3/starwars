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
    'author': '- Obi-Wan-Kenobi',
    'quote': 'These aren’t the droids you’re looking for..'
}, {
    'author': '- Yoda',
    'quote': 'Death is a natural part of life. Rejoice for those around you who transform into the Force.'
}, {
    'author': '- Obi-Wan-Kenobi',
    'quote': 'You were the chosen one! It was said that you would destroy the Sith, not join them.'
}, {
    'author': '- Darth vader',
    'quote': 'I’ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.'
}, {
    'author': '- Yoda',
    'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
    'author': '- Obi-Wan-Kenobi',
    'quote': 'Remember...the Force will be with you, always.'
}, {
    'author': '- Han Solo',
    'quote': 'That\’s not how the Force works!'
}, {
    'author': '- Bala-Tik',
    'quote': 'Tell that to Kanjiklub'
}, {
    'author': '- Qui-Gon Jinn',
    'quote': 'There\'s always a bigger fish.'
}, {
    'author': '- Darth vader',
    'quote': 'No. I am your Father.'
}, {
    'author': '- Han Solo',
    'quote': 'One thing\'s for sure, we\'re all going to be a lot thinner.'
}, {
    'author': '- Han Solo',
    'quote': 'Great shot kid, that was one in a million.'
}, {
    'author': '- Darth vader',
    'quote': 'Obi-Wan has taught you well.'
}, {
    'author': '- Darth vader',
    'quote': 'The Force is strong with this one.'
}];


var authors = ["All characters"];

function loadAuthors() {
    quotes.forEach(function (result) {
        if (authors.indexOf(result.author.slice(2)) == -1) // if newDog isn't already in the array
        {
            authors.push(result.author.slice(2));
        }
    });
}

function getQuote(localauthor)
{
    var quoteList = [];
    quotes.forEach(function(result){
        if(result.author.slice(2) == localauthor)
            {
                quoteList.push(result);
            }
    })
    return quoteList[Math.floor(Math.random() * quoteList.length)];
}
loadAuthors();

var char = "All characters";
var ProperListRender = React.createClass({
    displayName: "ProperListRender",
    render: function () {
        return (
            React.createElement("li", null,
                this.props.list.map(function (listValue) {
                    return React.createElement("a", {
                        key: listValue,
                        id: listValue
                    }, listValue);
                })
            )
        )
    }
});

ReactDOM.render(React.createElement(ProperListRender, {
    list: authors
}), document.getElementById('charList'));

authors.forEach(function (author) {
    document.getElementById(author).onclick = function () {
        char = author;
        document.getElementById(author);
        document.getElementById("dropdownMenu1").innerHTML = author;
        console.log(char);
    };
})

var navbutton = document.querySelector('#navigbut');
navbutton.addEventListener('click', function onClick() {
    document.getElementById("html").className = "html-background";
    return
});

var button = document.querySelector('#generateButton');
button.addEventListener('click', function onClick() {
    document.getElementById("html").className = "html-background2";
    var quote;
    if(char == "All characters")
        {
            quote = quotes[Math.floor(Math.random() * quotes.length)];
        }
    else
        {
            quote = getQuote(char);
        }
    ReactDOM.render(
        React.createElement('p', null, quote.quote),
        document.getElementById('quoteElement')
    );
    ReactDOM.render(
        React.createElement('p', null, quote.author),
        document.getElementById('authorElement')
    );
    return
});