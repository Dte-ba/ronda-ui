//import rondaUI from '../../';

import {
  routeConfig
} from './app.config';

import main from './main/main.component';

angular.module('rondaDocs', []);

// the ronda docs app
angular.module('rondaDocs', [
	'ngAnimate',
  'ngSanitize', 
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ui.router',
  main
])
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['rondaDocs'], {
      strictDi: true
    });
  });
