/**
 * This is a singleton class
 * 
 * 
 * Register an action
 * 
 * <pre>
 * 	<code>
 * var action = new Ext.Action({
 * 	text : &quot;Search clients&quot;,
 * 	itemId : &quot;searchAction&quot;,
 * 	handler : function() {
 * 		//TODO implement action handler
 * 	}
 * });
 * 
 * ActionRegistry.reg(action);
 * </code>
 * </pre>
 * 
 * Get the action by actionId
 * 
 * <pre>
 * 	<code>
 * var action = ActionRegistry.getAction(&quot;searchAction&quot;);
 * </code>
 * </pre>
 * 
 * @author Gabor Kokeny
 * @class ActionRegistry
 * @singleton
 */
ActionRegistry = function() {

	/**
	 * Registered actions
	 */
	var actions = {};

	function get(actionId) {
		return actions[actionId];
	}

	function put(actionId, action) {
		actions[actionId] = action;
	}

	function remove(acitonId) {
		delete actions[actionId];
	}

	return {

		/**
		 * Get action by actionId
		 * 
		 * @param actionId
		 *            The id of the action
		 * @return Return the registered action
		 */
		getAction : function(actionId) {
			if (actionId == null) {
				throw "Method parameter 'actionId' cannot be null";
			}

			var action = get(actionId);

			if (!Ext.isDefined(action) || action == null) {
				throw "There is no action with actionId " + actionId;
			}

			return action;
		},

		/**
		 * Register an action
		 * 
		 * @param action
		 *            The action object
		 */
		reg : function(action) {
			put(action.itemId, action);
			console.debug("Action %s has been registered ", action.itemId);
		},

		/**
		 * Unregister an action by actionId;
		 * 
		 * @param {string}
		 *            actionId The id of the action
		 */
		unreg : function(actionId) {
			remove(actionId);
			console.debug("Action %s has been unregistered ", actionId);
		}
	};
}();
