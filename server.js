const express = require('express')
var app = express();
app.set('port', (process.env.PORT || 5000))
app.get('/getPerson', getPerson)
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows: null};
        res.render('pages/db', results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})
.get('postage', (req, res) => res.send('public/postage.html'))
  .get('postjs', (req, res) => res.send('public/stylesheets/postage.js'))
  .get('postcss', (req, res) => res.send('public/postage.css'))
  .get('/price', (req, res) => {
	res.render('public/price.js', {
    stampedLetter: stampedLetter, 
    meteredLetter: meteredLetter, 
    largeEnvelope: largeEnvelope, 
    packageService: packageService
   })})	  
const {Pool} = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, 
    ssl: {
        rejectUnauthorized: false
    }
}); 
app.listen(app.get('port'), function() {
  console.log('Now listening for connections on port: ', app.get('port'));
});

function getPerson(req, res) {
  console.log('getting person info');
  var id = req.query.id;
  console.log('retrieving person with id: ', id);
  var result = {id: 238, first: 'John', last: 'Smith', birthdate: '1983-09-19'};
  res.json(result);
}

var stampedLetter = [
    {name: 'uptoOne', val: 1, price: '.55'},
    {name:'onetoTwo', val: 2, price: '.70'},
    {name:'twotoThree', val: 3, price: '.85'}, 
    {name:'threetoThreeHalf', val: 4, price: '1.00'}
  ];
var meteredLetter = [		 
   {name: 'uptoOne', val: 1, price: '.50'},
   {name:'onetoTwo', val: 2, price: '.65'},
   {name:'twotoThree', val: 3, price: '.80'}, 
   {name:'threetoThreeHalf', val: 4, price: '.95'}
  ];
var largeEnvelope = [
   {name: 'uptoOne', val: 1, price: '1.00'},
   {name:'onetoTwo', val: 2, price: '1.20'},
   {name:'twotoThree', val: 3, price: '1.40'}, 
   {name:'threetoFour', val: 4, price: '1.60'}
   {name: 'fourtoFive', val: 5, price: '1.80'},
   {name:'fivetoSix', val: 6, price: '2.00'},
   {name:'sixtoSeven', val: 7, price: '2.20'}, 
   {name:'seventoEight', val: 8, price: '2.40'}
   {name: 'eighttoNine', val: 9, price: '2.60'},
   {name:'ninetoTen', val: 10, price: '2.80'},
   {name:'tentoEleven', val: 11, price: '3.00'}, 
   {name:'eleventoTwelve', val: 12, price: '3.20'}
   {name:'twelvetoThirteen', val: 13, price: '3.40'}
   ];
var packageService = [
   {name: 'uptoOne', val: 1, price: '3.80'},
   {name:'onetoTwo', val: 2, price: '3.80'},
   {name:'twotoThree', val: 3, price: '3.80'}, 
   {name:'threetoFour', val: 4, price: '3.80'}
   {name: 'fourtoFive', val: 5, price: '4.60'},
   {name:'fivetoSix', val: 6, price: '4.60'},
   {name:'sixtoSeven', val: 7, price: '4.60'}, 
   {name:'seventoEight', val: 8 price: '4.60'}
   {name: 'eighttoNine', val: 9, price: '5.30'},
   {name:'ninetoTen', val: 10, price: '5.30'},
   {name:'tentoEleven', val: 11, price: '5.30'}, 
   {name:'eleventoTwelve', val: 12, price: '5.30'}
   {name:'twelvetoThirteen', val: 13, price: '5.90'}
   ];