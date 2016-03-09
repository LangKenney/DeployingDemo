var express = require('express')
var app = express();

app.set('view engine','ejs');

app.get('/',function(res, req){
    req.render('home');
});

app.get('/about',function(res, req) {
    req.render('about')
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Running the Node/express Server...')
})
