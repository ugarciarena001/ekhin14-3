var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('¡Hello, world!');
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
