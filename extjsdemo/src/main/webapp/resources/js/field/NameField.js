Ext.ns("Wcfe.field");

/**
 * This is a composite field
 * 
 * @author Gabor Kokeny
 * @xtype namefield
 */
Wcfe.field.NameField = Ext.extend(Ext.form.CompositeField, {
	
	/**
	 * @cfg {String} firstNameText
	 * Defaults to :  'Firstname'
	 * 
	 * Set the empty text of first name field
	 */
	firstNameText : "Firstname",

	/**
	 * @cfg {String} lastNameText
	 * Defaults to :  'Lastname'
	 * 
	 * Set the empty text of last name field
	 */
	lastNameText : "Lastname",

	initComponent : function() {
		var config = {};

		config.items = this.createItems();

		config = Ext.apply(this.initialConfig, config);
		Ext.apply(this, config);

		Wcfe.field.NameField.superclass.initComponent.call(this);
	},

	/**
	 * Create own items
	 * 
	 * @private
	 */
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