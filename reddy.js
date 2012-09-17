(function(context) {
	var cbs = [];
	document.onreadystatechange = function() {
		while(cbs.length > 0) {
			cbs.unshift()();
		}
	}
	
	context.ready = function(cb) {
		if(document.readyState[0] != 'l') cb();
		else cbs.push(cb);
	}
})(this);
