(function(document) {
	'use strict';

	// Grab a reference to our auto-binding template
	// and give it some initial binding values
	// Learn more about auto-binding templates at http://goo.gl/Dx1u2g
	var app = document.querySelector('#app');
	
	app.quveContext = {};
	
	app.displayInstalledToast = function() {
		document.querySelector('#caching-complete').show();
	};

	// Listen for template bound event to know when bindings
	// have resolved and content has been stamped to the page
	app.addEventListener('dom-change', function() {
		console.log('! QUVE se ha cargado correctamente !');
	});

	// See https://github.com/Polymer/polymer/issues/1381
	window.addEventListener('WebComponentsReady', function() {
		// imports are loaded and elements have been registered
	});

})(document);
