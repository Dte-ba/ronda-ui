//import rondaUI from '../../';

import {
  routeConfig
} from './app.config';

import main from './main/main.component';

// the ronda docs app
angular.module('rondaDocs', [
	'ngAnimate',
	'ngSanitize', 
  'ngMaterial',
  'ngAria',
	'ngMessages',
  'ui.router',
	//rondaUI,
  main
])
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['rondaDocs'], {
      strictDi: true
    });
  });
