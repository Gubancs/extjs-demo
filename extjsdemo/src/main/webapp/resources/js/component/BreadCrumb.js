Ext.ns("Wcfe.component");

/**
 * Breadcrumb implementation
 * 
 * @class Wcfe.component.Breadcrumb
 * @extend Ext.Panel
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

	/**
	 * Init state events
	 */
	initStateEvents : function() {
		var me = this;

		Wcfe.component.Breadcrumb.superclass.initStateEvents.call(me);
		me.mon(me, 'actionadded', me.saveState, me);
	},

	addAction : function(action) {
		if (!Ext.isDefined(action) || action == null) {
			throw "Method parameter 'action' cannot be null or undefined";
		}
		console.debug("Add an action to breadcrumb %O", action);

		this.add(new Ext.Button(action))
		
		this.actions[action.itemId] = action;
		
		this.doLayout();

		this.fireEvent("actionadded", action);
	},

	applyState : function(state) {
		console.debug("Apply %O state to Breadcrumb", state);

		var me = this;
		Ext.each(state.actions, function(actionId) {
			var action = ActionRegistry.getAction(actionId);
			me.addAction(action);
		});

		Wcfe.component.Breadcrumb.superclass.applyState.call(state);
	},

	getState : function() {
		var me = this;
		var state = {
			actions : me.getKeys(me.actions)
		};
		return state;
	},
	
	//TODO refactor
	getKeys : function(object) {
		var keys = [];
		
		for(key in object){
			if(object.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		return keys;
	}
});

Ext.reg(XType.breadcrumb, Wcfe.component.Breadcrumb);
