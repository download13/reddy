(function(context) {
	var done = false;
	
	context.ready = function(cb) {
		var c = check.bind(null, cb);
		if(!c()) document.onreadystatechange = c;
	}
	
	function check(cb) {
		if(document.readyState[0] != 'l') {
			done || cb();
			return done = true;
		}
		return false;
	}
})(this);
