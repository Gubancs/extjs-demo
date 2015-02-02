/**
 * Client form panel hungarian translation
 */
Ext.override(Wcfe.form.ClientFormPanel, {
	cityLabel : "Város",
	nameLabel : "Név",
	birthDateLabel : "Születési dátum",
	resetText : "Törlés",
	saveText : "Mentés",
	title : 'Ügyfelek keresése'
});
/**
 * NameField hungarian translation
 */
Ext.override(Wcfe.field.NameField, {
	firstNameText : "Keresztnév",
	lastNameText : "Vezetéknév",
});

/**
 * Temporaly solution
 */
Ext.override(Ext.form.BasicForm, {

	nestedSeparator : '.',

	doSetValues : function(values, form, parentId) {
		var field, id, value;
		for (id in values) {
			value = values[id];
			id = Ext.isDefined(parentId) ? parentId + this.nestedSeparator + id
					: id;

			if (Ext.isObject(value)) {
				form.doSetValues(value, form, id);
			}

			field = this.findField(id);

			if (!Ext.isFunction(value) && field) {
				field.setValue(value);
				console.debug("Set field value: ", id, values, value);
				if (this.trackResetOnLoad) {
					field.originalValue = field.getValue();
				}
			}
		}
	},

	setValues : function(values) {
		if (Ext.isArray(values)) {
			for (var i = 0, len = values.length; i < len; i++) {
				var v = values[i];
				this.doSetValues(v, this);
			}
		} else { // object hash
			this.doSetValues(values, this);
		}
		return this;
	},

});