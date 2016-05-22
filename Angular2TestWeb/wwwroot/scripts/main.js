"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var app_1 = require('./app');
browser_1.bootstrap(app_1.AppComponent)
    .then(function (success) { return console.log('Bootstrap success'); })
    .catch(function (error) { return console.log(error); });
//let test: string = "1";
//document.writeln(test); 
//# sourceMappingURL=main.js.map