sap.ui.define([
    '../localService/mockServer'
], function(mockServer) {
    'use strict';
    
    // Initialize mock server
    mockServer.init();

    // Initialize embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
})