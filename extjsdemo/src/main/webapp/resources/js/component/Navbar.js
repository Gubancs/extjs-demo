/**
 * The main navbar of application
 * 
 * 
 * @author Gabor Kokeny
 * @xtype navbar
 * @class Wcfe.component.Navbar
 */
Wcfe.component.Navbar = Ext.extend(Ext.Panel, {

	/**
	 * @cfg cls
	 * Custom style
	 */
	cls : 'x-navbar',

	baseClass : 'x-plain',
	
	/**
	 * The CSS class of navbar when it's state is opened
	 * @cfg openedClass
	 */
	openedClass : 'x-navbar-open',

	/**
	 * @cfg layout
	 * A navbaron a gombokat VerticalBox layout segítségével rendereljük
	 */
	layout : {
		type : 'vbox',
		align : 'center'
	},
	
	
	defaults : {
		xtype : 'button'
	},

	/**
	 * @cfg stateId
	 * A menü egyedi state ID-ja
	 */
	stateId : "navbarState",

	/**
	 * @cfg openedWidth
	 * A navbar széleségge nyitott állapotban
	 */
	openedWidth : 315,

	/**
	 * @cfg initialWidth
	 * A kezdeti szélesség
	 */
	initialWidth : 98,

	/**
	 * @cfg width
	 * Szélesség beállítása
	 */
	width : 98,

	/**
	 * @cfg delay
	 * 
	 * Default navbar delay
	 */
	delay : 300,

	/**
	 * Navbar initicalizálása
	 * @param {Object} config
	 * @private
	 */
	initComponent : function(config) {

		var config = {};

		this.createNavbarItems(config);

		Ext.apply(this, Ext.apply(this.initialConfig, config));

		Wcfe.component.Navbar.superclass.initComponent.call(this);

	},

	/**
	 * Renderelés után beregisztárlunk két eseményfigyelőt
	 * @private
	 */
	afterRender : function() {

		Wcfe.component.Navbar.superclass.afterRender.call(this);

		this.mon(this.getEl(), 'mouseenter', this.onMouseEnterEventHandler,
				this);
		this.mon(this.getEl(), 'mouseleave', this.onMouseLeaveEventHandler,
				this);
	},

	/**
	 * Meghívódik amikor az egérrel a menü fölé navigált a felhasználó
	 * 
	 * @param {Object} event
	 * @private
	 */
	onMouseEnterEventHandler : function(event) {
		console.debug("Mouse enter event");

		var me = this;

		if (me.opend) {
			return;
		}

		me.mun(this.getEl(), 'mouseenter', me.onMouseEnterEventHandler, this);
		console.debug("Unregister moseenter event listener");

		me.open = setTimeout(function() {
			me.openNavbar();
		}, me.delay);

	},
	/**
	 * Meghívódik amikor a menüről elnavigált a felhasználó az egérrel
	 * 
	 * @param {Object} event
	 * @private
	 */
	onMouseLeaveEventHandler : function(event) {
		console.log("Mouse leave event");

		clearTimeout(this.open);

		this.mon(this.getEl(), 'mouseenter', this.onMouseEnterEventHandler,
				this);
		console.log("Register moseenter event listener");

		this.closeNavbar();
	},

	/**
	 * Programatically open navbar
	 */
	openNavbar : function(	) {
		var me = this;

		this.addClass(this.openedClass);
		this.getEl().scale(this.openedWidth, this.height, {
			callback : function() {
				me.opened = false;
			}
		});
		var tab = Ext.getCmp("tabs");
		tab.getEl().shift({
			x : this.openedWidth
		});
		this.opened = true;
	},

	/**
	 * Programatically close navbar
	 * 
	 */
	closeNavbar : function() {
		var me = this;

		this.removeClass(this.openedClass);
		this.getEl().scale(this.initialWidth, this.height, {
			callback : function() {
				me.opened = false;
			}
		});

		var tab = Ext.getCmp("tabs");
		tab.getEl().shift({
			x : this.initialWidth
		});
	},

	/**
	 * Create own items
	 * 
	 * @param {Object} config
	 * @return Return the array of items
	 * @private
	 */
	createNavbarItems : function() {
		var items = [ {
			tabTip : 'Ügyfél keresés',
			text : 'Ügyfél keresés',
			cls : 'icon_search',
			scope : this,
			handler : function(button, event) {
				this.setActiveButton(button);
				new WCFE.ClientSearchView().show();
			}
		}, {
			tabTip : 'Engedélyadás',
			text : 'Engedélyadás',
			cls : 'icon_group',
			scope : this,
			handler : function(button, event) {
				// this.setActiveButton(button);
			}
		}, {
			text : 'CTR jegyzőkönyv',
			cls : 'icon_cog',
			scope : this,
			handler : function(button, event) {
				// this.setActiveButton(button);
			}
		}, {
			text : 'CTI információk',
			cls : 'icon_key',
			scope : this,
			handler : function(button, event) {
				// this.setActiveButton(button);
			}
		}, {
			text : 'Telefonos funkciók',
			cls : 'icon_book',
			scope : this,
			handler : function(button, event) {
				// this.setActiveButton(button);
			}
		}, {
			text : 'Napló',
			cls : 'icon_phone',
			scope : this,
			handler : function(button, event) {
				this.setActiveButton(button);

				new WCFE.AuditlogView().show();
			}
		} ];
		
		return items;
	},

	/**
	 * Set the active button
	 * 
	 * @param {Object} button
	 */
	setActiveButton : function(button) {
		this.closeNavbar();
		if (this.activeMenu) {
			this.activeMenu.removeClass("active");
		}

		this.activeMenu = button;
		this.activeMenu.addClass("active");
	}
});


Ext.reg("navbar", Wcfe.component.Navbar);
