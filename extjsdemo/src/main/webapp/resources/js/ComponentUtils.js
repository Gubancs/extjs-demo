/**
 * Component utilities
 * 
 * @author Gabor Kokeny
 * @singleton
 */
Wcfe.ComponentUtils = function() {

	return {

		/**
		 * Add new KeyNav object to a component
		 * 
		 * @param comp
		 *            The component
		 * @param config
		 *            The key navigation config
		 * @return Return the KeyNav instance
		 */
		addKeyNav : function(comp, config) {
			var cfg = Ext.apply(config, {
				scope : comp
			});
			console.debug("Create new KeyNav %O to component %O", cfg, this);
			return new Ext.KeyNav(comp.getEl(), cfg);
		}
	};
}();

ComponentUtils = Wcfe.ComponentUtils;