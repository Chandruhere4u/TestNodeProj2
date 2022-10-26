var express = require('express');

var app = express();

var port=process.env.port || 3000;

app.use('/', function(req, res, next) {
    console.log('logging in : ', req.url);
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/> </head><body>Hello World</body></html>');
    res.end();
});

app.get('/api/', function(req, res) {
    res.json({firstName:"John", lastName:"Doe"});
    res.end();  
})

app.get('/person/:id', function(req, res) {
    res.send('Hello World : ' + req.params.id);
    res.end();  
})



app.listen(port);