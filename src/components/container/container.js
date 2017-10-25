'use strict';

export default angular
	.module('ronda-ui.components.container', [])
	.directive('rdContainer', RdContainer)
	.name;

class RdContentController {
	/*@ngInject*/
	constructor($scope, $element){
		this.$scope = $scope;
    this.$element = $element;
	}
}

function RdContainer(){
	'ngInject';

	return {
		restrict: 'E',
		controller: RdContentController,
		link: (scope, element, attrs, ctrl, transclude) => {
			
			let fluid = attrs.rdContainerFluid || '';
			let isFluid = attrs.rdContainerFluid !== undefined;

			element.addClass('rd-container');

			let cls = '';

			if (isFluid){
				fluid = fluid.trim();
				cls = 'rd-container-fluid';
				if (typeof fluid === 'string' && fluid !== ''){
					cls = '';
					let fuilds = fluid.split(/\s+/);
					fuilds.forEach(t => {
						cls += `rd-container-fluid-${t} `;
					});
				}
			}
			
			element.addClass(cls);
		}
	}
}