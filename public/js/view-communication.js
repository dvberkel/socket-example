(function(io){
    var socket = io.connect(window.location.origin);

    socket.emit('viewer', { date : new Date() });

    var target = document.getElementById('target');
    function appendCharacter(keyCode) {
	var character = String.fromCharCode(keyCode);
	var span = document.createElement('span');
	span.textContent = character;
	target.appendChild(span);
    }

    socket.on('game-event', function(data){
	console.log(data);
	appendCharacter(data.keyCode);
    });

})(io);
