//--------------------KEEP ALIVE

var http = require("http");

var alive_options = {
  host: 'www.skrell.at',
  port: 80,
  path: '/robot/ff_state.php?alive=true'
};

setInterval(sendAliveSignal,5*60*1000);	//5 minutes
sendAliveSignal();

function sendAliveSignal(){
	http.get(alive_options, function(res) {
	  //console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
	  //console.log("Got error: " + e.message);
	});
}
