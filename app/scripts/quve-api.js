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
var QuveBehaviors = {};
var QuveApi = {};

QuveApi.services = {
//	Para usar el API de producción de ECI		
	session : {url : "app/data/session.json", local: true},		
//	session : {url : "quve/security/session", local : true},		
	products : {url : "products"},
	product : {url : "products/{0}"},
	searchExecutions : {url : "executions/search?{0}"},
	executions : {url: "executions"},
	searchProcesses : {url : "processes/search?{0}"},
};
QuveApi.testServices = {
	session : {url : "data/session.json"},
	products : {url : "data/products.json"},
	product : {url : "data/product.json"},
	searchExecutions : {url : "data/searchExecutions.json"},
	executions : {url: "data/executions.json"},
	searchProcesses : {url: "data/processes.json"}
};

// Para usar el API de producción de ECI
var quveConfig = {"quve.frontal.api":"portalgrupo.elcorteingles.int/icqaportal"};