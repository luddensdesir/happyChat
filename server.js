var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http)
var path = require('path');
var bodyParser = require('body-parser');
var colorNames = require('colornames');
var colorString = require('color-string');

var index = require('./routes/index');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var sentMessages = []
var users = []

function createUser(id){
    var messages = []
    var color = ""
    var alias = ""

    return {id:id, alias:alias, messages:messages, color:color}
}

function getUser(id){
    for(user in users){
        if(users[user].id == id){
            // console.log("found " + id)a
            return users[user]
        }       
    }
}

io.on('connection', function(socket){
    var id = socket.id;
    users.push(createUser(id))

    console.log(id + " connected")
    socket.emit('firstConnect', id );

    socket.on('registerName', function(data){
        var user = getUser(data.id)
        console.log(data.id + " has a new name: " + data.alias)
        user.alias = data.alias;
        user.color = data.color;
        //not sure if it's okay to send this but whatever for now
        socket.broadcast.emit('newUserConnected', user);
    }); 

    socket.on('newMessage', function(data){
        if(getUser(data.id).alias.length){ //need a better check
            socket.broadcast.emit('newBroadcast', data);
            // console.log(data.message)
        }
    });  
});

app.use('/', index);

var port = process.env.PORT || 8080;
 
http.listen( port, function(){
    console.log( "Listening on server_port " + port );
}); 