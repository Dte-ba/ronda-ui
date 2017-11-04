import angular from 'angular';
import routing from './experiments.routes';

export class ExperimentsController {

  /*@ngInject*/
  constructor($http, $element) {
    this.$http = $http;
    $element.addClass('section-content');
  }

  itemClicked(item) {
    console.log(item);
  }

  $onInit(){
    
  }

}

export default angular.module('rondaDocs.experiments', [])
  .config(routing)
  .component('experiments', {
    template: require('./experiments.html'),
    controller: ExperimentsController
  })
  .name;
