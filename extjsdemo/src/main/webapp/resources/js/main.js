
History = Ext.History;
StateManager = Ext.state.Manager;

Ext.onReady(function() {

	var start = Date.now();

	App = App.init();

	var end = Date.now();
	var time = end - start;

	console.info("Application is ready now");
	console.info("Current version ", App.getVersion());
	console.info('Execution time: ' + time + " ms");

	History.add("dashboard");

	History.on('change', Page.onHistoryChange);
});
