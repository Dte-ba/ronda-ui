'use strict';

import $ from 'jquery';

export class NavbarComponent {

  /*@ngInject*/
  constructor(){
    this.currentSection = 'actividades';
  }

  $onInit(){
  }

  toggleSection(section){
    if (this.currentSection === section){
      return;
    }
    this.currentSection = section;
    $('.ronda-banner, .ronda-section-toolbar').attr('data-section', section);
    $('.navbar-button').removeClass('selected');
    $(`.navbar-button[data-section="${section}"]`).addClass('selected');
  }

}

export default angular.module('rondaDocs.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
