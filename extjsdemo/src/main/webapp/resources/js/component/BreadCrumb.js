Ext.ns("Wcfe.component");

/**
 * Breadcrumb implementation
 * 
 * @xtype breadcrumb
 * @class Wcfe.component.Breadcrumb
 */
Wcfe.component.Breadcrumb = Ext.extend(Ext.Panel, {

	id : 'siteBreadcrumb',

	stateId : "siteBreadcrumb",

	stateful : true,

	actions : {},

	cls : 'x-breadcrumb',

	layout : "hbox",

	baseCls : 'x-plain',

	height : 100,

	layoutConfig : {
		align : 'middle'
	},

	initComponent : function() {

		this.addEvents(
		/**
		 * @event actionadded 
		 * This event fired via breadcrumb after an action successfully added.
		 */
		"actionadded");
		
		Wcfe.component.Breadcrumb.superclass.initComponent.call(this);
	},

	/**
	 * Init state events
	 */
	initStateEvents : function() {
		var me = this;

		Wcfe.component.Breadcrumb.superclass.initStateEvents.call(me);

		me.mon(me, 'actionadded', me.saveState, me);
	},

	/**
	 * We can use this function to add an action to breadcrumb.
	 * 
	 * 
	 * This method fire 'actionadded' after the action successfully added to
	 * breadcrumb
	 * 
	 * @param action
	 *            An action instance that we want to add the breadcrumb
	 */
	addAction : function(action) {
		if (!Ext.isDefined(action) || action == null) {
			throw "Method parameter 'action' cannot be null or undefined";
		}
		console.debug("Add an action to breadcrumb %O", action);

		this.add(new Ext.Button(action));

		this.actions[action.itemId] = action;

		this.doLayout();

		this.fireEvent("actionadded", action);
	},

	// private
	applyState : function(state) {
		console.debug("Apply %O state to Breadcrumb", state);

		var me = this;
		Ext.each(state.actions, function(actionId) {
			var action = ActionRegistry.getAction(actionId);
			me.addAction(action);
		});

		Wcfe.component.Breadcrumb.superclass.applyState.call(state);
	},

	/**
	 * Provide current state of this breadcrumb component
	 * 
	 * @return Return the state of breadcrumb
	 */
	getState : function() {
		var me = this;
		var state = {
			actions : me.getKeys(me.actions)
		};
		return state;
	},

	/**
	 * This is an helper method. We can use it to get all properties of an
	 * object.
	 * 
	 * @param {Object} object The object
	 * @return Return an array that contains all keys of the object
	 */
	getKeys : function(object) {
		var keys = [];

		for (key in object) {
			if (object.hasOwnProperty(key)) {
				keys.push(key);
			}
		}
		return keys;
	}
});

Ext.reg(XType.breadcrumb, Wcfe.component.Breadcrumb);
