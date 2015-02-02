Ext.ns("Wcfe");

XType = {
	textfield : "textfield",
	button : "button",
	window : "window",
	panel : "panel",
	viewport : "viewport",
	clientform : "clientform",
	breadcrumb : "breadcrumb",
	datefield : "datefield",
	namefield : "namefield"
};

Wcfe = {
	/**
	 * 
	 * @returns Return true if local storage is supported by browser.
	 */
	supportsLocalStorage : function() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}
};

/**
 * 
 * This is a singleton class and can't be create directly
 * 
 * Use the init(); for create a new instance
 * 
 * @author kokeny
 */
Wcfe.App = function() {

	/**
	 * Current version
	 */
	var version = "1.0";

	/**
	 * Name of the application
	 */
	var name = "WCFE";

	/**
	 * Init user interface
	 */
	function initUI() {
		console.debug("Init application user interface");

		createViewPort();
	}
	
	function initStateProvider(){
		var stateProvider  = null;
		if(Wcfe.supportsLocalStorage()){
			stateProvider = new Wcfe.state.LocalStorageProvider();
		}else{
			stateProvider = new Ext.state.CookieProvider();
		}

	 	Ext.state.Manager.setProvider(stateProvider);
	}

	function createViewPort() {
		var content = createContent();

		var viewPort = Ext.create({
			layout : 'border',
			stateful : true,
			items : [ {
				region : 'east',
				stateId: 'eastPanel',
				split: true,
				collapsible: true,
				width : 300,
				xtype : XType.panel,
			}, content ]
		}, XType.viewport);

		return viewPort;
	}

	function createContent() {
		var clientForm = Ext.create({}, "clientform");
	
		return Ext.create({
			region : 'center',
			title : 'Ügyfél keresés',
			items : [ clientForm ]
		}, XType.panel);
	}

	return {

		/**
		 * 
		 * @returns Return instance of the application
		 */
		getInstance : function() {
			return this;
		},

		/**
		 * 
		 * @returns Return instance of the application
		 */
		init : function() {
			initStateProvider();
			initUI();

			return this.getInstance();
		},

		/**
		 * 
		 * 
		 * @returns Return version of the application
		 */
		getVersion : function() {
			return version;
		},

		/**
		 * 
		 * @returns Return name of the application
		 */
		getName : function() {
			return name;
		}
	}
}();