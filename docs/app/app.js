//import rondaUI from '../../';

import {
  routeConfig,
  runApp
} from './app.config';

// directives
import hljs from './app.directive.hljs';

// endpoints
import main from './main/main.component';

// components
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import sitemap from '../components/sitemap/sitemap.component';

angular.module('rondaDocs', []);

// the ronda docs app
angular.module('rondaDocs', [
	'ngAnimate',
  'ngSanitize', 
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ui.router',
  hljs,
  navbar,
  footer,
  sitemap,
  main,
])
.run(runApp)
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['rondaDocs'], {
      strictDi: true
    });
  });
