Ext.ns("Wcfe.field");

Wcfe.field.NameField = Ext.extend(Ext.form.CompositeField, {

	/**
	 * Default empty text to firstName field
	 */
	firstNameText : "Firstname",

	/**
	 * Default empty text to lastName field
	 */
	lastNameText : "Lastname",

	initComponent : function() {
		var config = {};

		config.items = this.createItems();

		config = Ext.apply(this.initialConfig, config);
		Ext.apply(this, config);

		Wcfe.field.NameField.superclass.initComponent.call(this);
	},

	createItems : function() {
		var items = [ {
			xtype : XType.textfield,
			emptyText : this.lastNameText,
			name : 'name.lastName'
		}, {
			xtype : XType.textfield,
			emptyText : this.firstNameText,
			name : 'name.firstName'
		} ];
		return items;
	}
});

Ext.reg(XType.namefield, Wcfe.field.NameField);