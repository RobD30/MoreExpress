var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love.ejs', {thingVar: thing});
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'How I beat up Stewey Gryphin', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Rob'},
        {title: 'Dear god they are everywhere', author: 'Charlie'},
    ];
        
    res.render('posts.ejs', {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('SERVER IS LISTENING');
});