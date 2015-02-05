/**
 * Center panel extend the Ext.Panel class We can use this class to manage
 * center content of application.
 * 
 * @author Gabor Kokeny
 * @singleton
 */
Wcfe.Page = Ext.extend(Ext.Panel, {

	/**
	 * MainContainer is a statful object
	 * 
	 * @cfg stateful
	 */
	stateful : true,

	/**
	 * @cfg stateId The unique state idendity of MainContainer
	 */
	stateId : "mainContainer.state",

	/**
	 * @cfg region
	 */
	region : 'center',

	/**
	 * @cfg cls
	 */
	cls : 'x-container',

	/**
	 * @cfg border
	 */
	border : false,

	/**
	 * @cfg frame
	 */
	frame : false,

	/**
	 * Create new instance of MainContainer
	 * 
	 * @protected
	 */
	constructor : function() {
		Wcfe.Page.superclass.constructor.call(this);

		this.addEvents(

		/**
		 * @event changed MainContainer fire this event after the content was
		 *        changed
		 * @param event
		 *            The event object
		 * @param content
		 *            The new content
		 */
		"changed");

	},

	/**
	 * Initialize center content of application
	 * 
	 * @protected
	 */
	initComponent : function() {

		var config = {};

		config.items = this.createItems();

		config = Ext.apply(this, config);

		Wcfe.Page.superclass.initComponent.call(this);
	},

	/**
	 * Initialize state events
	 * 
	 * @protected
	 */
	initStateEvents : function() {
		this.mon(this, 'changed', this.saveState, this);
	},

	/**
	 * create own items
	 * 
	 * @protected
	 */
	createItems : function() {
		return [];
	},

	/**
	 * Set the current content
	 * 
	 * @param content
	 */
	setContent : function(content) {
		console.debug("set center content", content);

		this.add(content);

		this.doLayout(true, true);

		this.fireEvent("changed", content);
	},

	/**
	 * Apply state
	 * 
	 * @param state
	 *            The new state of the MainContainer
	 * @protected
	 */
	applyState : function(state) {
		console.debug("Apply state to MainContainer", state);
	},

	/**
	 * Get current state of main container
	 * 
	 * @protected
	 */
	getState : function() {
		var state = {};

		return state;
	},

	/**
	 * This function executed when the History changed.
	 * 
	 * @param {String}
	 *            token The history token
	 */
	onHistoryChange : function(token) {
		console.debug("On history changed %O", token);
		
		if(token == "dashboard"){
			console.log("Open dashboard");
		}
	}
});

// overwrite Wcfe.Page with static instance
Wcfe.Page = new Wcfe.Page();
Page = Wcfe.Page;
