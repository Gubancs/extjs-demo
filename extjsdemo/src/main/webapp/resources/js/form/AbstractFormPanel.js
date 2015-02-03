Ext.ns("Wcfe.form");

Wcfe.form.AbstractFormPanel = Ext.extend(Ext.form.FormPanel, {

	/**
	 * This form is stateful
	 */
	stateful : true,

	/**
	 * Create panel without border
	 */
	border : false,
	
	
	/**
	 * Init state events
	 */
	initStateEvents : function() {
		var me = this;
		
		Wcfe.form.AbstractFormPanel.superclass.initStateEvents.call(me);
		me.mon(me, 'onsave', me.saveState, me);
		me.mon(me, 'onreset', me.saveState, me);

		this.iterateOwnItems(function(item) {
			item.mon(item, 'change', me.saveState, me);
			item.mon(item, 'change', me.onChange, me);
		});
	},

	iterateOwnItems : function(callback) {
		if (!Ext.isDefined(callback) || callback == null) {
			throw "Callback function cannot be null or undifined";
		}

		if (!this.items || !this.items.length) {
			return;
		}

		var iter = function(items) {
			items.each(function(item) {
				if (item.isComposite) {
					iter(item.items);
				}
				callback(item);
			});
		}
		iter(this.items);
	},

	initComponent : function() {
		var config = {};

		config.items = this.createItems();
		config.bbar = this.createBottomToolbar();

		config = Ext.apply(this.initialConfig, config);

		Ext.apply(this, config);

		Wcfe.form.AbstractFormPanel.superclass.initComponent.call(this);
	},

	createItems : function() {
		return [];
	},

	createBottomToolbar : function() {
		return [];
	},

	onChange : function() {
		console.debug("Form fields has been changed");
	},

	resetForm : function() {
		console.debug("Reset form values");

		this.iterateOwnItems(function(item) {
			item.setValue(null);
		});

		this.fireEvent('onreset');
	},

	saveForm : function() {
		console.debug("Save client form");

		var me = this;

		me.fireEvent('onsave');
		this.getForm().submit({
			clientValidation : true,
			submitEmptyText : false,
			success : me.onSaveSuccess,
			failure : me.onSaveFailure,
			waitTitle : "Please wait",
			waitMsg : "Please wait, save in progress"
		});
	},

	onSaveSuccess : function() {
		console.debug("Save success");
	},

	onSaveFailure : function() {
		console.debug("Save failed");
	},

	applyState : function(state) {
		console.debug("Apply %O state to ClientForm", state);
		this.getForm().setValues(state.formValues);
		
		Wcfe.form.AbstractFormPanel.superclass.applyState.call(state);
	},

	getState : function() {
		console.log("state", this);
		var state = {
			formValues : this.getForm().getValues(),
			width : this.getWidth(),
			height : this.getHeight()
		};
		return state;
	},
});
