'use strict';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
  	enabled: true
  });
}

export function runApp() {
	'ngInject';
}