'use strict';

import $ from 'jquery';

export class NavbarComponent {

  /*@ngInject*/
  constructor(){
    this.currentSection = 'actividades';

    this.selected = 'actividades';

    this.navbarItems = [
      { section: 'propuestas', icon: 'ri ri-propuestas', caption: 'Propuesta didáctica' },
      { section: 'actividades', icon: 'ri ri-actividades', caption: 'Actividades' },
      { section: 'herramientas', icon: 'ri ri-herramienta', caption: 'Herramientas' },
      { section: 'orientaciones', icon: 'ri ri-orientaciones', caption: 'Orientaciones' },
      { section: 'mediateca', icon: 'ri ri-mediateca', caption: 'Mediateca' },
    ];
  }

  itemClicked(item) {
    if (this.selected === item.section){
      return;
    }
    this.selected = item.section;
    $('.ronda-banner, .ronda-section-toolbar').attr('data-section', item.section);
  }

  $onInit(){
  }

}

export default angular.module('rondaDocs.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
