var exec = require('cordova/exec');

var nativeclick = {

	watch: function(successCallback, errorCallback, options){
		document.body.onclick = function(e) {
		   e=window.event? event.srcElement: e.target;console.log(e);
		   if(e.className && e.className.indexOf('button')!=-1){
		   		exec(
		   			successCallback,
		            errorCallback,
		            "SoundEffects",
		            "click",
		            []);

		   }
		   else if(e.className && e.className.indexOf('sound-click')!=-1){
		   		exec(
		   			successCallback,
		            errorCallback,
		            "SoundEffects",
		            "click",
		            []);

		   }
		};
	}
};

module.exports = nativeclick;
