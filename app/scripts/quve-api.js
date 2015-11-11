/*
 * Formateo de String
 */
if (!String.format) {
	String.format = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined' ? args[number] : match;
		});
	};
}

/*
 * Variables globales de QUVE
 */
var quveConfig;
if (!quveConfig) {
	console.log("!Inicializa valores por defecto!");
	quveConfig = {
		"quve.frontal.api" : "/icqaportal",
		"quve.frontal.intervalupdate" : "10000"
	};
}

var QuveBehaviors = {};