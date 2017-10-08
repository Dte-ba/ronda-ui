'use strict';

import theming from './theming';

// configs
export function rondaConfig($mdThemingProvider) {
  'ngInject';

  // create theming
  theming($mdThemingProvider);

  $mdThemingProvider.theme('rdPropuestas')
  	.primaryPalette('propuestas');
  $mdThemingProvider.theme('rdActividades')
		.primaryPalette('actividades');
	$mdThemingProvider.theme('rdHerramientas')
		.primaryPalette('herramientas');
	$mdThemingProvider.theme('rdOrientaciones')
		.primaryPalette('orientaciones');
	$mdThemingProvider.theme('rdMediateca')
		.primaryPalette('mediateca');

  $mdThemingProvider.theme('default')
    .primaryPalette('ronda');
}