/**
 * This is a singleton class
 * 
 *  
 *  Register an action
 * <pre>
 * 	<code>
 * 		var action = new Ext.Action({
 * 			text : "Search clients",
 * 			itemId : "searchAction",
 * 			handler : function(){
 * 				//TODO implement action handler
 * 			}
 * 		});
 * 
 * 		ActionRegistry.reg(action);
 *  </code>
 * </pre>
 *   Get the action by actionId
 * <pre>
 * 	<code>
 * 		var action = ActionRegistry.getAction("searchAction");
 *  </code>
 * </pre>
 * 
 * @author Gabor Kokeny
 * @class ActionRegistry
 */
ActionRegistry = function() {

	/**
	 * Registered actions
	 */
	var actions = {};

	var get = function(actionId) {
		return actions[actionId];
	};

	var put = function(actionId, action) {
		actions[actionId] = action;
	};

	var remove = function(acitonId) {
		delete actions[actionId];
	};

	return {
		
		/**
		 * Get action by actionId
		 * 
		 * @param actionId The id of the action
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
		 * @param action The action object
		 */
		reg : function(action) {
			put(action.itemId, action);
			console.debug("Action %s has been registered ", action.itemId);
		},

		/**
		 * Unregister an action by actionId;
		 * 
		 * @param {string} actionId The id of the action
		 */
		unreg : function(actionId) {
			remove(actionId);
			console.debug("Action %s has been unregistered ", actionId);
		}
	}
}();
