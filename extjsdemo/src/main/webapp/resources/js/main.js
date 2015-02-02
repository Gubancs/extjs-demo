

Ext.onReady(function() {

	var start = Date.now();

	App = Wcfe.App.init();

	var end = Date.now();
	var time = end - start;

	console.info("Application is ready now");
	console.info("Current version ", App.getVersion());
	console.info('Execution time: ' + time + " ms");
});
