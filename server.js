const express = require('express')
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/getPerson', getPerson);
app.get('/', (req, res) => res.render('pages/index'))

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
