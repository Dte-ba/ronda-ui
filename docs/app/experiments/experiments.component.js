import angular from 'angular';
import routing from './experiments.routes';

export class ExperimentsController {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;

    this.selected = 'propuestas';

    this.navbarItems = [
      { section: 'propuestas', icon: 'ri ri-propuestas', caption: 'Propuesta didáctica' },
      { section: 'actividades', icon: 'ri ri-actividades', caption: 'Actividades' },
      { section: 'herramienta', icon: 'ri ri-herramienta', caption: 'Herramientas' },
      { section: 'orientaciones', icon: 'ri ri-orientaciones', caption: 'Orientaciones' },
      { section: 'mediateca', icon: 'ri ri-mediateca', caption: 'Mediateca' },
    ];
  }

  itemClicked(item) {
    this.selected = item.section;
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
