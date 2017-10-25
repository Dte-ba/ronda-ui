'use strict';

import $ from 'jquery';

const HIEGHT_BREACKPOINT = 100;

export default angular
	.module('ronda-ui.components.navbar', [])
	.directive('rdNavbar', RdNavbar)
	.name;

class RdNavbarController {
	/*@ngInject*/
	constructor($scope, $element, $window, $mdMedia){
		this.$scope = $scope;
    this.$element = $element;
    
    this.$element.addClass('rd-navbar md-whiteframe-4dp');

    this.$scope.$watch(() => { return $mdMedia('xs') || $mdMedia('sm'); }, (mobile) => {
    	this.$scope.isMobile = mobile === true;
    });

    let clsScrolled = 'rd-scrolled';

    $(document).ready(() => {
		  var scrollTop = 0;
		  $(window).scroll(() => {
		    scrollTop = $(window).scrollTop();
		    if (scrollTop >= HIEGHT_BREACKPOINT) {
		      this.$element.addClass(clsScrolled);
		    } else if (scrollTop < HIEGHT_BREACKPOINT) {
		      this.$element.removeClass(clsScrolled);
		    } 
		  }); 
		});
	}
}

function RdNavbar($window){
	'ngInject';

	return {
		restrict: 'E',
		controller: RdNavbarController,
		scope: {
			logo: '@logo',
			logoScrolled: '@logoScrolled'
		},
		transclude: {
			'items': 'rdNavbarItems',
			'tools': 'rdNavbarTools'
		},
		template: require('./navbar.html')
	}
}