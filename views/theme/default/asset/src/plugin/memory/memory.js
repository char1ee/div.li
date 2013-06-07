define(function(require, exports){
	var memory = {
		set : function(key, val){
			// localStorage[key]
			// 		? console.log(key + '已经存在')
			//		:
			localStorage[key] = val;
		},
		get :function(key){
			return localStorage[key];
		},
		remove :function(key){
			localStorage.removeItem(key);
		}
	};

	exports.memory = memory;
})