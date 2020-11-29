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
