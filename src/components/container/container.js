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

    this.$element.addClass('rd-container');

    let fluid = this.$scope.containerFluid || '';
		let isFluid = this.$scope.containerFluid !== undefined;

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
		
		this.$element.addClass(cls);
	}
}

function RdContainer(){
	'ngInject';

	return {
		restrict: 'E',
		controller: RdContentController,
		scope: {
			containerFluid: '@containerFluid'
		}
	}
}