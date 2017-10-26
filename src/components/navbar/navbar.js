'use strict';

import $ from 'jquery';

const HIEGHT_BREACKPOINT = 100;

export default angular
	.module('ronda-ui.components.navbar', [])
	.directive('rdNavbar', RdNavbar)
	.name;

class RdNavbarController {
	/*@ngInject*/
	constructor($scope, $element, $window, $mdMedia, $timeout){
		this.$scope = $scope;
    this.$element = $element;
    this.$timeout = $timeout;

    this.$element.addClass('rd-navbar');

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

		    this.removeDropdown();
		  }); 

		  $(document).click(() => {
		  	this.removeDropdown();
		  });
		});

		// the dropdown
		this.$scope.dropdownOpened = false;
		this.$scope.toggleDropdown = ($event) => {
			this.$scope.dropdownOpened = !this.$scope.dropdownOpened;
			$event.stopPropagation();
		};
	}

	removeDropdown(){
		// remove the dropdown
    if (this.$scope.dropdownOpened) {
    	this.$scope.dropdownOpened = false;
    	this.$timeout(() => {
    		this.$scope.$apply();
    	});
    }
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
			'tools': 'rdNavbarTools',
			'body': '?rdNavbarBody'
		},
		template: require('./navbar.html')
	}
}