(function(io){
    var socket = io.connect(window.location.origin);

    var body = document.getElementsByTagName('body')[0];
    body.addEventListener("keydown", function(event){
	socket.emit("input-event", { keyCode: event.keyCode });
    });
})(io);
