Ext.ns("Wcfe.form");

Wcfe.form.ClientFormPanel = Ext.extend(Wcfe.form.AbstractFormPanel, {

	cityLabel : "City",
	nameLabel : "Name",
	birthDateLabel : "Birthdate",
	resetText: "Reset",
	saveText : "Save",
	
	/**
	 * The state id of client form
	 */
	stateId : 'clientform.state',

	createItems : function() {
		var items = [ {
			fieldLabel : this.cityLabel,
			xtype : "textfield",
			name : "city"
		}, {
			xtype : XType.namefield,
			fieldLabel : this.nameLabel
		}, {
			xtype : XType.datefield,
			name : 'birthDate',
			fieldLabel : this.birthDateLabel
		} ];
		return items;
	},

	createBottomToolbar : function() {
		this.btnReset = Ext.create({
			text : this.resetText,
			scope : this,
			handler : this.resetForm
		}, "button");

		this.btnSave = Ext.create({
			text : this.saveText,
			scope : this,
			handler : this.saveForm
		}, "button");

		var buttons = [ this.btnSave, this.btnReset ];

		return buttons;
	},

});

Ext.reg("clientform", Wcfe.form.ClientFormPanel);
