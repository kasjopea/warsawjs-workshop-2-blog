console.log('test');
console.log('hkjgbk');
console.log('testfdsfdsf');
(function(root){
	'use strict';

	console.log('test');
	class Application {
		constructor(){
			console.log('BOOM!');
		}
	}
	window.a = new Application();
}(window));
console.log("kakakka");