sap.ui.define([
	"sap/ui/core/UIComponent",
	"com/test/login/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, BaseController, JSONModel) {
	"use strict";

	return UIComponent.extend("com.test.login.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});

});