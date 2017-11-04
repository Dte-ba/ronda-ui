'use strict';

import $ from 'jquery';

export function routeConfig($urlRouterProvider, $locationProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
  	enabled: false
  });
}

export function runApp() {
	'ngInject';
}