import angular from 'angular';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;

    this.iconsSample1 = '<i class="ri ri-icon-name" aria-hidden="true"></i>';

    this.title1 = 'Button';
    this.title4 = 'Warn';
    this.isDisabled = true;
    this.googleUrl = 'http://google.com';

    this.currentTheme = 'rdOrientaciones';

    this.themes = [
      { caption: 'Propuestas', theme: 'rdPropuestas' },
      { caption: 'Actividades', theme: 'rdActividades' },
      { caption: 'Herramientas', theme: 'rdHerramientas' },
      { caption: 'Orientaciones', theme: 'rdOrientaciones' },
      { caption: 'Mediateca', theme: 'rdMediateca' }
    ];
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
