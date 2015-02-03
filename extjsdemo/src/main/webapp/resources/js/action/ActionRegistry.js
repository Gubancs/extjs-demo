/**
 * Singleton pattern
 * 
 * @returns {___anonymous_ActionRegistry}
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
		reg : function(action) {
			put(action.itemId, action);
			console.debug("Action %s has been registered ", action.itemId);
		},

		unreg : function(actionId) {
			remove(actionId);
			console.debug("Action %s has been unregistered ", actionId);
		}
	}
}();
