Ext.ns("Wcfe.state");

/**
 * @class Wcfe.state.LocalStorageProvider
 * @extends Ext.state.Provider
 * 
 * Custom state provider implementation.
 * LocalStorageProvider use the HTML5 localstorage for save state of objects.
 * 
 * @author Gabor Kokeny
 */
Wcfe.state.LocalStorageProvider = Ext.extend(Ext.state.Provider, {
	
	/**
	 * 
	 * Constructor
	 */
    constructor : function(config){
    	if(!Wcfe.supportsLocalStorage()){
    		throw "Couldn't initialize LocalStorageProvider because your browser is not supports the HTML5 localStorage";
    	}
    	
    	Wcfe.state.LocalStorageProvider.superclass.constructor.call(this);

    	//Delete unused variable
    	delete this.state;
    	
    	Ext.apply(this, config);
        
        console.debug("LocalStorageProvider initialized", this);
    },

    /**
     * 
     * @param key The key of state
     * @param defaultValue  The defaultValue
     * 
     * @returns If localStorage contains key then return the current
     * value else return the defaultValue
     */
    get : function(key, defaultValue){
    	var value = localStorage.getItem(key);	

    	if(value == null){
    		console.warn("There is no value in localstorage with key", key);
    		return defaultValue;
    	}
    	
    	value = this.decodeValue(value);
      
    	console.debug("LocalStorageProvider - get state of '"+ key+"'", value);
        
        return value;
    },

    /**
     * Set value in localStorage
     * 
     * @param name The key of state
     * @param value The current valu e of state
     */
    set : function(key, value){
        if(typeof value == 'undefined' || value === null){
            this.clear(key);
            return;
        }
        console.debug("LocalStorageProvider - set state of '"+ key+"'", value);
        
        localStorage.setItem(key, this.encodeValue(value));
      
        this.fireEvent("statechange", this, key, null);
    },

    /**
     * Remove item from the localeStorage by a key
     * 
     * @param name The key of state
     */
    clear : function(key){
        console.debug("LocalStorageProvider - clear state of '"+ key+"'");
        
        localStorage.removeItem(key);
        
        this.fireEvent("statechange", this, key, value);
    }
   
});