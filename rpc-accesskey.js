
exports.init = function(node, app_config, main) {
	var accesskeys = [];
	this._source.subscribe(function() {
		var key = this.value;
		if (typeof key !== "object" || key === null)
			return;
		accesskeys.forEach(function(a) {
			if (a.key == key.name) {
				a.node.rpc(a.rpc);
			}
		});
	});

	/*"rpc": {
		"event": {
			"desc": "Event",
			"args": [],
			"accesskey": accesskeys.event
		},
	*/
	var s = main.node("/").filter({
		"metadata": {
		}
	}, "announce", function(node) {
		if (typeof node.metadata.rpc !== "object" ||
				node.metadata.rpc === null)
			return;
		for (var rpcf in node.metadata.rpc) {
			if (node.metadata.rpc.hasOwnProperty(rpcf) &&
					typeof node.metadata.rpc[rpcf] ===
						"object" &&
					node.metadata.rpc[rpcf] !== null &&
					typeof node.metadata.rpc[rpcf].accesskey
						=== "string") {
				var ak = node.metadata.rpc[rpcf].accesskey;
				accesskeys.push({
					"key": ak,
					"rpc": rpcf,
					"node": node
				});
			}
		}

		// Remove node from accesskeys.
		return function() {
			accesskeys = accesskeys.filter(function(a) {
				if (a.node === node)
					return true;
				return false;
			});
		};
	});
};
