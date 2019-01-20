const readline = require("readline");
var process = require("process");

exports.init = function(node, app_config, main) {
	node.announce([{
		"type": "console-keypress.event"
	}, app_config.metadata]);

	var rl = readline.createInterface({
		input: process.stdin
	});

	readline.emitKeypressEvents(process.stdin, rl);
	if (process.stdin.isTTY)
		process.stdin.setRawMode(true);

	process.stdin.on("keypress", (str, key) => {
		if (key.ctrl && key.name === 'c') {
			//main.close();
			process.emit("SIGTERM");
		} else {
			node.publish(undefined, key);
		}
	});
	console.log('Press any key...');

	return [function() {
		process.stdin.removeAllListeners("keypress");
		rl.close();
	}, node];
};
