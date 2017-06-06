var server = require('http').createServer();
var io = require('socket.io')(server, {
  // serveClient: false // do not serve the client file, in that case the brfs loader is not needed
});
var port = process.env.PORT || 3000;

io.on('connect', onConnect);
server.listen(port, function () {
  console.log('server listening on port ' + port)
});

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', function () {
    console.log('disconnect ' + socket.id)
  });
}
