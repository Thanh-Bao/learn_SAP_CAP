sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                const oStateModel = new JSONModel({
                    ls: [],
                });

                this.getView().setModel(oStateModel, "obj");

                fetch("/catalog/Authors")
                    .then(data => data.json())
                    .then(data => {
                        console.log(data.value);
                        this.getView().getModel('obj').setProperty(`/ls`, data.value)
                    })
            }
        });
    });
