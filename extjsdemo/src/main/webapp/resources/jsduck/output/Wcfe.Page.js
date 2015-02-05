Ext.data.JsonP.Wcfe_Page({"tagname":"class","name":"Wcfe.Page","autodetected":{"extends":true,"members":true},"files":[{"filename":"Page.js","href":"Page.html#Wcfe-Page"}],"author":[{"tagname":"author","name":"Gabor Kokeny","email":null}],"singleton":true,"extends":"Ext.Panel","members":[{"name":"border","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-border","meta":{}},{"name":"cls","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-cls","meta":{}},{"name":"frame","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-frame","meta":{}},{"name":"region","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-region","meta":{}},{"name":"stateId","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-stateId","meta":{}},{"name":"stateful","tagname":"cfg","owner":"Wcfe.Page","id":"cfg-stateful","meta":{}},{"name":"constructor","tagname":"method","owner":"Wcfe.Page","id":"method-constructor","meta":{"protected":true}},{"name":"applyState","tagname":"method","owner":"Wcfe.Page","id":"method-applyState","meta":{"protected":true}},{"name":"createItems","tagname":"method","owner":"Wcfe.Page","id":"method-createItems","meta":{"protected":true}},{"name":"getState","tagname":"method","owner":"Wcfe.Page","id":"method-getState","meta":{"protected":true}},{"name":"initComponent","tagname":"method","owner":"Wcfe.Page","id":"method-initComponent","meta":{"protected":true}},{"name":"initStateEvents","tagname":"method","owner":"Wcfe.Page","id":"method-initStateEvents","meta":{"protected":true}},{"name":"onHistoryChange","tagname":"method","owner":"Wcfe.Page","id":"method-onHistoryChange","meta":{}},{"name":"setContent","tagname":"method","owner":"Wcfe.Page","id":"method-setContent","meta":{}},{"name":"changed","tagname":"event","owner":"Wcfe.Page","id":"event-changed","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Wcfe.Page","component":false,"superclasses":["Ext.Panel"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Panel<div class='subclass '><strong>Wcfe.Page</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Page.html#Wcfe-Page' target='_blank'>Page.js</a></div></pre><div class='doc-contents'><p>Center panel extend the Ext.Panel class We can use this class to manage\ncenter content of application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-border' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-border' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-border' class='name expandable'>border</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;x-container&#39;</code></p></div></div></div><div id='cfg-frame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-frame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-frame' class='name expandable'>frame</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-region' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-region' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-region' class='name expandable'>region</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;center&#39;</code></p></div></div></div><div id='cfg-stateId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-stateId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-stateId' class='name expandable'>stateId</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The unique state idendity of MainContainer ...</div><div class='long'><p>The unique state idendity of MainContainer</p>\n<p>Defaults to: <code>&quot;mainContainer.state&quot;</code></p></div></div></div><div id='cfg-stateful' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-cfg-stateful' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-cfg-stateful' class='name expandable'>stateful</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>MainContainer is a statful object ...</div><div class='long'><p>MainContainer is a statful object</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Wcfe.Page-method-constructor' class='name expandable'>Wcfe.Page</a>( <span class='pre'></span> ) : <a href=\"#!/api/Wcfe.Page\" rel=\"Wcfe.Page\" class=\"docClass\">Wcfe.Page</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Create new instance of MainContainer ...</div><div class='long'><p>Create new instance of MainContainer</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Wcfe.Page\" rel=\"Wcfe.Page\" class=\"docClass\">Wcfe.Page</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-applyState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-applyState' class='name expandable'>applyState</a>( <span class='pre'>state</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Apply state ...</div><div class='long'><p>Apply state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'><p>The new state of the MainContainer</p>\n</div></li></ul></div></div></div><div id='method-createItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-createItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-createItems' class='name expandable'>createItems</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>create own items ...</div><div class='long'><p>create own items</p>\n</div></div></div><div id='method-getState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-getState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-getState' class='name expandable'>getState</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Get current state of main container ...</div><div class='long'><p>Get current state of main container</p>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Initialize center content of application ...</div><div class='long'><p>Initialize center content of application</p>\n</div></div></div><div id='method-initStateEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-initStateEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-initStateEvents' class='name expandable'>initStateEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Initialize state events ...</div><div class='long'><p>Initialize state events</p>\n</div></div></div><div id='method-onHistoryChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-onHistoryChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-onHistoryChange' class='name expandable'>onHistoryChange</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This function executed when the History changed. ...</div><div class='long'><p>This function executed when the History changed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : String<div class='sub-desc'><p>token The history token</p>\n</div></li></ul></div></div></div><div id='method-setContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-method-setContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-method-setContent' class='name expandable'>setContent</a>( <span class='pre'>content</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the current content ...</div><div class='long'><p>Set the current content</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>content</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/Wcfe.Page-event-changed\" rel=\"Wcfe.Page-event-changed\" class=\"docClass\">changed</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-changed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Wcfe.Page'>Wcfe.Page</span><br/><a href='source/Page.html#Wcfe-Page-event-changed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Wcfe.Page-event-changed' class='name expandable'>changed</a>( <span class='pre'>event, content</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>MainContainer fire this event after the content was\n       changed ...</div><div class='long'><p>MainContainer fire this event after the content was\n       changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>The event object</p>\n</div></li><li><span class='pre'>content</span> : Object<div class='sub-desc'><p>The new content</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});