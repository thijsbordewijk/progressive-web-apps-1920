const express = require('express');
const request = require('request')

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const urlBase = 'https://swapi.co/api';
const urlCategory = '/people/';
const urlPageExtension = '?page='
const numberOfPages = 9;

app.get('/', (req, res) => {
    fetch(urlBase + urlCategory + urlPageExtension + apiPageNumber(numberOfPages))
    .then(res => res.json())
    .then(myJson => res.render('overview', {swJson:myJson}));
});

// app.use(express.static(path.join(__dirname, 'public')));

const port = 5000;

function apiPageNumber(maxNumberPages){
    const randomPageNumber = Math.floor((Math.random() * maxNumberPages) + 1);
    return randomPageNumber;
}

app.listen(port, () => console.log(`server start op ${port}`));