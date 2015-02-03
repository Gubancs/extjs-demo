

var clientAction = new Ext.Action({

	text : 'Ügyfél adatok',

	iconCls : 'do-something',

	itemId : 'clientAction',

	handler : function() {

		Ext.Msg.alert('Ügyfél adatok megjelenítése');
	},
});

ActionRegistry.reg(clientAction);


var searchAction = new Ext.Action({

	text : 'Ügyfél keresés',

	iconCls : 'do-something',

	itemId : 'searchAction',

	handler : function() {
		Ext.Msg.alert('Ügyfél keresés');
	},
});

ActionRegistry.reg(searchAction);
