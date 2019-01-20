
exports.init = function(node, app_config, main) {
	node.announce({
		"type": "bpm.event",
		"event": true,
		"rpc": {
			"event": {
				"desc": "Event",
				"args": [],
				"accesskey": "e"
			}
		}
	});
	node.rpc_event = function(reply) {
		console.log("EVENT");
		reply(null, "okay");
	};
};
