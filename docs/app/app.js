import {
  routeConfig,
  runApp
} from './app.config';

// directives
import hljs from './app.directive.hljs';

// endpoints
import main from './main/main.component';
import experiments from './experiments/experiments.component';

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
  'ronda-ui',
  hljs,
  navbar,
  footer,
  sitemap,
  main,
  experiments
])
.run(runApp)
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['rondaDocs'], {
      strictDi: true
    });
  });
