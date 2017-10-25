import angular from 'angular';
import routing from './experiments.routes';

export class ExperimentsController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
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
