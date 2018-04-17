//using cors options
var express = require('express');
var routes = require('./app/routes');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use('/static', express.static('./public'));
var corsOptions = {
    // origin: 'http://localhost:3000',
    origin: 'http://ec2-54-513-562-675.compute-1.amazonaws.com:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', routes);
app.set('port', 8900);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Server running at http://127.0.0.1:' + port);
});

module.exports = app;