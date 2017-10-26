'use strict';

export default angular
	.module('ronda-ui.components.navbarItem', [])
	.directive('rdNavbarItem', RdContainer)
	.name;

class RdNavbarItemController {
	/*@ngInject*/
	constructor($scope, $element){
		this.$scope = $scope;
    this.$element = $element;
    // has a model?
    let m = this.$scope.ngModel;
		if (m && typeof m === 'object') {
			//replace the scope;
			this.$scope.icon = m.icon;
			this.$scope.caption = m.caption;
			this.$scope.section = m.section;
		}

    this.$element.addClass('rd-navbar-item');
    this.$element.attr('data-rd-section', this.$scope.section);

    this.$scope.$watch(() => { return this.$scope.selected }, (value) => {
    	if (value) {
    		this.$element.addClass('selected');
    	} else {
    		this.$element.removeClass('selected')
    	}
    });
	}
}

function RdContainer(){
	'ngInject';

	return {
		restrict: 'E',
		controller: RdNavbarItemController,
		scope: {
			icon: '@navbarItemIcon',
			caption: '@navbarItemCaption',
			section: '@navbarItemSection',
			ngModel: '=',
			selected: '=navbarItemSelected'
		},
		template: require('./navbar-item.html')
	}
}