Ext.ns("Wcfe.form");

Wcfe.form.ClientFormPanel = Ext.extend(Wcfe.form.AbstractFormPanel, {

	cityLabel : "City",
	
	nameLabel : "Name",
	
	birthDateLabel : "Birthdate",
	
	resetText: "Reset",
	
	saveText : "Save",
	
	title : 'Search clients',
	
	stateId : 'clientform.state',
	
	border : false,
	
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
		

		this.btnAction = Ext.create({
			text : "Add action",
			scope : this,
			handler : this.addAction
		}, "button");

		var buttons = [ this.btnSave, this.btnReset, this.btnAction ];

		return buttons;
	},

	addAction : function(button, event){
		var breadcrumb = Ext.getCmp("siteBreadcrumb");
		breadcrumb.addAction(clientAction);
		breadcrumb.addAction(searchAction);
	
	}
	
});


Ext.reg("clientform", Wcfe.form.ClientFormPanel);
