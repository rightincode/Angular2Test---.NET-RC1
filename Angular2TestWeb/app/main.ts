///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app';

bootstrap(AppComponent)
.then(success => console.log('Bootstrap success'))
.catch(error => console.log(error));

//let test: string = "1";
//document.writeln(test);