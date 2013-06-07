define(function(require, exports){
	var router = {
		get:function (url, callback) {
			var pathname = document.location.pathname;
			if(url ==='*'){
				callback(pathname);
			}
			if(typeof url === 'string'){
				(url === pathname) && callback(pathname);
			}
			return this;
		}
	}

	exports.router = router;
});