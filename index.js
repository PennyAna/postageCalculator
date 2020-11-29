const express = require('express')
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/getPerson', getPerson);

app.listen(app.get('port'), function() {
  console.log('Now listening for connections on port: ', app.get('port'));
});

function getPerson(req, res) {
  console.log('getting person info');
  var result = {id: 238, first: 'John', last: 'Smith', birthdate: '1983-09-19'};
  res.json(result);
}

/* const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */
