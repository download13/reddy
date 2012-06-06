(function(context) {
	context.ready = function(cb) {
		var done = false;
		
		if(!check()) document.onreadystatechange = check;
		
		function check() {
			if(document.readyState[0] != 'l') {
				done || cb();
				return done = true;
			}
			return false;
		}
	}
})(this);
