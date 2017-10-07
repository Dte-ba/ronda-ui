import angular from 'angular';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;

    this.iconsSample1 = '<i class="ri ri-icon-name" aria-hidden="true"></i>';
  }

  $onInit(){
    
  }

}

export default angular.module('rondaDocs.main', [])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
