const express = require('express')
var app = express();
app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
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
app.get('/index', (req, res) => res.send('public/postage.html'))

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